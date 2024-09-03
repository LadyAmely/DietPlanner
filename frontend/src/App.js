import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Recipes from "./Recipes";
import Plan from "./Plan";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/plans" element={<Plan/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
