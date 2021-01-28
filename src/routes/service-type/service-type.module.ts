import { Module } from '@nestjs/common';
import { ServicetypeController } from './servicetype/servicetype.controller';
import { CrudService } from './services/crud/crud.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Services } from 'src/Entities/ServiceType.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Services
    ])
  ],
  controllers: [ServicetypeController],
  providers: [CrudService]
})
export class ServiceTypeModule {}
