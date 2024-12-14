import React from "react";
import "./AddMediaModal.css";
import Button from "../inputs/Button";
import { useState } from "react";
import UpdateModal from "./UpdateModal";
import { deleteItem } from "../../services/mediaService";
const ViewItemModal = ({ isOpen = false, onClose, item }) => {
  console.log(isOpen);
  // make a modal open a modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  
  //
if (isEditModalOpen){
  return <UpdateModal  item={item} onClose={() => setIsEditModalOpen(false)}/>
}

const handleDelete = async (item) => {
  try {
    const deletedItem = await deleteItem(item)
    onClose()
  } catch (err) {
    console.log("Error deleteing item:", err)
  }
}


// const handleUpdate = async (evt) => {
//   // evt.preventDefault();
//   try {
//     const updatedItem = await update(formData);
//     console.log("Updated Item:", updatedItem);
//     onClose()
//   } catch (error) {
//     console.log(error);
//   }
// };



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
  );
};

export default ViewItemModal;

