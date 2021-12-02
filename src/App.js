import { React } from 'react';
import './App.css';
import Car from './component/Car';
import Result from './component/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <div className="container-fluid">
     <div className="overlay d-flex justify-content-center align-items-center ">
        <Router>
  
      <div className="App">
        <Routes>
          <Route path="/" element={<Car />} />
           <Route path={'/details'} element={<Result />} />
        </Routes>
  
      </div>
    </Router>
     </div>
   </div>
  );
}

export default App;
