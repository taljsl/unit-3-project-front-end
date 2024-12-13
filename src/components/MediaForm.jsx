import React, { useState } from "react";
import {create} from "../services/mediaService";

import './MediaForm.css'
import Button from "./inputs/Button";

const MediaForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    publicationDate: "",
    genre: "",
    type: "book",
    details: "",
    rating: "5.5",
    img_url: "",
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleCreate = async (evt) => {
    evt.preventDefault()
    try { 
      const newMedia = await create(formData)
      console.log('Created New Media:',newMedia)
      
    } catch (error) {console.log(error)}
  };

  return (
    <div className="form-container">
      <form onSubmit={handleCreate} className="add-form">
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
        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
        >
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
          placeholder="Summary"
        />
        <label htmlFor="rating">Rating: {formData.rating}</label>
        <input
          type="range"
          max={10}
          step=".1"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          placeholder="0-10"
        />
        <label htmlFor="img_url">Image URL:</label>
        <input
          type="text"
          name="img_url"
          id="img_url"
          value={formData.img_url}
          onChange={handleChange}
        />
        <button type="submit">Add New Media</button>
      </form>
    </div>
  );
};

export default MediaForm;
