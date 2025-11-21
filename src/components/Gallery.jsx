import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";

const albums = {
  prewedding: [
    "/images/1 day.JPG",
    "/images/2 day.JPG",
    "/images/9 days.JPG",
    "/images/11 day.jpg",
    "/images/12 days.jpg",
    "/images/10 days.JPG",
    "/images/5 days.JPG",
  ],
  engagement: [
    "/images/engagement/eng1.jpg",
    "/images/engagement/eng2.jpg",
    "/images/engagement/eng3.jpg",
    "/images/engagement/eng4.jpg",
    "/images/engagement/eng5.jpg",
    "/images/engagement/eng6.jpg",
    "/images/engagement/eng7.jpg",
  ],
};

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("prewedding");

  const images = albums[selectedAlbum];

  return (
    <SectionWrapper>
      <h2 className="text-center font-script text-6xl text-gray-900">
        Photo Gallery
      </h2>
      <p className="text-gray-600 flex justify-center mt-2 mb-10">
        A collection of our cherished moments ✨
      </p>

      {/* NEW PREMIUM TABS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {[
          { key: "prewedding", label: "Pre-Wedding" },
          { key: "engagement", label: "Engagement" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedAlbum(tab.key)}
            className={`
              px-6 py-2.5 rounded-full border-2 text-sm md:text-base font-serif transition-all duration-300 
              ${
                selectedAlbum === tab.key
                  ? "bg-[#c1a875]/90 text-white border-[#c1a875] shadow-md scale-[1.05]"
                  : "bg-white/70 text-gray-700 border-gray-300 hover:border-[#c1a875] hover:text-[#b59660]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PREMIUM COLLAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* 1. Two small squares */}
        {images[0] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[0]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[1] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[1]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* 2. Large tall image */}
        {images[2] && (
          <div className="col-span-2 md:col-span-1 md:row-span-2 h-80 md:h-full overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[2]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* 3. Medium squares */}
        {images[3] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[3]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[4] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[4]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* Extra squares if available */}
        {images[5] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[5]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[6] && (
          <div className="h-40 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[6]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

      </div>
    </SectionWrapper>
  );
}
