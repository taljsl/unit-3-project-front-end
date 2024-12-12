import React from "react";
import Card from "./ui/Card";
const GameList = ({ items }) => {
 
  if(items.length === 0) {
    return <>
    {
      <h3>No Games yet!</h3>
    }
    </>
  }

  return (
    <div>
      <h2>Games</h2>
      <ul>
        {items.map((game) => (
          <Card key={game._id} item={game} />
        ))}
      </ul>
    </div>
  );
};

export default GameList;
