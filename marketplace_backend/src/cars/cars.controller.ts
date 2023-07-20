/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './schemas/car.schema';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car | null> {
    return this.carsService.findOne(id);
  }

  @Get('search/:property/:value')
  searchByProperty(
    @Param('property') property: string,
    @Param('value') value: string,
  ): Promise<Car[]> {
    return this.carsService.searchByProperty(property, value);
  }

  @Get('search/:keyword')
  searchByKeyword(@Param('keyword') keyword: string): Promise<Car[]> {
    return this.carsService.searchByKeyword(keyword);
  }

}
