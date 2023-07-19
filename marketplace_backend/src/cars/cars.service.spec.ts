/* import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { Model, Schema } from 'mongoose';
import { Car } from './schemas/car.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('CarsService', () => {
  let service: CarsService;
  let carModel: Model<Car>;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService,
        {
          provide: getModelToken(Car.name),
          useValue: {
            find: jest.fn().mockReturnThis(),
            findById: jest.fn().mockReturnThis(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();


    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cars', async () => {
      const expectedCars: Car[] = [
        // Define your expected cars here
      ];

      jest.spyOn(carModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(expectedCars),
      } as any);

      const result = await carsService.findAll();

      expect(result).toEqual(expectedCars);
      expect(carModel.find).toHaveBeenCalled();
    });
  });

});
 */