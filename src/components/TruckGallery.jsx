import { useState } from "react";

const TruckGallery = ({ gallery = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery.length) return null;

  return (
    <div className="flex flex-col gap-3">
      {/*Main image*/}
      <div className="h-72 w-120 overflow-hidden rounded-2xl sm:h-96">
        <img
          src={gallery[activeIndex].original}
          alt="main"
          className="h-full w-full object-cover"
        />
      </div>

      {/*Thumbnail section */}
      {gallery.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-opacity ${i === activeIndex ? "border-primary-light" : "border-transparent opacity-60 hover:opacity-90"}`}
            >
              <img
                src={img.thumb}
                alt={`thumb-${i}`}
                className="h-full w-full cursor-pointer object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default TruckGallery;
