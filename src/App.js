import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getRockets } from './redux/Rockets/rockets';
import './App.css';

function App() {

  const dispatchRocket = useDispatch();
  useEffect(() => {
    dispatchRocket(getRockets());
  }, []);

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
