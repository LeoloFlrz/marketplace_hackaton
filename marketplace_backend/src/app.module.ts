import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot('mongodb://localhost/arabadb', {
      uri: 'mongodb://localhost/arabadb',
      connectionName: 'arabadb',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
