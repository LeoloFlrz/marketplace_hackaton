/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from '../cars/cars.model';
// import * as data from './../../data/data.json';

// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()

export class CarsService {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) { }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  async searchByProperty(property: string, value: string): Promise<Car[]> {
    return this.carModel.find({ [property]: value }).exec();
  }

  async searchByKeyword(keyword: string): Promise<Car[]> {
    const regex = new RegExp(keyword, 'i');
    return this.carModel
      .find({
        $or: [
          { make: { $regex: regex } },
          { model: { $regex: regex } },
          { color: { $regex: regex } },
        ],
      })
      .exec();
  }
}
  
  
// export class CarsService {

//   findAll() {
//     return data;
//   }

//   findOne(id: string) {
//     // return `This action returns a #${id} beer`;
//     return data.find((e) => e._id == id);
//   }

//   searchByProperty(property: string, value: string) {
//     return data.filter((item) => item[property] === value);
//   }

//   searchByKeyword(keyword: string): any[] {
//     const results = data.filter(item => {
//       for (const key in item) {
//         if (typeof item[key] === 'string' && item[key].toLowerCase().includes(keyword.toLowerCase())) {
//           return true;
//         }
//       }
//       return false;
//     });
//     return results;
//   }
// }
