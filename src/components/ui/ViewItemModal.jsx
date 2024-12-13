import React from "react";
import "./AddMediaModal.css";
import Button from "../inputs/Button";

const ViewItemModal = ({ isOpen = false, onClose, item }) => {
  console.log(isOpen);
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
        <Button text='Update' icon={<i className="pencil icon"></i>} />
        <Button text='Delete' icon={<i className="trash icon"></i>} styles={{backgroundColor: "red"}}/>

      </div>
    </div>
  );
};

export default ViewItemModal;
{/* 
// import React, { useEffect } from "react";

// import "./AddMediaModal.css";

// const AddMediaModal = ({ isOpen = false, onClose, children }) => {
//   return (
//     <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
//       <div className="modal_content">
//         <i className="close icon" onClick={() => onClose()}></i>

//         <h3>Add new Media</h3>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AddMediaModal; */}
