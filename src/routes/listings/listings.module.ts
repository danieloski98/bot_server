import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listing } from 'src/Entities/Listing.entity';
import { CrudService } from './services/crud/crud.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Listing
    ])
  ],
  controllers: [ListingsController],
  providers: [CrudService]
})
export class ListingsModule {}
