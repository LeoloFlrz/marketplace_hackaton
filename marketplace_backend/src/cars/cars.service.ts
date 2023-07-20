/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as data from './../../data/data.json';


@Injectable()
export class CarsService {

  findAll() {
    return data;
  }

  findOne(id: string) {
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
}
