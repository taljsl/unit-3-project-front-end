import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";
const GameList = ({ items }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedMedia, setSelectedMedia] = useState({});
   const handleClick = (item) => {
     setIsModalOpen(true);
     setSelectedMedia(item);
   };
 
  if(items.length === 0) {
    return <>{<h3>No Games yet!</h3>}</>
  }

  return (
    <div>
      <h2>Games</h2>

      <ul style={{ display: "flex", gap: "1rem", padding: "0rem 1rem" }}>
        {items.map((game) => (
          <div key={game._id} onClick={() => handleClick(game)}>
          <Card key={game._id} item={game} />
          </div>
        ))}
      </ul>
      <ViewItemModal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          item={selectedMedia}
        />
    </div>
  );
};

export default GameList;
