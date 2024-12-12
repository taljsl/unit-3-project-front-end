import React, { useState } from "react";

const MediaForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    publicationDate: "",
    genre: "",
    type: "",
    details: "",
    rating: "",
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
        <label htmlFor="genre"> </label>
      </form>
    </div>
  );
};

export default MediaForm;
