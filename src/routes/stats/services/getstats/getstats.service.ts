import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from 'src/Entities/Listing.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm'

@Injectable()
export class GetstatsService {
    constructor(@InjectRepository(Listing) private listingRepo: Repository<Listing>) {}

    async getStats(): Promise<IReturnType> {
        try {
            const listings = await this.listingRepo.find();
            const latest = await this.listingRepo.createQueryBuilder('listings').limit(3).execute();
            const requests: Listing[] = [];
            const approvedListing: Listing[] = [];

            // get approved
            approvedListing.push(...listings.filter((item) => item.approved));

            // get requets
            requests.push(...listings.filter((item) => item.approved === false));

            const mySet = new Set<string>();
            listings.map((item) => mySet.add(item.business_name));
            return Return({
                error: false,
                statusCode: 200,
                data: {
                    approved: approvedListing.length,
                    request: requests.length,
                    business: mySet.size,
                    latest,
                }
            });
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }
}
