import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav>
      <ul >    
            <li><Link to="/">Movies<span>Adda</span>.com</Link></li>
      </ul>
      <ul className='nav1'>
        <li><Link to="/">Popular</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
      </ul>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
