import { Controller, Res, Post, Logger, Get, Body, Query, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
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
    @ApiQuery({ description: 'the query for searching for example by zip_code of state'})
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async search(@Res() res: Response, @Query() query: Partial<Listing>): Promise<void> {
        if (query === null || query === undefined) {
            res.status(400).send(Return({
                error: true,
                statusCode: 400,
                errorMessage: 'No payload found'
            }))
        }
        const result = await this.crudService.getServices(query);
        res.status(result.statusCode).send(result);
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


    @Get('approved')
    @ApiTags('Listings')
    @ApiQuery({ name: 'offset'})
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async getApproved(@Res() res: Response, @Query() query: any) {
        if (query['offset'] === null || query['offset'] === undefined) {
            res.status(400).send(Return({
                error: true,
                statusCode: 400,
                errorMessage: 'offset not found'
            }))
        }
        const result = await this.crudService.getApprovedListings(query['offset']);
        res.status(result.statusCode).send(result);
    }

    @Get('all')
    @ApiTags('Listings')
    @ApiQuery({ name: 'offset'})
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async getListings(@Res() res: Response, @Query() query: any) {
        if (query['offset'] === null || query['offset'] === undefined) {
            res.status(400).send(Return({
                error: true,
                statusCode: 400,
                errorMessage: 'offset not found'
            }))
        }
        const result = await this.crudService.getListings(query['offset']);
        res.status(result.statusCode).send(result);
    }

    @Post(':listing_id')
    @ApiTags('Listings')
    @ApiParam({ name: 'listing_id', type: String})
    @ApiOkResponse({ description: 'the listing has been added' })
    @ApiBadRequestResponse({ description: 'There was an error while adding the listing ' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occured' })
    async approveLisitng(@Res() res: Response, @Param() param: any) {
        if (param['listing_id'] === null) {
            res.status(400).send(Return({
                error: true,
                statusCode: 400,
                errorMessage: 'offset not found'
            }))
        }
        const result = await this.crudService.approveListing(param['listing_id']);
        res.status(result.statusCode).send(result);
    }

}
