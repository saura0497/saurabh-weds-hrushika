import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";

const albums = {
  prewedding: [
    "/images/1 day.jpg",
    "/images/2 day.jpg",
    "/images/3 days.jpg",
    // "/images/8 days.jpg",
  ],
  solo: [
   "/images/1 day.jpg",
    // "/images/2 day.jpg",
    "/images/3 days.jpg",
    "/images/8 days.jpg",
  ],
  journey: [
    // "/images/1 day.jpg",
    "/images/2 day.jpg",
    "/images/3 days.jpg",
    "/images/8 days.jpg",
  ],
};

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("prewedding");

  return (
    // <section id="gallery" className="py-16 bg-[#FAF6EF]">
    //   <div className="max-w-6xl mx-auto px-6 text-center">
    <SectionWrapper>
        {/* Title */}
        {/* <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">
          Photo Gallery
        </h2> */}
          <h2 className="text-center font-script text-6xl text-gray-900">
       Photo Gallery
        </h2>
        <p className="text-gray-500 mb-10 font-light flex justify-center mt-2">
          A collection of our cherished moments ✨
        </p>

        {/* Album Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {Object.keys(albums).map((album) => (
            <button
              key={album}
              onClick={() => setSelectedAlbum(album)}
              className={`px-5 py-2 rounded-full border text-sm tracking-wide transition-all duration-300 
            ${
              selectedAlbum === album
                ? "bg-[#D4C7A3] text-white border-[#D4C7A3] shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#D4C7A3]"
            }`}
            >
              {album === "prewedding" && "Pre-Wedding"}
              {album === "solo" && "Solo Photos"}
              {album === "journey" && "Journey"}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {albums[selectedAlbum].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-sm">
              <img
                src={img}
                alt=""
                className="w-full mb-4 rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
    {/* //   </div> */}
    </SectionWrapper>
    // </section>
  );
}
