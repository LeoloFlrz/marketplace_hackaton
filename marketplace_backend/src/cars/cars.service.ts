import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';
import * as data from './../../data/data.json';

// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  // create(createCarDto: CreateCarDto) {
  //   return 'This action adds a new car';
  // }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  // update(id: number, updateCarDto: UpdateCarDto) {
  //   return `This action updates a #${id} car`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} car`;
  // }
}
