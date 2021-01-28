import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { States } from 'src/Entities/State.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {

    private logger = new Logger('States:Crudervices');
    
    constructor(@InjectRepository(States) private statesRepo: Repository<States>) {}

    async getState(): Promise<IReturnType> {
        try {
            const states = await this.statesRepo.find();

            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'states found',
                data: states,
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


    async addState(state: Partial<States>): Promise<IReturnType> {
        try {
            const states = await this.statesRepo.save(state);

            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'state created',
                data: states,
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
