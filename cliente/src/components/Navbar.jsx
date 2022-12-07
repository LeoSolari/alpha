import React from "react";
import logo from "../assets/logoalpha2.png";
import DropdownComponent from "./Dropdown";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#ff8925] fixed z-10 opacity-95 text-white w-full h-20 ">
      <div className="w-24 h-full flex items-start">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center font-bold text-3xl pr-4 md:pr-0">
        Librería ALFA
      </div>
      <div className="md:flex justify-center items-center hidden  pr-2">
        <DropdownComponent />
      </div>
    </div>
  );
};

export default Navbar;
