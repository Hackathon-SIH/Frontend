import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Junior / Intern Position" className="search-input" />
      <input type="text" placeholder="Location" className="search-input" />
      <button className="search-button">🔍</button>
    </div>
  );
}

export default SearchBar;
