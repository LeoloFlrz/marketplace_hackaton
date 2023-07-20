import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import './css/CarCard.css';
import { CarCard } from './Carcard';

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import logo from '../assets/Logo_optionOne.svg';
// import './css/CarCard.css';
// import Contact from '../components/Contact';

// interface Car {
//   _id: string;
//   model: string;
//   doors: number;
//   year: number;
//   km: number;
//   horsepower: number;
//   fuelType: string;
//   price: number;
//   image_url: string;
// }

// interface Cardetail {
//   car: Car;
// }

// export const CarCard: React.FC<Cardetail> = ({ car }) => {
//   const { model, doors, year, km, horsepower, fuelType, price, image_url } = car;
 

//   return (
//     <div>
//       <Card className='carCard' style={{ width: '18rem' }}>
//         <Card.Img className='carImage' variant="top" src={image_url} />
//         <Card.Body>                
           
//               {/* <Modal className='modal-content' show={showModal} onHide={handleCloseModal}> */}
//                  <div>
//                     <img src={logo}
//                       width="30%"
//                       height=""
//                       className="d-inline-block align-top"
//                     />
//                   </div>
//                 <div>
//                   <title><strong> Car Details </strong></title>
           
//                   <p><strong>Model:</strong> {model}</p>
//                   <p><strong>Doors: </strong>{doors}</p>
//                   <p><strong>Year:</strong> {year}</p>
//                   <p><strong>km:</strong> {km}</p>
//                   <p><strong>Horsepower:</strong> {horsepower}</p>
//                   <p><strong>FuelType: </strong>{fuelType}</p>
//                   <p><strong>Price:</strong> {price}</p>
//                   <p><strong>Image:</strong> {image_url}</p>
//                   {/* Agrega más detalles según tus necesidades */}
//                 </div>
//                   <Button id="secondbutton"variant="secondary">
//                     Closed
//                   </Button>
                            
//             <Button className='button' variant="primary" href='/cars'>
//               Back
//             </Button>
//         </Card.Body>
//       </Card>
//       <Contact />
//      </div>
//    )
//  }

// export default Cardetail


// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';

// // // interface Product {
// // //   _id: string;
// // //   image_url: string;
// // //   model: string;
// // //   make: string;
// // //   price: number;
// // //   doors: number;
// // //   year: number;
// // //   city: string;
// // //   type: string;
// // //   seats: number;
// // //   horsepower_rpm: number;
// // //   transmission: string;
// // //   fuel_tank_capacity: number;
// // // }

// // // export const Cardetail: React.FC<Product> = (__props: Product) => {
// // //   const [product, setCar] = useState<Product | null>(null);

// // //   const { id } = useParams<{ id: string }>(); 
 
// // //   useEffect(() => {
// // //     fetch(`http://localhost:3000/cars/${id}`)
// // //       .then((response) => response.json())
// // //       .then((data) => {
       
// // //         setCar(data);
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error al obtener los datos del coche:', error);
// // //       });
// // //   }, [id]);

// // //   return (
// // //     <div>
// // //       {product ? (
// // //         <div className='carProduct'>
// // //           <h2>Product Details</h2>
// // //           <p>{product.make} {product.model}</p>
// // //           <p>${product.price}</p>
// // //           {/* Display other product details as needed */}
// // //         </div>
// // //       ) : (
// // //         <p>Loading...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };


// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import Modal from 'react-bootstrap/Modal';
// // import Button from 'react-bootstrap/Button';

// // interface Product {
// //   _id: string;
// //   image_url: string;
// //   model: string;
// //   make: string;
// //   price: number;
// //   doors: number;
// //   year: number;
// //   city: string;
// //   type: string;
// //   seats: number;
// //   horsepower_rpm: number;
// //   transmission: string;
// //   fuel_tank_capacity: number;
// // }

// // export const Cardetail: React.FC<Product> = (__props: Product) => {
// //   const [product, setCar] = useState<Product | null>(null);
// //   const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad de la ventana modal

// //   const { id } = useParams<{ id: string }>(); 
 
// //   useEffect(() => {
// //     fetch(`http://localhost:3000/cars/${id}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setCar(data);
// //       })
// //       .catch((error) => {
// //         console.error('Error al obtener los datos del coche:', error);
// //       });
// //   }, [id]);

// //   // Funciones para mostrar/ocultar la ventana modal
// //   const handleShowModal = () => setShowModal(true);
// //   const handleCloseModal = () => setShowModal(false);

// //   return (
// //     <div>
// //       {product ? (
// //         <div className='carProduct'>
// //           <h2>Product Details</h2>
// //           <p>{product.make} {product.model}</p>
// //           <p>${product.price}</p>
// //           {/* Display other product details as needed */}
// //           <Button variant="primary" onClick={handleShowModal}>
// //             Ver Detalles
// //           </Button>

// //           {/* Ventana modal para mostrar los detalles del automóvil */}
// //           <Modal show={showModal} onHide={handleCloseModal}>
// //             <Modal.Header closeButton>
// //               <Modal.Title>Detalles del automóvil</Modal.Title>
// //             </Modal.Header>
// //             <Modal.Body>
// //               <p>Modelo: {product.model}</p>
// //               <p>Marca: {product.make}</p>
// //               <p>Precio: ${product.price}</p>
// //               <p>Puertas: {product.doors}</p>
// //               {/* Agrega más detalles del producto según sea necesario */}
// //             </Modal.Body>
// //             <Modal.Footer>
// //               <Button variant="secondary" onClick={handleCloseModal}>
// //                 Cerrar
// //               </Button>
// //             </Modal.Footer>
// //           </Modal>
// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };
