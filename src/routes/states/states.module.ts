import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from 'src/Entities/State.entity';
import { StatesController } from './states/states.controller';
import { CrudService } from './services/crud/crud.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([
          States
      ])
  ],
  controllers: [StatesController],
  providers: [CrudService]
})
export class StatesModule {}
