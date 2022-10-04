import React from 'react';

import './App.css';
import Landing from './Component/landing/landing';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';





function App() {
  return (
    <div>
    
      <Router>
      
   <Routes>
{/*<Route path ='/' element={<Landing/>}/>*/}
<Route path ="Landing" element={<Landing/>}/>

</Routes>




</Router>
  
    </div>
  );
}

export default App;
