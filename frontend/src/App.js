import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Recipes from "./Recipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
