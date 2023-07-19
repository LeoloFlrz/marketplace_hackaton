/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as data from './../../data/data.json';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';
import { Model } from 'mongoose';

// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<Car>,
  ) {}
  
  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car | null> {
    return this.carModel.findById(id).exec();
  }


  async searchByProperty(property: string, value: string): Promise<Car[]> {
    const query: Record<string, any> = {};
    query[property] = value;
    return this.carModel.find(query).exec();
  }

  async searchByKeyword(keyword: string): Promise<Car[]> {
    const regex = new RegExp(keyword, 'i');
    const query = {
      $or: Object.keys(this.carModel.schema.paths)
        .filter((key) => this.carModel.schema.paths[key].instance === 'String')
        .map((key) => ({ [key]: regex })),
    };
    return this.carModel.find(query).exec();
  }
}
