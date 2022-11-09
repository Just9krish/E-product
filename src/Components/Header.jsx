import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../images/icon-menu.svg";
import menuClose from "../images/icon-close.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed bg-white w-screen desktop:hidden">
        <div className="flex justify-between">
          <div className="flex items-center px-6 space-x-4">
            <div className="z-40" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <img src={menuClose} className="h-4 w-4" alt="menu close" />
              ) : (
                <img src={menuIcon} className="h-4 w-4" alt="menu" />
              )}
            </div>
            <Link
              to="/"
              className="font-kumb text-3xl font-extrabold mb-1 tracking-normal"
            >
              sneakers
            </Link>
          </div>
          <div className="flex items-center space-x-4 p-6">
            <div>
              <img src={cartIcon} className="h-4 w-4" alt="cart" />
            </div>
            <div>
              <img
                src={avatar}
                className="h-4 w-4 rounded-full"
                alt="profile picture"
              />
            </div>
          </div>
        </div>
        <div className={`bg-white w-4/5 z-30 ${isOpen ? "left-0" : "left-[-100%]"} 
        transition-all duration-500 h-screen text-white fixed top-0 flex flex-col items-start`}>
          <ul className="flex flex-col mt-24 space-y-6 pl-6 text-black font-semibold">
            {links.map((link) => (
              <li key={link}>
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
