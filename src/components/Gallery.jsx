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

      {/* COLLAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="h-40 md:h-48 overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm border border-white/30 cursor-pointer"
            onClick={() => setPreviewImage(img)}
          >
            <img
              src={img}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          />
        </div>
      )}

      {/* Small fade/zoom animations */}
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
