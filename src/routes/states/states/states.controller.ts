import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { States } from 'src/Entities/State.entity';
import { CrudService } from '../services/crud/crud.service';

@Controller('states')
export class StatesController {

    constructor(private crudService: CrudService) {}

    @Get()
    @ApiTags('States')
    @ApiOkResponse({ description: ''})
    @ApiBadRequestResponse({ description: ''})
    @ApiInternalServerErrorResponse({ description: ''})
    async getStates(@Res() res: Response) {
        const result = await this.crudService.getState();
        res.status(result.statusCode).send(result);
    }

    

    @Post()
    @ApiTags('States')
    @ApiOkResponse({ description: ''})
    @ApiBadRequestResponse({ description: ''})
    @ApiInternalServerErrorResponse({ description: ''})
    async addState(@Res() res: Response, @Body() body: States) {
        const result = await this.crudService.addState(body);
        res.status(result.statusCode).send(result);
    }


}
