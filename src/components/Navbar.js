import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <h1>Math Magicians</h1>
    <ul id="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
