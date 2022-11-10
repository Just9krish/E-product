import { images } from "../Utils/imagesUtil";

export default function Slider() {
  return (
    <section className="desktop:hidden w-full overflow-x-hidden pt-22">
      <div>
        {images.map(({ image, id }) => (
          <div key={id}>
            <img src={image} className="object-center" alt="image" />
          </div>
        ))}
      </div>
    </section>
  );
}
