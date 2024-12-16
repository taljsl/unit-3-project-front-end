import { useEffect, useState } from "react";
import { index } from "./services/mediaService";
import BookList from "./components/BookList";
import MovieList from "./components/MovieList";
import GameList from "./components/GameList";
import ShowList from "./components/ShowList";
import MediaForm from "./components/MediaForm";
import AddMediaModal from "./components/ui/AddMediaModal";
import Navbar from "./components/ui/Navbar";
import Button from "./components/inputs/Button";
import ViewItemModal from "./components/ui/ViewItemModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // here we useEffect to have things load on opening the page
  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const items = await index();

        setTimeout(() => {
          setMediaItems(items);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMediaItems();
    // Placinig mediaItems in the array allwos page to update when CRUD functionality is called
  }, [mediaItems]);

  switch (content) {
    case "Create a New Media":
      return <MediaForm />;
    default:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "10rem",
          }}
        >
          <Navbar />

          <div style={{ marginTop: "16vh" }}>
            {/* search box component go here */}

            {/* logo goes here */}
            {/*how to center an image :)  https://www.w3schools.com/howto/howto_css_image_center.asp */}

            <img
              style={{
                width: "20rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="/defaults/entertainment_hub.png"
              alt="/defaults/entertainment_hub.png"
            />

            <br />
            <div
              style={{
                display: "flex",
                placeContent: "center",
                marginBottom: "15px",
              }}
            >
              <input
                type="text"
                placeholder="Search by Name"
                value={search}
                onChange={(evt) => setSearch(evt.target.value)}
              />
            </div>
            <Button
              text="Add new"
              handleOnClick={() => setIsModalOpen(true)}
              icon={<i className="plus icon"></i>}
              styles={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />

            <BookList
              items={mediaItems
                .filter((item) => item.type === "book")
                // Here we filter our filter  to account for when a search has occured
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )}
              search={search}
            />

            <MovieList
              items={mediaItems
                .filter((item) => item.type === "movie")
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )}
              search={search}
            />

            <GameList
              items={mediaItems
                .filter((item) => item.type === "game")
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )}
              search={search}
            />

            <ShowList
              items={mediaItems
                .filter((item) => item.type === "show")
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )}
              search={search}
            />

            <AddMediaModal
              isOpen={isModalOpen}
              onClose={setIsModalOpen}
              children={<MediaForm onClose={setIsModalOpen} />}
            />
          </div>
        </div>
      );
  }
};

export default App;
