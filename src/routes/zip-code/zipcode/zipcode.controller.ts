import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { States } from 'src/Entities/State.entity';
import { ZipCode } from 'src/Entities/Zipcode.entity';
import { CrudService } from './services/crud/crud.service';

@Controller('zipcode')
export class ZipcodeController {

    constructor(private crudService: CrudService) {}

    @Get()
    @ApiTags('Zipcode')
    @ApiOkResponse({ description: ''})
    @ApiBadRequestResponse({ description: ''})
    @ApiInternalServerErrorResponse({ description: ''})
    async getStates(@Res() res: Response) {
        const result = await this.crudService.getZipcode();
        res.status(result.statusCode).send(result);
    }

    

    @Post()
    @ApiTags('Zipcode')
    @ApiOkResponse({ description: ''})
    @ApiBadRequestResponse({ description: ''})
    @ApiInternalServerErrorResponse({ description: ''})
    async addState(@Res() res: Response, @Body() body: ZipCode) {
        const result = await this.crudService.addState(body);
        res.status(result.statusCode).send(result);
    }

}
