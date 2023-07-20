import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './carcard.css';
import puerta from '../assets/puerta coche3dpi 2.svg';
import check from '../assets/check3dpi 2.svg';
import taco from '../assets/tacometro3dpi 1.svg';
import auto from '../assets/car-13dpi.svg';
// import comb from '../assets/gasolina3dpi 1.svg';
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
            <li>
              <img src = {puerta} width="15" height="15"/>
              {doors} PUERTAS
              </li>
            <li>
              <img src = {check} width="15" height="15"/>
              {year}
            </li>
          </ul>
          <ul className='cardList'>
            <li>
              <img src = {auto} width="15" height="15"/>
              {km} KM
            </li>
            <li>
              <img src = {taco} width="15" height="15"/>
              {horsepower} CV
            </li>

            
            {/* <li>
              <img src = {comb} width="15" height="15"/>
              {fuelType}
            </li> */}
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
