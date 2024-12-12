import { useEffect, useState } from "react";
import * as mediaItemsList from "./services/mediaService";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import GameList from "./components/GameList";
import ShowList from "./components/ShowList";

const pages = [
  'Home Page',
  'Create a New Media',
  'Index Page', //will contain the delete functionality and update functionality
  'Abous Us'
]

const App = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState(pages[0])

  // here we useEffect to have things load on opening the page
  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const items = await mediaItemsList.index();
        setMediaItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMediaItems();
  }, []);

  switch (content) {
    case 'Create a New Media':
      return <MediaForm />
    default:
      return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* search box component go here */}
    
          {/* logo goes here */}
          <img style={{ width: '10rem' }}
           src="/defaults/entertainment_hub.png"
           alt="/defaults/entertainment_hub.png"
           />
          <button onClick={() => setContent('Create a New Media')}>Add new media</button>
    
          <BookList items={mediaItems.filter((item) => item.type === 'book')} />
          <MovieList items={mediaItems.filter((item) => item.type ==='movie')} />
          <GameList items={mediaItems.filter((item) => item.type === 'game')} />
          <ShowList items={mediaItems.filter((item) => item.type === 'show')} />
    
        </div>
      );
      break;
  }

  
};

export default App;
