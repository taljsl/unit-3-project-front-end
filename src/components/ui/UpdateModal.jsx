import React, { useState } from "react";

const UpdateModal = (item) => {
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

  //   Write  handleUpdate here after update function service made

  return (
    <div className="form-container">
      <form onSubmit={handleUpdate}>
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
      </form>
    </div>
  );
};

export default UpdateModal;
