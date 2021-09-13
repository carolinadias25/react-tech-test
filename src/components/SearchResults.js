import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="image-container">
        {results.map((image) => (
          <img className="data-image" src={image} alt="space pics" />
        ))}
      </div>
    );
  }
};

export default SearchResults;