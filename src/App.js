import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getVehicle } from './redux/Vehicles/vehicle';
import './App.css';
import Cars from './component/Cars';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicle());
  },[]);


  return (
    <div>
      <Cars />
    </div>
  );
}

export default App;
