import { useState } from "react";
import { images, thumbnails } from "../Utils/imagesUtil";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";

export default function Main() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full desktop:block extraSmall:px-0 desktop:px-64 extraSmall:pt-4 extraSmall:pb-10 mobile:pt-6 mobile:pb-36 desktop:pt-16 desktop:pb-40 extraSmall:overflow-hidden">
      <div className="flex desktop:space-x-28">
        <div className="extraSmall:hidden desktop:block relative">
          {images.map((img) => (
            <div key={img.id}>
              <img
                src={img.image}
                className={`w-96 rounded-lg ${
                  img.id == index ? "block" : "hidden"
                } overflow-hidden cursor-pointer`}
                alt="pix"
              />
            </div>
          ))}
          <div className="mt-6">
            <div className="flex space-x-5">
              {thumbnails.map((thumbnail) => (
                <div
                  className={`w-20 h-20 hover:opacity-40 cursor-pointer duration-500 hover:border-[2.5px] hover:border-orange hover:bg-orange rounded-lg`}
                  key={thumbnail.id}
                  onClick={() => setIndex(thumbnail.id)}
                >
                  <img
                    src={thumbnail.thumbnail}
                    className="rounded-lg"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="desktop:mt-20">
          <div className="extraSmall:px-5 mobile:px-8 desktop:px-0 flex flex-col space-y-5">
            <div className="space-y-2">
              <h5 className="text-orange font-bold uppercase desktop:text-sm tracking-wide text-opacity-80 extraSmall:text-xs">
                Sneaker Company
              </h5>
              <h1 className="text-2xl desktop:text-4xl font-bold tracking-wide">
                Fall Limited Edition <br />
                Sneaker
              </h1>
            </div>
            <p className="text-[#68707d] extraSmall:text-xs mobile:text-sm">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer
            </p>
            <div className="extraSmall:flex items-center extrasmall:space-x-12 mobile:space-x-24 desktop:none">
              <div className="flex space-x-3">
                <h1 className="text-2xl font-extrabold racking-wide">
                  $125.00
                </h1>
                <span className="rounded-lg bg-orange text-orange px-3 text-sm font-black bg-opacity-20 flex items-center justify-center">
                  50%
                </span>
              </div>
              <span className="block mt-1 line-through text-[#b6bcc8] font-semibold">
                $250.00
              </span>
            </div>

            <div className="flex extraSmall:flex-col desktop:flex-row extraSmall:space-y-4 desktop:space-y-0 desktop:space-x-5">
              <div className="bg-[#f7f8fd] flex items-center justify-between extraSmall:w-full desktop:w-36 h-6 rounded-lg py-6 px-4">
                <img src={minus} className="cursor-pointer" alt="minus" />
                <span className="font-semibold">0</span>
                <img src={plus} className="cursor-pointer" alt="plus" />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-orange text-white text-center extraSmall:w-full desktop:w-52 h-10"
              >
                <img
                  src={cart}
                  className="h-4 w-4 text-white"
                  alt="add to cart"
                />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
