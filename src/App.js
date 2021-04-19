import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ChatBotComponent from './components/chatbot';
import './App.css';
import Board from './board.jpg';
import Footer from './components/Footer';

import ClipLoader from 'react-spinners/ClockLoader';
import SkewLoader from 'react-spinners/BounceLoader';
function App() {
  const [loading, setloading] = useState(true);
  // useEffect(() => {
  //   setloading(true);
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      {loading ? (
        <div className='splash'>
          <div className='logo'>
            <ClipLoader color={'#000033'} loading={loading} size={200} />
          </div>

          <div className='splash-screen'>
            Wait a moment while we launch the website:
            <b> GURUJI</b>
            <div className='loading-dot'>.</div>
            <div className='logo2'>
              <ClipLoader color={'#000033'} loading={loading} size={200} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Router>
            <div className='parallax'>
              <Navbar />
              <br />
              <br />
              <br />
              <div className='center'>
                <img src={Board} alt='' />
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>

            <br />

            <Route path='/' exact component={Home} />
            <ChatBotComponent />
          </Router>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
