import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/Logo_optionOne.svg';
import './css/CarCard.css';


interface Car {
  _id: string;
  model: string;
  doors: number;
  year: number;
  horsepower: number;
  fuel_type: string;
  price: number;
  city: string;
  image_url: string;
}

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { model, doors, year, horsepower, fuel_type, price, city, image_url } = car;

  const [showModal, setShowModal] = useState(false);

  // Funciones para mostrar/ocultar la ventana modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Card className='carCard' style={{ width: '18rem' }}>
        <Card.Img className='carImage' variant="top" src={image_url} />
        <Card.Body>
          <Card.Title><strong>Model:</strong> {model}</Card.Title>
          <div className='carCharacs'>
            <ul className='cardList'>
              <li>{doors} DOORS</li>
              <li>{year} YEAR</li>
            </ul>
            <ul className='cardList'>
              <li>{city} Ciudad</li>
              <li>{horsepower} CV</li>
              <li>{fuel_type}</li>
            </ul>
          </div>
          <div className='pricesandbutton'>
            <div className='prices'>
              <p className='fullprice'>{price.toFixed(2)}€</p>
              {/* Ajusta la forma en que se muestra el pago mensual */}
              <p className='payments'>from 305,00€/mes </p>
            </div>
            
            <Button className='button' variant="primary" onClick={handleShowModal}>
              More about
            </Button>
           
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <div>
            <img src={logo} width="30%" height="" className="d-inline-block align-top" />
          </div>
          <Modal.Title><strong> Car Details </strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p><strong>Model:</strong> {model}</p>
          <p><strong>Doors: </strong>{doors}</p>
          <p><strong>Year:</strong> {year}</p>
          <p><strong></strong> {city}</p>
          <p><strong>Horsepower:</strong> {horsepower}</p>
          <p><strong>FuelType: </strong>{fuel_type}</p>
          <p><strong>Price:</strong> {price}</p>
          <img src={image_url} className='modal_img' height='200px'></img>
    
        </Modal.Body>
        <Modal.Footer>

          <Button className='button' variant="primary" href='/' onClick={handleShowModal}>
            Contact
          </Button>
          <Button id="secondbutton" variant="secondary" onClick={handleCloseModal}>
            Closed
          </Button>
        
          {/* Puedes agregar más botones aquí si es necesario */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
