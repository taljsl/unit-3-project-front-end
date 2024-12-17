import React from "react";
import { useState } from "react";
import "./Navbar.css";
import RegisterModal from "../authentication/RegisterForm";
import Button from "../inputs/Button";
import RegisterForm from "../authentication/RegisterForm";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav>
      <img src="./defaults/logo.png" id="logo" />
      <Button
        text="Register"
        handleOnClick={() => setIsModalOpen(true)}
        icon={<i className="plus icon"></i>}
        styles={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Button
        text="Sign-In"
        handleOnClick={() => setIsModalOpen(true)}
        icon={<i className="plus icon"></i>}
        styles={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <RegisterModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        // children={<RegisterForm onClose={setIsModalOpen} />}
      />
      <i className="user icon"></i>
    </nav>
  );
};

export default Navbar;
