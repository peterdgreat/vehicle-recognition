import React from 'react';
import { useSelector } from 'react-redux';

export default function Result() {
      const dataResult =useSelector((state) => state.vehicleReducer.vehicles);
      console.log(dataResult.vehicles[0]);
    return (
       <div>
       
            <div>
            {dataResult.vehicles[0].car.make} {dataResult.vehicles[0].car.model} {dataResult.vehicles[0].car.years} {dataResult.vehicles[0].color.name}
        </div>
       </div>
    )
}


