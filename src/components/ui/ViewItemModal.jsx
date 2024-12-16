import React from "react";
import "./AddMediaModal.css";
import Button from "../inputs/Button";
import { useState } from "react";
import UpdateModal from "./UpdateModal";
import { deleteItem } from "../../services/mediaService";

const ViewItemModal = ({ isOpen = false, onClose, item }) => {
  // console.log(isOpen);
  // make a modal open a modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //
  if (isEditModalOpen) {
    return (
      <div
        className="modal"
        style={{ display: isEditModalOpen ? "block" : "none" }}
      >
        <UpdateModal
          item={item}
          onClose={() => {
            // Here we do a nested on close so that both view and update close

            setIsEditModalOpen(false);
            onClose();
          }}
        />
      </div>
    );
  }

  const handleDelete = async (item) => {
    try {
      const deletedItem = await deleteItem(item);
      console.log(deletedItem);
      onClose();
    } catch (err) {
      console.log("Error deleteing item:", err);
    }
  };

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

        <div style={{ display: "flex", gap: "2rem" }}>
          <Button
            text="Update"
            icon={<i className="pencil icon"></i>}
            handleOnClick={() => setIsEditModalOpen(true)}
          />

          <Button
            text="Delete"
            icon={<i className="trash icon"></i>}
            styles={{ backgroundColor: "red" }}
            handleOnClick={() => handleDelete(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewItemModal;
