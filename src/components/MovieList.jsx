import React from "react";
import Card from "./ui/Card";
const MovieList = ({ items }) => {
  if (items.length === 0) {
    return <>{<h3>No Movie yet!</h3>}</>;
  }

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {items.map((movie) => (
          <Card key={movie._id} item={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
