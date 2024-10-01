import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Router, Route, Routes ,Link } from 'react-router-dom'
import Home from './pages/home/Home';
import Author from './pages/author/Author';
import Quiz from './pages/quiz/Quiz';
import Highlights from './pages/highlights/Highlights';
import Review from './pages/review/Review';


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
          <Route path='/review' element={<Review />} />
        </Routes>
     
      </div>
    </BrowserRouter>
    
  );
}

export default App;
