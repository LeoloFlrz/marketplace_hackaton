/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;

  const mockCarsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    searchByProperty: jest.fn(),
    searchByKeyword: jest.fn(),
  }

  const mockCars = [{id: "1", brand: "volkswagen", type: 'sedan' }, {id: 2, brand: "ford", type: 'SUV' }]


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        { provide: CarsService,
        useValue: mockCarsService}
        ],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the service to return all courses', async () => {

    jest.spyOn(mockCarsService, 'findAll').mockResolvedValue(mockCars);

    const result = await controller.findAll();

    expect(result).toEqual(mockCars);
});

  it('should call the service to return a car by id', async () => {
    const carId = "1";
    const car = [{"id": "1", "brand":"volkswagen", type: 'sedan' }];

    jest.spyOn(mockCarsService, 'findOne').mockResolvedValue(car)

    const result = await controller.findOne(carId);

    expect(result).toEqual(car);
  })

  it('should search for the car based on the entered key-value info', async () => {
    const property = 'type';
    const value = 'sedan';
    const expectedCar = [{ id: '1', brand: 'volkswagen', type: 'sedan' }];
  
    jest.spyOn(mockCarsService, 'searchByProperty').mockResolvedValue(expectedCar);
  
    const result = await controller.searchByProperty(property, value);
  
    expect(result).toEqual(expectedCar);
  });

  it('should search for the car based on the entered keyword', async () => {
    const keyword = 'wa';
    const expectedCar = [{ id: '1', brand: 'volkswagen', type: 'sedan' }];
  
    jest.spyOn(mockCarsService, 'searchByKeyword').mockResolvedValue(expectedCar);
  
    const result = await controller.searchByKeyword(keyword);
  
    expect(result).toEqual(expectedCar);

  });
});
