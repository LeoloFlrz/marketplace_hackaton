import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import './css/CarCard.css';
import { CarCard } from './Carcard';

interface Car {
  _id: string;
  model: string;
  doors: number;
  year: number;
  km: number;
  horsepower: number;
  fuelType: string;
  price: number;
  image_url: string;
}

interface CardetailProps {
  id: Car["_id"];
}

export const Cardetail: React.FC<CardetailProps> = ({id:carId}) => {

  const [car, setCar] = useState<Car | null>(null);
  console.log(carId)
  
  useEffect(() => {
    // Fetch the data from your API or data source
    fetch(`http://localhost:3000/cars/${carId}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [carId]);
  
  if (!car) {
    return <p>Loading...</p>;
  }
 
  return (
    <>
      <Contact />
        <div className="col-md-4 mb-4" key={car._id}>
            <CarCard  car={car}  />
        </div>
             
   
    </>
  );
};