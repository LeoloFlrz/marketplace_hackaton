import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './carcard.css';
import skoda_prueba from '../assets/skoda_prueba.jpg';

function Carcard(props) {
  return (
    <Card className='carCard' style={{ width: '18rem' }}>
      <Card.Img className='carImage' variant="top" src={skoda_prueba} />
      <Card.Body>
        <Card.Title>SKODA SCALA STYLE 1.0 TSI</Card.Title>
        <div className='carCharacs'>
          <ul className='cardList'>
            <li>GERENCIA</li>
            <li>5 PUERTAS</li>
            <li>07/2022</li>            
          </ul>
          <ul className='cardList'>
            <li>12821 KM</li>
            <li>110 CV</li>
            <li>GASOLINA-V2</li>            
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
