import React, { useState } from "react";
import Card from "./ui/Card";

import ViewItemModal from "./ui/ViewItemModal";
const BookList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});
  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedMedia(item);
  };

  if (items.length === 0) {
    return <>{<h3>No Books yet!</h3>}</>;
  }

  return (
    <div>
      <h2>Books</h2>

      <ul style={{ display: "flex", gap: "1rem", padding: "0rem 1rem" }}>
        {items.map((book) => (
          <div key={book._id} onClick={() => handleClick(book)}>
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
