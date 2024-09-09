import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Router, Route, Routes ,Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Home from './pages/home/Home';


function App() {

  


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
     
      </div>
    </BrowserRouter>
    
  );
}

export default App;
