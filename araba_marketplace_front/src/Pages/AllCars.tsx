import React from 'react';
import {CarList} from '../components/CarList';
// import Search from '../components/Search';
import Contact from '../components/Contact';


const CarGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        {/* <Search /> */}
    
      </div>
      <div className="col-md-9">
        <CarList />
        <Contact />
        </div>
      </div>
    </div>
  );
};

export default CarGrid;