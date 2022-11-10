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
        <div
          className={`bg-white w-4/5 z-30 ${isOpen ? "left-0" : "left-[-100%]"} 
        transition-all duration-500 h-screen text-white fixed top-0 flex flex-col items-start`}
        >
          <ul className="flex flex-col mt-24 space-y-6 pl-6 text-black font-semibold">
            {links.map((link) => (
              <li key={link}>
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <header className="extraSmall:hidden desktop:block w-full px-28">
        <div className="flex justify-between items-center pt-10 pb-4">
          <div className="flex items-center space-x-8 text-black">
            <Link
              to="/"
              className="font-kumb text-3xl tracking-normal font-extrabols mb-1"
            >
              sneakers
            </Link>
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <Link to="/" key={link} className="block relative hover:after:absolute after:top-12 after:h-1 after:inset-x-0 after:w-fulll after:bg-orange">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-7">
            <div className="cursor-pointer">
              <img src={cartIcon} className="h-5 w-5" alt="cart" />
            </div>
            <div>
              <img src={avatar} className="h-11 w-11 rounded-full overflow-hidden hover:border-[3px] border-orange cursor-pointer" alt="profile picture" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
