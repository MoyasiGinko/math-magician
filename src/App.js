import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './components/calculator.css';
import Quotes from './components/quotes';

import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/calculator"
        element={<Calculator />}
      />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;

// <div className="app-container">
//  <div className="quote-container">
//    <Quotes />
//  </div>
//  <Calculator />
// </div>;
