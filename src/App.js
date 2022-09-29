import './App.css';
import { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'      //This is react router DOM library
import Home from './component/Home';
import Profile from './component/Profile';
import HomeTown from './component/HomeTown';
import Food from './component/Food';
import Tourist from './component/Tourist';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if(window.location.pathname === '/') {
      navigate('/quiz1')
    }

    console.log(window.location.pathname)
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-section">
        <div className="container">
            <Link className="navbar-brand font-teal-50" to="/quiz1">Graidy Megananda</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav justify-content-center ml-auto">
                <li className="nav-item" id="nav-item">
                  <Link className={"nav-link " + (window.location.pathname === '/quiz1' ? "font-teal-active" : "font-teal-50")} to="/quiz1">Home</Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link className={"nav-link " + (window.location.pathname === '/quiz1/profile' ? "font-teal-active" : "font-teal-50")} to="/quiz1/profile">Profile</Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link className={"nav-link " + (window.location.pathname === '/quiz1/hometown' ? "font-teal-active" : "font-teal-50")} to="/quiz1/hometown">Hometown</Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link className={"nav-link " + (window.location.pathname === '/quiz1/food' ? "font-teal-active" : "font-teal-50")} to="/quiz1/food">Food</Link>
                </li>
                <li className="nav-item" id="nav-item">
                  <Link className={"nav-link " + (window.location.pathname === '/quiz1/tourist' ? "font-teal-active" : "font-teal-50")} to="/quiz1/tourist">Tourist</Link>
                </li>
              </ul>
            </div>
          
        </div>
      </nav>
      <Routes>
        <Route path="/quiz1" element={<Home />} />
        <Route path="/quiz1/profile" element={<Profile />} />
        <Route path="/quiz1/hometown" element={<HomeTown />} />
        <Route path="/quiz1/food" element={<Food />} />
        <Route path="/quiz1/tourist" element={<Tourist />} />\
      </Routes>
    </>

  );
}

export default App;
