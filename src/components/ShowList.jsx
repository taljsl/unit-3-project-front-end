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
    return <>{<h3>No Tv Shows yet!</h3>}</>;
  }

  return (
    <div>
      <h2>TV Shows</h2>
      <ul style={{ display: "flex", gap: "1rem", padding: "0rem 1rem" }}>
        {items.map((show) => (
          <div key={show._id} onClick={() => handleClick(show)}>
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
