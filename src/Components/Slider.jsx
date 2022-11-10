import { useState } from "react";
import { images } from "../Utils/imagesUtil";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

export default function Slider() {
  const [slide, setSlide] = useState(0);

  function changeSlide(direction) {
    if (direction === "l") {
      setSlide(slide !== 0 ? slide - 1 : images.length - 1);
    }

    if (direction === "r") {
      setSlide(slide === images.length - 1 ? 0 : slide + 1);
    }
  }

  return (
    <section className="desktop:hidden w-full relative overflow-x-hidden pt-22">
      <div
        className="w-[400vw] flex items-center justify-center transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images.map(({ image, id }) => (
          <div key={id} className="w-[100vw]">
            <img src={image} className="object-center" alt="image" />
          </div>
        ))}
      </div>
      <div className="absolute extraSmall:top-48 mobile:top-1/2 flex justify-between w-full extraSmall:px-2 mobile:px-4">
        <div onClick={() => changeSlide("l")} className="bg-white h-8 w-8 rounded-full flex justify-center items-center">
          <img src={prev} alt="prev slide" />
        </div>
        <div onClick={() => changeSlide("r")} className="bg-white h-8 w-8 rounded-full flex justify-center items-center">
          <img src={next} alt="next slide" />
        </div>
      </div>
    </section>
  );
}
