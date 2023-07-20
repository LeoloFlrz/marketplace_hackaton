import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/CarCard.css';
import skoda_prueba from './assets/skoda_prueba.jpg';
import React from 'react';


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

interface CarCardProps {
    car: Car;
  }
  
  export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  
    const { model, doors, year, km, horsepower, fuelType, price, image_url } = car;
    return (
        <Card className='carCard' style={{ width: '18rem' }}>
      <Card.Img className='carImage' variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <div className='carCharacs'>
          <ul className='cardList'>
            <li>{doors} PUERTAS</li>
            <li>{year}</li>
          </ul>
          <ul className='cardList'>
            <li>{km} KM</li>
            <li>{horsepower} CV</li>
            <li>{fuelType}</li>
          </ul>
        </div>
        <div className='pricesandbutton'>
          <div className='prices'>
            <p className='fullprice'>{price.toFixed(2)}€</p>
            {/* Ajusta la forma en que se muestra el pago mensual */}
            <p className='payments'>desde 305,00€/mes</p>
          </div>
          <Button className='button' variant="primary">ME INTERESA</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
