import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { GetstatsService } from './services/getstats/getstats.service';

@Controller('stats')
export class StatsController {

    constructor(private stats: GetstatsService) {}

    @Get()
    @ApiTags('Stats')
    async getListings(@Res() res: Response): Promise<void> {
        const result = await this.stats.getStats();
        res.status(result.statusCode).send(result);
    }
    
}
