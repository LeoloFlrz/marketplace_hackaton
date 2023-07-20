import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { CarCard } from './Carcard';

function CarouselCoches() {
  return (
    <Carousel>
      <Carousel.Item className='carruselCoches'>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </Carousel.Item>
      <Carousel.Item className='carruselCoches'>
      <CarCard/>
      <CarCard/>
      <CarCard/>
      </Carousel.Item>
      <Carousel.Item className='carruselCoches'>
      <CarCard/>
      <CarCard/>
      <CarCard/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCoches;