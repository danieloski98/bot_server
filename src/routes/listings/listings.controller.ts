import { Controller, Res, Post, Logger, Get, Body } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Listing } from 'src/Entities/Listing.entity';
import { Return } from 'src/utils/ReturnObject';
import { CrudService } from './services/crud/crud.service';

@Controller('listings')
export class ListingsController {

    logger = new Logger('ListingController');

    constructor(private crudService: CrudService) {}

    @Get()
    @ApiTags('Listings')
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async getListings(@Res() res: Response): Promise<void> {
        res.status(200).send({ msg: 'Hello there people' })
    }

    @Post('add')
    @ApiTags('Listings')
    @ApiBody({ type: Listing })
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async addListing(@Res() res: Response, @Body() body: Listing): Promise<void> {
        if (body === undefined || body === null) {
            res.status(400).send(Return({
                error: true,
                statusCode: 400,
                errorMessage: 'Payload not found'
            }))
        }
        const result = await this.crudService.addListing(body);
        res.status(result.statusCode).send(result);
    }
}
