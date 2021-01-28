import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZipCode } from 'src/Entities/Zipcode.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {
    private logger = new Logger('Zipocode:CrudService');
    constructor(@InjectRepository(ZipCode) private zipcodeRepo: Repository<ZipCode>) {}

    async getZipcode(): Promise<IReturnType> {
        try {
            const zipcodes = await this.zipcodeRepo.find();
            this.logger.log(zipcodes)
            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'states found',
                data: zipcodes,
            })
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            })
        }
    }


    async addState(zipcode: Partial<ZipCode>): Promise<IReturnType> {
        try {
            const zipcodes = await this.zipcodeRepo.save(zipcode);

            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'state created',
                data: zipcodes,
            })
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            })
        }
    }
}
