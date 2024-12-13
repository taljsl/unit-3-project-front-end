import React from "react";
import "./AddMediaModal.css";
import Button from "../inputs/Button";
import { useState } from "react";
import UpdateModal from "./UpdateModal";
const ViewItemModal = ({ isOpen = false, onClose, item }) => {
  console.log(isOpen);
  // make a modal open a modal
  const [isEditModalOpen, setIsEditModalOpen] = useState();

  //

  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal_content">
        <i className="close icon" onClick={() => onClose()}></i>
        <h2>{item.name}</h2>
        <img src={item.img_url} alt={item.img_url} style={{ width: "100px" }} />
        <p>Publication Date: {item.publicationDate}</p>
        <p>Genre: {item.genre}</p>
        <p>Details: {item.details}</p>
        <p>Rating: {item.rating}</p>
        <Button text="Update" icon={<i className="pencil icon"></i>} />

        <Button
          text="Delete"
          icon={<i className="trash icon"></i>}
          styles={{ backgroundColor: "red" }}
        />
      </div>
    </div>
  );
};

export default ViewItemModal;
