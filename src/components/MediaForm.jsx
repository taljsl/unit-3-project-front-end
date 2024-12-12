import React, { useState } from "react";

const MediaForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    publicationDate: "",
    genre: "",
    type: "",
    details: "",
    rating: "",
    img_url: "",
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  return (
    <div>
      <form>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="publicationDate">Publication Date: </label>
        <input
          type="date"
          name="publicationDate"
          id="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          name="genre"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <label htmlFor="type">Media Type </label>
        <select name="type" id="type" value={formData.type}>
          <option value="book"> Book</option>
          <option value="movie">Movie</option>
          <option value="game">Game</option>
          <option value="show">Show</option>
        </select>
        <label htmlFor="details">Details: </label>
        <input
          type="text"
          name="details"
          id="details"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating" id="rating" value={formData.rating} onChange={handleChange} required/>
        <label htmlFor="img_url">Image URL:</label>
        <input type="text" name="img_url" id="img_url" value={formData.img_url}onChange={handleChange} />
      </form>
    </div>
  );
};

export default MediaForm;
