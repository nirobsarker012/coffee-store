import React from "react";
import logo from "../assets/images/more/logo1.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="bg-[url('assets/images/more/15.jpg')] bg-cover bg-center">
          <NavLink to={"/"} className="flex justify-center items-center gap-4">
            <img className="w-[75px] h-[90px]" src={logo} alt="" />
            <h2 className="text-white text-[60px]">Expresso Emporium</h2>
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
