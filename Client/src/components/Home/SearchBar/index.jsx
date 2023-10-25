import React from "react";
import "./styles.css";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="home-searchbar">
    <form onSubmit={formSubmit}>
      <input
        type={"text"}
        onChange={handleSearchKey}
        placeholder="Search by Category"
        value={value}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;
