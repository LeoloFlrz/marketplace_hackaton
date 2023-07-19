/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as data from './../../data/data.json';

// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  // create(createCarDto: CreateCarDto) {
  //   return 'This action adds a new car';
  // }

  findAll() {
    return data;
  }

  findOne(id: string) {
    // return `This action returns a #${id} beer`;
    return data.find((e) => e._id == id);
  }

  searchByProperty(property: string, value: string) {
    return data.filter((item) => item[property] === value);
  }

  searchByKeyword(keyword: string): any[] {
    const results = data.filter(item => {
      for (const key in item) {
        if (typeof item[key] === 'string' && item[key].toLowerCase().includes(keyword.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return results;
  }
  // update(id: number, updateCarDto: UpdateCarDto) {
  //   return `This action updates a #${id} car`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} car`;
  // }
}
