import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidationResult } from 'joi';
import { Listing } from 'src/Entities/Listing.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';
import { ListingschemaValidator } from '../../../../utils/ListingValidator';

@Injectable()
export class CrudService {
    logger = new Logger('CRUDService');

    constructor(@InjectRepository(Listing) private listingRepo: Repository<Listing>) {}

    async addListing(payload: Listing): Promise<IReturnType> {
        try {
            // validate the payload
            const validation: ValidationResult = ListingschemaValidator.validate(payload);

            if (validation.error) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: validation.error.message,
                });
            } else {
                // add it to the databases
                const newEntry = await this.listingRepo.insert(payload);
                this.logger.log(newEntry);
                
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listing added successfully',
                });
            }
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
