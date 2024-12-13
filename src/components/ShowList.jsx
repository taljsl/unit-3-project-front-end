import React from 'react'
import Card from './ui/Card'

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
            <Card key={show._id} item={show}/>
        ))}
      </ul>
    </div>
  )
}

export default ShowList
