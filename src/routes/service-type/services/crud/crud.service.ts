import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from 'src/Entities/ServiceType.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {
    private logger = new Logger('ServicesTypes:CrudService');

    constructor(@InjectRepository(Services) private servicesRepo: Repository<Services>) {}

    async getServices(): Promise<IReturnType> {
        try {
            const services = await this.servicesRepo.find();
            this.logger.log(services);
            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'services found',
                data: services
            })
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: "Internal server error",
                trace: error,
            })
        }
    }


    async addServices(service: Services): Promise<IReturnType> {
        try {

            if (service === null || service === undefined) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'payload cannot be empty'
                })
            }

            const createdService = await this.servicesRepo.save(service);
            this.logger.log(createdService);
            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'Service added succssfully',
                data: createdService
            })
            
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: "Internal server error",
                trace: error,
            })
        }
    }
}
