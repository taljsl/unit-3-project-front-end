import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";
import useHorizontalDragScroll from "../custom-hooks/useHorizontalDragscroll";
import ListPlaceholder from "./placeholders/ListPlaceholder";
const ShowList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});

  const containerRef = useHorizontalDragScroll()

  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <ListPlaceholder header="Loading Tv Shows..." />;
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header">TV Shows</h2>
      <ul className="ul-card-holder" ref={containerRef}>
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
