import { useState } from "react";
import Card from "./ui/Card";

import useHorizontalDragScroll from '../custom-hooks/useHorizontalDragscroll'

import "./AllLists.css";

import ViewItemModal from "./ui/ViewItemModal";
import ListPlaceholder from "./placeholders/ListPlaceholder";
const BookList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});

  const containerRef = useHorizontalDragScroll()

  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return (
      <ListPlaceholder header='Loading Books...'/>
    )
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header">Books</h2>

      <ul
       className="ul-card-holder"
       ref={containerRef}
      >
        {items.map((book) => (
          <div
            key={book._id}
            onClick={() => handleClick(book)}
            className="card-container"
          >
            <Card key={book._id} item={book} />
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

export default BookList;
