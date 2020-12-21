import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { CrudService } from './services/crud/crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin
    ])
  ],
  controllers: [AdminController],
  providers: [CrudService]
})
export class AdminModule {}
