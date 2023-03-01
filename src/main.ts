import { NestFactory } from '@nestjs/core';
import  AppModule  from './app.module';
import { ValidationPipe } from "./pipe/validation.pipe";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Interexy backend')
    .setDescription('Nest.js project')
    .setVersion('1.0')
    .addTag('Alex Borichevsky')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);

  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();

