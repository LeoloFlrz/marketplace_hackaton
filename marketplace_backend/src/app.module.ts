/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import mongooseConfig from '../data/mongoose.config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';


@Module({
  imports: [MongooseModule.forRootAsync({ useFactory: () => mongooseConfig, }),
    CarsModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
