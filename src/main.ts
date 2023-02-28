import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "./pipe/validation.pipe";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const config = new DocumentBuilder()
    .setTitle('Nest interexy')
    .setDescription('Rest-api docs')
    .setVersion('1.0.0')
    .addTag('Alex Borichevsky')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)


  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
