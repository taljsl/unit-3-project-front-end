import React from "react";
import Card from "./ui/Card";
import { useState } from "react";
import ViewItemModal from "./ui/ViewItemModal";

import './AllLists.css'
import useHorizontalDragScroll from "../custom-hooks/useHorizontalDragscroll";
import ListPlaceholder from "./placeholders/ListPlaceholder";

const GameList = ({ items,search }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedMedia, setSelectedMedia] = useState({});

   const containerRef = useHorizontalDragScroll()

   const handleClick = (item) => {
     setIsModalOpen(true);
     setSelectedMedia(item);
   };
 
  if(items.length === 0 && search.length === 0) {
    return <ListPlaceholder header="Loading Games..."/>
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header"style={{display:items.length>=1 && search.length>=0 ? 'block': 'none'}}>Games</h2>

      <ul className="ul-card-holder " ref={containerRef}>
        {items.map((game) => (
          <div key={game._id} onClick={() => handleClick(game)} className="card-container">
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
