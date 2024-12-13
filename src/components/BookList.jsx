import React from "react";
import Card from "./ui/Card";

const BookList = ({ items }) => {
  if (items.length === 0) {
    return <>{<h3>No books yet!</h3>}</>;
  }

  return (
    <div>
      <h2>Books</h2>

      <ul style={{ display: "flex", gap: '1rem', padding: '0rem 1rem' }}>
        {items.map((book) => (
          <Card key={book._id} item={book} />
        ))}
      </ul>
      
    </div>
  );
};

export default BookList;
