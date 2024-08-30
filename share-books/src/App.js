import './App.css';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <h1 className='title-of-page'>Share Books</h1>
      <Profile />
    </div>
  );
}

export default App;
