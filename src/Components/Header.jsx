import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../Utils/imagesUtil";
import menuIcon from "../images/icon-menu.svg";
import menuClose from "../images/icon-close.svg";
import cartIcon from "../images/icon-cart.svg";
import deleteIcon from "../images/icon-delete.svg";
import avatar from "../images/image-avatar.png";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <header className="fixed bg-white w-full z-40 desktop:hidden">
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
            <div
              className="relative"
              onClick={() => setShowCheckout(!showCheckout)}
            >
              <img src={cartIcon} className="h-4 w-4" alt="cart" />
              <div className="absolute bg-orange text-white text-[9px] flex justify-center items-center rounded-full p-1 h-3 w-3 -top-1 -right-1">
                0
              </div>
            </div>
            <div>
              <img
                src={avatar}
                className="h-4 w-4 rounded-full relative"
                alt="profile picture"
              />
              <div
                className={`absolute z-[100] top-20 h-auto bg-white overflow-hidden shadow-xl rounded-md inset-x-4 ${
                  showCheckout ? "block" : "hidden"
                }`}
              >
                <div className="text-black flex flex-col">
                  <h1 className="border-b p-5 font-semibold">Cart</h1>
                  <div className="space-y-4">
                    <div className="flex space-x-4 pt-4 items-center px-5">
                      <div className="h-12 w-12 rounded-md overflow-hidden">
                        <img src={images[0].image} alt="pix" />
                      </div>
                      <div>
                        <h1 className="text-sm text-gray-600">
                          Auntum Limited Shooes
                        </h1>
                      </div>
                      <img className="cursor-pointer" src={deleteIcon} alt="" />
                    </div>
                  </div>
                  <div></div>
                  <button className="rounded-lg px-10 bg-orange text-white text-center w-full h-10">
                    Checkout
                  </button>
                </div>
              </div>
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
        <div className="flex justify-between items-center pt-10 pb-4 border-b">
          <div className="flex items-center space-x-8 text-black">
            <Link
              to="/"
              className="font-kumb text-3xl tracking-normal font-extrabols mb-1"
            >
              sneakers
            </Link>
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  to="/"
                  key={link}
                  className="block relative hover:after:absolute after:top-12 after:h-1 after:inset-x-0 after:w-fulll after:bg-orange"
                >
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
              <img
                src={avatar}
                className="h-11 w-11 rounded-full overflow-hidden hover:border-[3px] border-orange border-opacity-90 cursor-pointer"
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
