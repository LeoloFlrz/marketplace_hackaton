import Carousel from 'react-bootstrap/Carousel';
import Fondo1 from './Fondo1';
import Fondo2 from './Fondo2';
import Fondo3 from './Fondo3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

function CarouselPortada() {
  return (
    <Carousel className='portada'>
      <Carousel.Item>
        <Fondo1 />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Fondo2 />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Fondo3 />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <div className="contact">
          <div className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div className="telegram">
              <FontAwesomeIcon icon={faTelegram} />
          </div>
      </div>
    </Carousel>
  );
}

export default CarouselPortada;