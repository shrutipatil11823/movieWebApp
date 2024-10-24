import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieDB</h1>
      <ul>
        <li><Link to="/">Popular</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
