import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getVehicle } from './redux/Vehicles/vehicle';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicle());
  },[]);


  return (
    <div>
      Hello
    </div>
  );
}

export default App;
