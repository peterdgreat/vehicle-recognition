import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../styles/Result.css';

export default function Result() {
      const dataResult =useSelector((state) => state.vehicleReducer.vehicles);
    return (
    <div>
          { dataResult !==undefined && (
              <h1 className="text-center text-white"> <span>     {dataResult[0].color.name}</span>
                <span>  { dataResult[0].car.make}</span>
              </h1>
          )
              }
                  <NavLink to='/'>
        <button className="btn">Back</button>
              </NavLink>
         <div className="result card border">
     

            {
              dataResult !==undefined && (
                                     <ul className="list-unstyled w-100 h-100 list-group d-flex flex-column">
                                    <li className="list-group-item h-25 border d-flex justify-content-between align-items-center">
                                       <span>Car make</span>
                                       <span> { dataResult[0].car.make}</span>
                                      </li> 
                                      <li className="list-group-item h-25 border d-flex justify-content-between align-items-center">
                                      <span>Model</span>
                                      <span>  {dataResult[0].car.model}</span>
                                        </li > 
                                        <li className="list-group-item h-25 border d-flex justify-content-between align-items-center">
                                      <span>Year Range</span>
                                      <span>    {dataResult[0].car.years} </span>
                                        </li>
                                  <li className="list-group-item h-25 border d-flex justify-content-between align-items-center">
                                     <span>Car Color</span>
                                     <span>     {dataResult[0].color.name}</span>
                                  </li>
                                    </ul>    
                                    )
            }
            {
              dataResult ===undefined && <h1 className="h-100 d-flex justify-content-center align-items-center">No Car Uploaded</h1>
            }
            
       </div>
    </div>
    )
}


