import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { GetstatsService } from './services/getstats/getstats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listing } from 'src/Entities/Listing.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Listing
    ]),
  ],
  controllers: [StatsController],
  providers: [GetstatsService]
})
export class StatsModule {}
