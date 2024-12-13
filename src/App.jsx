import { useEffect, useState } from "react";
import { index } from "./services/mediaService";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import GameList from "./components/GameList";
import ShowList from "./components/ShowList";
import MediaForm from "./components/MediaForm";
import AddMediaModal from "./components/ui/AddMediaModal";
import Navbar from "./components/ui/Navbar";

const pages = [
  "Home Page",
  // "Create a New Media",
  "Index Page", //will contain the delete functionality and update functionality (this is our show page)
  "Abous Us",
];

const App = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState(pages[0]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  // here we useEffect to have things load on opening the page
  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const items = await index();
        setMediaItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMediaItems();
  }, []);


  switch (content) {
    case "Create a New Media":
      return <MediaForm />;
    default:
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          
          
          <Navbar />

          <div style={{ marginTop: '16vh' }}>
            {/* search box component go here */}

            {/* logo goes here */}
            <img
              style={{ width: "20rem", display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              src="/defaults/entertainment_hub.png"
              alt="/defaults/entertainment_hub.png"
            />
            
            <br />

            <button
             className="ui secondary button"
             onClick={() => setIsModalOpen(true)}
             style={{ width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            >
              <i className="plus icon"></i> Add new media
            </button>

            <BookList items={mediaItems.filter((item) => item.type === "book")} />

            <MovieList items={mediaItems.filter((item) => item.type === "movie")} />

            <GameList items={mediaItems.filter((item) => item.type === "game")} />

            <ShowList items={mediaItems.filter((item) => item.type === "show")} />
          
            <AddMediaModal
            isOpen={isModalOpen}
            onClose={setIsModalOpen}
            children={<MediaForm />}
            />
          </div>
        </div>
      );
  }
};

export default App;
