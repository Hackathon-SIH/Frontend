import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; 

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Junior / Intern Position" className="search-input" />
      <input type="text" placeholder="Location" className="search-input" />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
