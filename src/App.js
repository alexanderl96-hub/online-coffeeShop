import React, { useState, useEffect } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Homepage.js'
import Menu from './Components/Menu/Menu.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/menu'  element={<Menu />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
