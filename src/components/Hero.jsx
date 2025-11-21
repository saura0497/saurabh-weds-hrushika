import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/images/our-love 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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

        <div className="mt-8 bg-white/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/30 shadow-lg">
          <p className="font-serif text-lg md:text-2xl tracking-wide flex items-center justify-center -py-2">
            16 December 2025 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
