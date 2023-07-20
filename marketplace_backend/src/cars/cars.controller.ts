/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.carsService.findOne(id);
  }

  @Get('search/:property/:value')
  async searchByProperty(
    @Param('property') property: string,
    @Param('value') value: string,
  ): Promise<any[]> {
    return this.carsService.searchByProperty(property, value);
  }

  @Get('search/:keyword')
  async searchByKeyword(@Param('keyword') keyword: string): Promise<any[]> {
    return this.carsService.searchByKeyword(keyword);
  }
}
