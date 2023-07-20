/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Get('search/:property/:value')
  searchByProperty(
    @Param('property') property: string,
    @Param('value') value: string,
  ) {
    return this.carsService.searchByProperty(property, value);
  }

  @Get('search/:keyword')
  searchByKeyword(@Param('keyword') keyword: string): any[] {
    return this.carsService.searchByKeyword(keyword);
  }

}
