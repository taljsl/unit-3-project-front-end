import { useState } from "react";
import Card from "./ui/Card";

import "./AllLists.css";

import ViewItemModal from "./ui/ViewItemModal";
const BookList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});
  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <>{<h3 style={{ marginLeft: '2rem' }}>No Books yet!</h3>}</>;
  }

  return (
    <div className="list-container">
      <h2 className="media-title-header">Books</h2>

      <ul className="ul-card-holder">
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
