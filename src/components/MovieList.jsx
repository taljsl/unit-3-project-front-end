import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";

import './AllLists.css'

const MovieList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});
  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <>{<h3 style={{ marginLeft: '2rem' }}>No Movies yet!</h3>}</>;
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header">Movies</h2>
      <ul className="ul-card-holder">
        {items.map((movie) => (
          <div key={movie._id} onClick={() => handleClick(movie)} className="card-container">
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
