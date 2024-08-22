import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>FinSightAI</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
          <li><Link to="/recommendations">Recommendations</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
