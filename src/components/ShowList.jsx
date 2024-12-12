import React from 'react'

const ShowList = ({items}) => {
  return (
    <div>
      <h2>TV Shows</h2>
      <ul>
        {items.map(show => (
            <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList
