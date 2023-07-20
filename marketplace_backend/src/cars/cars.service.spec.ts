/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of cars', () => {
    const result = service.findAll();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return a car by ID', () => {
    const id = '64acfe1efebd5d00024c3361';
    const result = service.findOne(id);
    expect(result).toBeDefined();
    expect(result?._id).toBe(id);
  });

  it('should return cars that match the given property and value', () => {
    const property = 'make'; 
    const value = 'Ford'; 
    const result = service.searchByProperty(property, value);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((car) => car[property] === value)).toBe(true);
  });

  it('should return cars that match the given keyword', () => {
    const keyword = 'fo'; 
    const result = service.searchByKeyword(keyword);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((car) => JSON.stringify(car).toLowerCase().includes(keyword.toLowerCase()))).toBe(true);
  });
});
