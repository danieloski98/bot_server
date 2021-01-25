import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListingsModule } from './routes/listings/listings.module';
import { AdminModule } from './routes/admin/admin.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'daniel',
      password: 'daniel98',
      database: 'bot',
      entities: ["dist/**/*.entity{.ts,.js}"],
      autoLoadEntities: true,
      logging: false,
      synchronize: true,
      entityPrefix: 'zoe_'
    }),
    ListingsModule,
    AdminModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}