import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Services } from 'src/Entities/ServiceType.entity';
import { CrudService } from '../services/crud/crud.service';


@Controller('servicetype')
export class ServicetypeController {

    constructor(private crudServices: CrudService) {}

    @Get()
    @ApiTags('Services')
    @ApiOkResponse({ description: 'service added successfully'})
    @ApiBadRequestResponse({ description: 'There was an error'})
    @ApiInternalServerErrorResponse({ description: ' internal server error' })
    async getServiceType(@Res() res: Response) {
        const result = await this.crudServices.getServices();
        res.status(result.statusCode).send(result);
    }

    @Post()
    @ApiTags('Services')
    @ApiOkResponse({ description: 'service added successfully'})
    @ApiBadRequestResponse({ description: 'There was an error'})
    @ApiInternalServerErrorResponse({ description: ' internal server error' })
    async createServiceType(@Res() res: Response, @Body() body: Services) {
        const result = await this.crudServices.addServices(body);
        res.status(result.statusCode).send(result);
    }


    @Put(':service_id')
    @ApiTags('Services')
    @ApiOkResponse({ description: 'service added successfully'})
    @ApiBadRequestResponse({ description: 'There was an error'})
    @ApiInternalServerErrorResponse({ description: ' internal server error' })
    async updateServiceType(@Res() res: Response, @Param() param: any) {
        res.send(param);
    }


    @Delete(':service_id')
    @ApiTags('Services')
    @ApiOkResponse({ description: 'service added successfully'})
    @ApiBadRequestResponse({ description: 'There was an error'})
    @ApiInternalServerErrorResponse({ description: ' internal server error' })
    async deleteServiceType(@Res() res: Response, @Param() param: any) {
        res.send(param);
    }
}
