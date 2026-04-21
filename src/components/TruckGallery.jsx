import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const TruckGallery = ({ gallery = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery.length) return null;

  return (
    <div className="flex flex-col gap-3">
      <PhotoProvider>
        {/*Main image*/}
        {gallery.map((img, i) => (
          <PhotoView key={i} src={img.original}>
            {i === activeIndex ? (
              <div className="cusror-pointer overflow-hidden rounded-2xl">
                <img
                  src={img.original}
                  alt="main"
                  className="h-48 w-full cursor-pointer object-cover sm:h-90 md:h-72 xl:h-90"
                />
              </div>
            ) : (
              <span style={{ display: "none" }} />
            )}
          </PhotoView>
        ))}
      </PhotoProvider>

      {/*Thumbnail section */}
      {gallery.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-20 w-25 shrink-0 overflow-hidden rounded-xl border-2 transition-opacity sm:w-30 ${i === activeIndex ? "border-primary-light" : "border-transparent opacity-60 hover:opacity-90"}`}
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
