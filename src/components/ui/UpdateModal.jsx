import React, { useState } from "react";
import { update } from "../../services/mediaService";

import './AddMediaModal.css'

const UpdateModal = ({ item, onClose }) => {
  // the formatDate function and the change to our statevariable that calls it curtesy of chatgpt
  const formatDate = (date) => {
    if (!date) return ""; // Handle null/undefined dates
    return new Date(date).toISOString().split("T")[0];
  };
  const [formData, setFormData] = useState({
    ...item,
    publicationDate: formatDate(item.publicationDate),
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleUpdate = async (evt) => {
    evt.preventDefault();
    try {
      const updatedItem = await update(formData);
      console.log("Updated Item:", updatedItem);
      onClose()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //  enclosed inside a modal
      <div className="modal_content">
        <div className="form-container" style={{ display: 'flex', flexDirection: 'column' }}>

          <i style={{ marginLeft: '-90%' }} className="chevron left icon" onClick={() => onClose()}></i>

          <form onSubmit={handleUpdate} className="add-form">
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
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
  );
};

export default UpdateModal;
