import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListingsModule } from './routes/listings/listings.module';
import { AdminModule } from './routes/admin/admin.module';
import { EmailModule } from './modules/email/email.module';
import { ServiceTypeModule } from './routes/service-type/service-type.module';
import { ZipCodeModule } from './routes/zip-code/zip-code.module';
import { StatesModule } from './routes/states/states.module';
import { StatsModule } from './routes/stats/stats.module';

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
    EmailModule,
    ServiceTypeModule,
    ZipCodeModule,
    StatesModule,
    StatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
