import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";
const ShowList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});
  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <>{<h3 style={{ marginLeft: '2rem' }}>No Tv Shows yet!</h3>}</>;
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header">TV Shows</h2>
      <ul className="ul-card-holder">
        {items.map((show) => (
          <div key={show._id} onClick={() => handleClick(show)} className="card-container" >
            <Card key={show._id} item={show} />
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
export default ShowList;
