import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { Model, Schema, SchemaTypes } from 'mongoose';
import { Car } from './schemas/car.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('CarsService', () => {
  let service: CarsService;
  const mockCarModel = {
    find: jest.fn(),
    findById: jest.fn(),
  } as any;

  const cars: Car[] = [
    {
      image_url: 'https://example.com/car1.jpg',
      model: 'Model X',
      make: 'Tesla',
      price: 50000,
      doors: 4,
      year: 2023,
      city: 'Los Angeles',
      type: 'SUV',
      seats: new Date('2023-07-20'),
      fuel_type: 1,
      horsepower: 400,
      transmission: 'Automatic',
      fuel_tank_capacity: '60 liters',
      color: 'Black',
    },
    {
      image_url: 'https://example.com/car2.jpg',
      model: 'Corolla',
      make: 'Toyota',
      price: 35000,
      doors: 4,
      year: 2023,
      city: 'New York',
      type: 'Sedan',
      seats: new Date('2023-07-20'),
      fuel_type: 1,
      horsepower: 180,
      transmission: 'Automatic',
      fuel_tank_capacity: '50 liters',
      color: 'White',
    },
  ];

 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService,
        {
          provide: getModelToken(Car.name),
          useValue: mockCarModel,
        },
      ],
    }).compile();


    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


    it('should return an array of cars', async () => {
    
      jest.spyOn(mockCarModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(cars),
      });

      const result = await service.findAll();

      expect(result).toEqual(cars);
      expect(mockCarModel.find).toHaveBeenCalled();
    });

    it('should return a car by its id from the database', async () => {
      const carId = 'testCarId';
      const mockCar = cars[0]; 
  
      jest.spyOn(mockCarModel, 'findById').mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockCar),
      });
  
      const result = await service.findOne(carId);
  
      expect(result).toEqual(mockCar);
      expect(mockCarModel.findById).toHaveBeenCalledWith(carId);
    });

    it('should return cars based on property and value from the database', async () => {
      const property = 'type';
      const value = 'sedan';
  
      const mockQueryResult = cars.filter((car) => car[property] === value);
  
      jest.spyOn(mockCarModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockQueryResult),
      });
  
      const result = await service.searchByProperty(property, value);
  
      expect(result).toEqual(mockQueryResult);
      expect(mockCarModel.find).toHaveBeenCalledWith({ [property]: value });
    });
  
  });

