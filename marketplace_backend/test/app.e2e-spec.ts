import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CarsService } from '../src/cars/cars.service';
import * as data from '../data/data.json';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let carsService: CarsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    carsService = moduleFixture.get(CarsService)
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('/cars (GET)', () => {
    it('should return an array of cars', async () => {
      const response = await request(app.getHttpServer()).get('/cars');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toMatchObject(data)
    });
  });

  describe('/cars/:id (GET)', () => {
    it('should return a car by ID', async () => {
      const carId = '64acfe1efebd5d00024c3361';
      const car = data.find((item) => item._id === carId);

      const response = await request(app.getHttpServer()).get(`/cars/${carId}`);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body._id).toBe(carId);
      expect(response.body).toMatchObject(car)
    });
  });

  describe('/cars/search/:property/:value (GET)', () => {
    it('should return cars that match the given property and value', async () => {
      const property = 'make';
      const value = 'Ford';
      const matchingCars = data.filter((item) => item[property] === value);
  
      const response = await request(app.getHttpServer()).get(`/cars/search/${property}/${value}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
  
      expect(response.body).toHaveLength(matchingCars.length); 
      expect(response.body).toEqual(expect.arrayContaining(matchingCars)); 
    });
  });

  describe('/cars/search/:keyword (GET)', () => {
    it('should return cars that match the given keyword', async () => {
      const keyword = 'ford';

      const response = await request(app.getHttpServer()).get(`/cars/search/${keyword}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      const matchingCars = response.body.every((car) => {
        for (const key in car) {
          if (typeof car[key] === 'string' && car[key].toLowerCase().includes(keyword.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
  
      expect(matchingCars).toBe(true);
    });
  });
});
