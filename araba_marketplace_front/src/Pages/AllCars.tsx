import React from 'react';
import {CarList} from '../components/CarList';


const CarGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
      </div>
      <div className="col-md-9">
        <CarList />
        </div>
      </div>
    </div>
  );
};

export default CarGrid;