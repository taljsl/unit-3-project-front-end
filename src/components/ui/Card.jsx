import React, { Link } from 'react'


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
    
    <div
    //  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}
    className='ui three doubling stackable cards'
    
    >
        <div className='ui card' style={{ width: '120px' }}> 
          <div className="image" style={{ height: '150px' }}>
              {item.image ? (
                // design how it looks like later
                <img src={item.image} alt={item.image} />
                ) : (
                    //if the item.image is undefined then this will show
                    //a book cover
                    <div
                    style={{
                        backgroundColor: 'red',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}
                    >
                      {item.name}
                    </div>
                )
            }
          </div>
          <div class="content">
          {item.name}
          </div>
          
        </div>
        

        {/* //if there is an imageUrl then i will show that imageUrl
        //create canvas widht and something and then inside it i will show the title of the book */}
    </div>
  )
}

export default Card