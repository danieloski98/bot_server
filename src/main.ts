import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express'
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(morgan('combined'))
  
  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('doc', app, document);

  await app.listen(4000);
}
bootstrap();
