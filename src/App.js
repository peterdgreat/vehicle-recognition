import { React } from 'react';
import './App.css';
import Car from './component/Car';
import Result from './component/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavLink to='/'>
        <button>Back</button>
</NavLink>
      <div className="App">
        <Routes>
          <Route path="/" element={<Car />} />
           <Route path={'/details'} element={<Result />} />
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
