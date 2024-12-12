import React from "react";

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
          <li key={game._id}> {game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
