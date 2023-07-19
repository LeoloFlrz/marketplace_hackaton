import React, { useEffect, useState } from 'react';

interface Product {
  _id: number;
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

const Cardetail: React.FC<Product> = (__props: Product) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the data from './vehicules.json'
    fetch('http://localhost:5173/Components/vehicules.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function getProductById(id: number): Product | undefined {
    return products.find((product) => product._id === id);
  }

  return (
    <div >
      <ul>
        {products.map((props) => (
          <li key={props._id}>
            {props.make} {props.model} - ${props.price}
          </li>
        ))}
      </ul>

      {/* Example of accessing a product by its ID */}
      <div className='carProduct'>
        <h2>Product Details</h2>
        {getProductById(2) && (
          <div>
            <p>{getProductById(2)!.make} {getProductById(2)!.model}</p>
            <p>${getProductById(2)!.price}</p>
            {/* Add other product details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardetail;