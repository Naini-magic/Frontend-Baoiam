import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Home/Navbar';
import HomePage from './components/Home/HomePage';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import PridePage from './components/Pride/PridePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/pride' element={<PridePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
