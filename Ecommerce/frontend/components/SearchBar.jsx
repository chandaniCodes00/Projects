
import React, { useState } from "react";
import "../css/searchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      alert("Please enter a product name");
      return;
    }

    console.log("Searching for:", search);
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
