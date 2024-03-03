import React from 'react';
import { Link } from 'react-router-dom';
import pngegg from './pngegg.png'; // Import the image

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link to="/">
        <img src={pngegg} alt="Logo" className="logo_icon" />
      </Link>
      <ul>
        <li>
          <Link to="/" className="links-text">HOME</Link>
        </li>
        <li>
          <Link to="/addScore" className="links-text">ADD SCORE</Link>
        </li>
        <li>
          <Link to="/recentscores" className="links-text">RECENT SCORES</Link>
        </li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
