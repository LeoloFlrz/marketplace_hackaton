import React, { useEffect, useState } from 'react';
import {CarCard} from './CarCard';

interface Car {
  _id: string;
  model: string;
  doors: number;
  year: number;
  horsepower: number;
  fuel_type: string;
  price: number;
  city: string;
  image_url:string;
}


export const  CarList: React.FC = ()=> {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // Fetch the data from your API or data source
    fetch('http://localhost:3000/cars')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="row">
      {cars.map((car) => (
        <div className="col-md-4 mb-4" key={car.model}>
            <CarCard  car={car}  />
        </div>
        
      ))}
    </div>
  );
};

