import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AdminHome from './components/AdminHome'
import UserHome from './components/UserHome'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/user" element={<UserHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
