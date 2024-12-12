import React from "react";

const GameList = ({ items }) => {
  return (
    <div>
      <h2>Games</h2>
      <ul>
        {items.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
