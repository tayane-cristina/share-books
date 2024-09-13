import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Router, Route, Routes ,Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Home from './pages/home/Home';
import Author from './pages/author/Author';
import Quiz from './pages/quiz/Quiz';
import Highlights from './pages/highlights/Highlights';


function App() {

  


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/author' element={<Author />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/highlights' element={<Highlights />} />
        </Routes>
     
      </div>
    </BrowserRouter>
    
  );
}

export default App;
