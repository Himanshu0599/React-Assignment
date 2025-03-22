import React from "react";
import "../App.css";  
const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
