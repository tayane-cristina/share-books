import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
