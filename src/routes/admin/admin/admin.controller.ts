import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Admin } from 'src/Entities/Admin.entity';
import { CrudService } from '../services/crud/crud.service';

@Controller('admin')
export class AdminController {

    constructor(private crudService: CrudService) {}

    @Post('create')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async createAdmin(@Res() res: Response, @Body() body: Admin): Promise<void> {
        const result = await this.crudService.createAdmin(body);
        res.status(result.statusCode).send(result);
    }

    @Post('login')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async login(@Res() res: Response, @Body() body: Admin):Promise<void> {
        const result = await this.crudService.login(body);
        res.status(result.statusCode).send(result);
    }
}
