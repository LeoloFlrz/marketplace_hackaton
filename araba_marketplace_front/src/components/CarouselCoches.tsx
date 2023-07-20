import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CardOferta from './ofertaCard';

function CarouselCoches() {
  return (
    <Carousel>
      <Carousel.Item className='carruselCoches'>
        <CardOferta/>
        <CardOferta/>
        <CardOferta/>
      </Carousel.Item>
      <Carousel.Item className='carruselCoches'>
        <CardOferta/>
        <CardOferta/>
        <CardOferta/>
      </Carousel.Item>
      <Carousel.Item className='carruselCoches'>
        <CardOferta/>
        <CardOferta/>
        <CardOferta/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCoches;