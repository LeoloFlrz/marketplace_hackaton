/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    CarsModule,
    MongooseModule.forRootAsync({
     useFactory: () => ({
        uri:'mongodb+srv://hbafzali:araba123@cluster0.mds36dy.mongodb.net/araba?retryWrites=true&w=majority',
        dbName: 'araba',
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


