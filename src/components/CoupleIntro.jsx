import React from "react";

export default function CoupleIntro() {
  return (
    <section className="py-20 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-3">
          Meet the Couple
        </h2>
        <p className="text-center text-gray-500 mb-16">
          A beautiful journey of two hearts becoming one ✨
        </p>

        {/* BRIDE */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          
          {/* Photo */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="/images/bride.jpg"
              alt="Bride"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-[#D4C7A3] animate-fadeIn"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-center md:text-left animate-slideUp">
            <h3 className="text-3xl font-serif font-semibold text-gray-800">
              Hrushika
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Graceful, kind-hearted, and forever smiling — she brings warmth
              wherever she goes. Her energy makes the world softer, brighter,
              and more beautiful.  
            </p>
            <p className="italic text-[#C1A875] font-serif mt-4">
              “She is the calm to his chaos.”  
            </p>
          </div>
        </div>

        {/* GROOM */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">

          {/* Photo */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="/images/groom.jpg"
              alt="Groom"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-[#D4C7A3] animate-fadeIn"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-center md:text-left animate-slideUp">
            <h3 className="text-3xl font-serif font-semibold text-gray-800">
              Saurabh
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Passionate, caring, and full of life — he brings strength,
              laughter, and endless love into their journey. He is her biggest
              supporter and her forever adventure partner.
            </p>
            <p className="italic text-[#C1A875] font-serif mt-4">
              “He is her today, tomorrow, and every day after.”  
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
