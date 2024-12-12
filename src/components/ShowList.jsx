import React from 'react'

const ShowList = ({items}) => {

  if(items.length === 0) {
    return <>
    {
      <h3>No Tv show yet!</h3>
    }
    </>
  }

  return (
    <div>
      <h2>TV Shows</h2>
      <ul>
        {items.map(show => (
            <li key={show._id}>{show.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList
