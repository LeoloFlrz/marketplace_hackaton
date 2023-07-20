// import React, { useEffect, useState } from 'react';


// interface Car {
//   _id: string;
//   model: string;
//   doors: number;
//   year: number;
//   km: number;
//   horsepower: number;
//   fuelType: string;
//   price: number;
//   image_url:"string"
// }

// const  Search: React.FC = ()=> {
//   const [cars, setCars] = useState<Car[]>([]);

//   useEffect(() => {
//     // Fetch the data from your API or data source
//     fetch('http://localhost:3000/cars')
//       .then((response) => response.json())
//       .then((data) => setCars(data));
//   }, []);

//   return (
//     <div className="row">
//     {cars.map((car) => (
//       <div className="col-md-4 mb-4" key={car._id}>
//           <CarCard  car={car}  />
//       </div>
//      
//     ))}
//   </div>
//   );
// };

// export default Search