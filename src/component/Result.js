import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../styles/Result.css';

export default function Result() {
      const dataResult =useSelector((state) => state.vehicleReducer.vehicles);
    return (
       <div>
             <NavLink to='/'>
        <button>Back</button>
</NavLink>

            {
              dataResult !==undefined && (
                                     <div>
                                      { dataResult[0].car.make} {dataResult[0].car.model} {dataResult[0].car.years} {dataResult[0].color.name}
                                    </div>    
                                    )
            }
            
       </div>
    )
}


