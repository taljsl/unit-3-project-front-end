import { useEffect, useState } from "react";
import * as mediaItemsList from "./services/mediaService";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import GameList from "./components/GameList";
import ShowList from "./components/ShowList";

const App = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div>
      <h1>Media Hub</h1>
      <button>Add</button>
      <BookList items={mediaItems.filter((item) => item.type === "book")} />
      <MovieList items={mediaItems.filter((item) => item.type === "movie")} />
      <GameList items={mediaItems.filter((item) => item.type === "game")} />
      <ShowList items={mediaItems.filter((item) => item.type === "show")} />
    </div>
  );
};

export default App;
