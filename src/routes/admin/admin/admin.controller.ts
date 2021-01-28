import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Admin } from 'src/Entities/Admin.entity';
import { CrudService } from '../services/crud/crud.service';

@Controller('admin')
export class AdminController {

    logger = new Logger('AdminController');
    constructor(private crudService: CrudService) {}

    @Get(':id')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiParam({ name: 'id', type: String })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async getAdminById(@Res() res: Response, @Param() param: any): Promise<void> {
        const result = await this.crudService.getAdminById(param['id']);
        res.status(result.statusCode).send(result);
    }

    @Get('')
    @ApiTags('Admin')
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async getAllAdmins(@Res() res: Response,): Promise<void> {
        const result = await this.crudService.getAllAdmins();
        res.status(result.statusCode).send(result);
    }


    @Post('create')
    @ApiTags('Admin')
    @ApiBody({ type: Admin,  })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async createAdmin(@Res() res: Response, @Body() body: Admin): Promise<void> {
        console.log(body);
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


    @Put(':id')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiParam({ name: 'id', type: String })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async updateAdmin(@Res() res: Response, @Body() body: Partial<Admin>, @Param() param: any): Promise<void> {
        this.logger.log(param);
        this.logger.log(body);
        const result = await this.crudService.updateAdmin(param['id'], body);
        res.status(result.statusCode).send(result);
    }


    @Put('updatepassword/:id')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiParam({ name: 'id', type: String })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async updatePassword(@Res() res: Response, @Body() body: any, @Param() param: any): Promise<void> {
        const result = await this.crudService.updatePassword(param['id'], body);
        res.status(result.statusCode).send(result);
    }

    @Delete(':admin_id')
    @ApiTags('Admin')
    @ApiBody({ type: Admin })
    @ApiParam({ name: 'admin_id', type: String })
    @ApiBadRequestResponse({ description: 'An error occured' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async deleteAdmin(@Res() res: Response, @Body() body: any, @Param() param: any): Promise<void> {
        const result = await this.crudService.deleteAdmin(param['admin_id']);
        res.status(result.statusCode).send(result);
    }


}



