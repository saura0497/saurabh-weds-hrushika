import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center overflow-hidden animate-zoomSlow"
      style={{
        backgroundImage: "url('/images/10 days.JPG')", // your photo here
      }}
    >

      {/* Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>

      {/* Soft Glow Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 text-white">
        
        <p className="font-serif tracking-[6px] text-sm md:text-lg uppercase opacity-90">
          The Wedding Of
        </p>

        <h1 className="font-script text-6xl md:text-8xl drop-shadow-2xl">
          Saurabh & Hrushika
        </h1>

        <p className="font-serif text-xl md:text-2xl mt-4 italic opacity-90">
          “Two hearts, one beautiful journey.”
        </p>

        <div className="mt-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 shadow-lg">
          <p className="font-serif text-lg md:text-2xl tracking-wide">
            20 February 2025 • Pune
          </p>
        </div>
      </div>

      {/* Smooth Wave Divider */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff9f5"
          d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160V0H0Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
