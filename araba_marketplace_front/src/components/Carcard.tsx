import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './carcard.css';
import skoda_prueba from '../assets/skoda_prueba.jpg';
import car from '../assets/car-13dpi.svg';
import puerta from '../assets/puerta coche3dpi 2.svg';
import check from '../assets/check3dpi 2.svg';
import taco from '../assets/tacometro3dpi 1.svg';
import comb from '../assets/gasolina3dpi 1.svg';
import map from '../assets/ICONO_MAP.svg';




function Carcard() {
  return (
    <Card className='carCard' style={{ width: '18rem' }}>
      <Card.Img className='carImage' variant="top" src={skoda_prueba} />
      <Card.Body>
        <Card.Title className='title'>SKODA SCALA STYLE 1.0 TSI</Card.Title>
        <div className='carCharacs'>
          <ul className='cardList'>
            <li className='li'>
              <img src = {car} width="15" height="15"/> 
              <p>GERENCIA</p> 
            </li>
            <li className='li'>
              <img src = {puerta} width="15" height="15"/>
              <p>5 PUERTAS</p>
            </li>
            <li className='li'>
              <img src = {map} width="15" height="15"/>
              <p>07/2022</p>
            </li>            
          </ul>
          <ul className='cardList'>
            <li className='li'>
              <img src = {check} width="15" height="15"/>
              <p>12821 KM</p>
            </li>
            <li className='li'>
              <img src = {taco} width="15" height="15"/>
              <p>110 CV</p>
            </li>
            <li className='li'>
              <img src = {comb} width="15" height="15"/>
              <p>GASOLINA-V2</p>
            </li>            
          </ul>
        </div>
        <div className='pricesandbutton'>
          <div className='prices'>
            <p className='fullprice'>21.490,01€</p>
            <p className='payments'>desde 305,00€/mes</p>
          </div>
          <Button className='button' variant="primary">ME INTERESA</Button>
        </div>

        
      </Card.Body>
    </Card>
  );
}

export default Carcard;
