import { Module } from '@nestjs/common';
import { ZipcodeController } from './zipcode/zipcode.controller';
import { CrudService } from './zipcode/services/crud/crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZipCode } from 'src/Entities/Zipcode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ZipCode
    ])
  ],
  controllers: [ZipcodeController],
  providers: [CrudService]
})
export class ZipCodeModule {}
