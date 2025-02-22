import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import SignUp from './signup';
import ResponsiveAppBar from './appbar';
import Home from './home';
import Contact from './contact';
import Login from './login';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import logout from './logout';
// import adminsMenu from "adminsmenubar";
import { AppBar } from '@mui/material';
import { sessionService } from 'redux-react-session';
import Market from './market';
import Aboutus from './contact';
import Footer from './footer';
import Session from 'react-session-api'
import Booking from './booking';
import Bookings from './bookings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState('');
  const [firstName, setFirstName] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    const id = Session.get("id");
    const name = localStorage.name;
    //console.log(localStorage.name);
    if (name) {
      setIsLoggedIn(true);
      function reloadPage() {
        window.location.reload();
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [])


  return (
    <>
      {isLoggedIn ? (
        <>
          <ResponsiveAppBar isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/HOME" element={<Home />} />
            <Route path="/ITEMS" element={<Market />} />
            <Route path="/ABOUTUS" element={<Aboutus />} />
            <Route path="/LOGIN" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            

          </Routes>
          <div>
            {/* <Footer /> */}

          </div>
        </>
      ) : (
        <>
          <ResponsiveAppBar isLoggedIn={isLoggedIn} />

          <Routes>
            <Route path="/HOME" element={<Home />} />
            <Route path="/ITEMS" element={<Market />} />
            <Route path="/ABOUTUS" element={<Aboutus />} />
            <Route path="/LOGIN" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/dashboard" element={<Home />} />




          </Routes>
          <div>
            {/* <Footer /> */}

          </div>
        </>
      )}
    </>
  );
}

export default App;
