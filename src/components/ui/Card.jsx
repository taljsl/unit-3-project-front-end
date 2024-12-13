import React from 'react'

import './Card.css'

//we have the card
//we will delete later this is dummy data
// const tempItem = {
//         "name": "The Midnight Library",
//         "publicationDate": "2020-09-29",
//         "genre": "Fiction, Fantasy",
//         "type": "Novel",
//         "details": "This thought-provoking book by Matt Haig explores the concept of alternate lives and choices through the story of Nora Seed, a woman who finds herself in a magical library between life and death. Each book in the library represents a different version of her life, allowing her to explore what could have been if she'd made different decisions.",
//         "rating": 4.2
// }

const Card = ({ item }) => {
  return (
    <div>
        <div className='ui card' style={{ width: '150px', backgroundColor: 'var(--ui-background-color)' }}> 
          
          <div className="image" style={{ height: '150px' }}>
              {item.img_url ? (
                // design how it looks like later
                <img
                 src={item.img_url}
                 alt={item.ima_url}
                />
                ) : (
                    //if the item.image is undefined then this will show
                    //a book cover
                    <div
                      className='default-background-cover'
                    >
                      {item.name}
                    </div>
                )
              }
          </div>
          
          <div className="content">

            Rating:{item.rating}
          </div>
        </div>
    </div>
  )
}

export default Card