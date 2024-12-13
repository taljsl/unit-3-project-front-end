import React, { useEffect } from "react";

import "./AddMediaModal.css";

const AddMediaModal = ({ isOpen = false, onClose, children }) => {
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal_content">
        <i className="close icon" onClick={() => onClose()}></i>

        <h3>Add new Media</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AddMediaModal;
