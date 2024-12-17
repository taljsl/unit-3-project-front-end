import React from "react";
import RegisterForm from "./RegisterForm";
import "src/components/ui/AddMediaModal.css"

const RegisterModal = ({ isOpen=false, onClose, children }) => {
  console.log(isOpen)
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal_content">
      {children}
      </div>
      
    </div>
  );
};

export default RegisterModal;
