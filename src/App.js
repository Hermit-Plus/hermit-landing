import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './components/nav';
import Hero from './components/hero';
import VideoTop from './components/topVideo';
import Info from './components/info';
import Hermits from './components/hermits';
import InfoTwo from './components/infoTwo';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <VideoTop />
      <Info />
      <Hermits />
      <InfoTwo />
      <Footer />
    </Router>
  );
}

export default App;
