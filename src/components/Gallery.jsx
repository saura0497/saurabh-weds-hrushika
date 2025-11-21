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
  const [previewImage, setPreviewImage] = useState(null);

  const images = albums[selectedAlbum];

  return (
    <SectionWrapper>
      <h2 className="text-center font-script text-6xl text-gray-900">
        Photo Gallery
      </h2>
      <p className="text-gray-600 flex justify-center mt-2 mb-10">
        A collection of our cherished moments ✨
      </p>

      {/* PREMIUM TABS */}
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

      {/* COLLAGE GRID — SAME AS BEFORE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* small squares */}
        {images[0] && (
          <div onClick={() => setPreviewImage(images[0])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[0]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[1] && (
          <div onClick={() => setPreviewImage(images[1])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[1]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* tall image */}
        {images[2] && (
          <div onClick={() => setPreviewImage(images[2])}
            className="col-span-2 md:col-span-1 md:row-span-2 h-80 cursor-pointer md:h-full overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[2]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* medium squares */}
        {images[3] && (
          <div onClick={() => setPreviewImage(images[3])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[3]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[4] && (
          <div onClick={() => setPreviewImage(images[4])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[4]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {/* extra squares */}
        {images[5] && (
          <div onClick={() => setPreviewImage(images[5])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[5]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

        {images[6] && (
          <div onClick={() => setPreviewImage(images[6])}
            className="h-40 overflow-hidden cursor-pointer rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
            <img src={images[6]} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        )}

      </div>

      {/* PREVIEW MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn"
        >
          <img
            src={previewImage}
            className="max-w-[90%] max-h-[90vh] rounded-xl shadow-2xl animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // prevents accidental close
          />
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes zoomIn {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </SectionWrapper>
  );
}
