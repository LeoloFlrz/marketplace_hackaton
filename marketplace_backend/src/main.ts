/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si tu aplicación React envía cookies, establece esto en true
  });
  await app.listen(3000);
}
bootstrap();
