import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";
const MovieList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});
  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <>{<h3>No Movies yet!</h3>}</>;
  }

  return (
    <div>
      <h2>Movies</h2>
      <ul style={{ display: "flex", gap: "1rem", padding: "0rem 1rem" }}>
        {items.map((movie) => (
          <div key={movie._id} onClick={() => handleClick(movie)}>
            <Card key={movie._id} item={movie} />
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

export default MovieList;
