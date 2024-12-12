import React from 'react'

const BookList = ({items}) => {
  return (
    <div>
      <h2>Books</h2>
        <ul>
            {items.map(book =>(
                <li key = {book.id}>{book.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default BookList
