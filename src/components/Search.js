import React from "react";

function Search({onChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
