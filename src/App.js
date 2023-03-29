import React, { useState, useEffect } from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Homepage.js'
import Menu from './Components/Menu/Menu.js'
import MenuOptions from './Components/MenuOptions/MenuOptions.js'
import SelectionOrder from './Components/SelectionOrder/SelectionOrder'
import ReviewOrder from './Components/ReviewOrder/ReviewOrder'
import PrepFinalOrder from './Components/PrepFinalOrder/PrepFinalOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/menu'  element={<Menu />} />
          <Route path='/menu/menuOptions'  element={<MenuOptions />} />
          <Route path='/menu/menuOptions/Select'  element={<SelectionOrder />} />
          <Route path='/menu/ReviewOrder'  element={<ReviewOrder />} />
          <Route path='/menu/PrepOrder'  element={<PrepFinalOrder />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
