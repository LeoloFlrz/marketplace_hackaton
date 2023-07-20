import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  _id: string;
  image_url: string;
  model: string;
  make: string;
  price: number;
  doors: number;
  year: number;
  city: string;
  type: string;
  seats: number;
  horsepower_rpm: number;
  transmission: string;
  fuel_tank_capacity: number;
}

export const Cardetail: React.FC<Product> = (__props: Product) => {
  const [product, setCar] = useState<Product | null>(null);

  const { id } = useParams<{ id: string }>(); 
 
  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
       
        setCar(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del coche:', error);
      });
  }, [id]);

  return (
    <div>
      {product ? (
        <div className='carProduct'>
          <h2>Product Details</h2>
          <p>{product.make} {product.model}</p>
          <p>${product.price}</p>
          {/* Display other product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
