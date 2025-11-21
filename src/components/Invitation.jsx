import React from "react";

const Invitation = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-[#fff9f5] overflow-hidden">

      {/* Soft top wave to match Hero bottom wave */}
      <svg
        className="absolute top-0 w-full rotate-180"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff9f5"
          d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160V0H0Z"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* Glass Card */}
        <div className="bg-white/40 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-10 animate-fadeUp">

          {/* <p className="font-serif tracking-[6px] uppercase text-sm md:text-lg text-gray-600">
            You Are Cordially Invited To The Wedding Of
          </p> */}

          <h2 className="font-script text-5xl md:text-7xl text-gray-900 drop-shadow">
            Saurabh & Hrushika
          </h2>

          <p className="font-serif text-lg md:text-xl italic mt-3 text-gray-700">
            “Together is a beautiful place to be.”
          </p>

          {/* Details */}
          <div className="mt-8 space-y-2 text-gray-800 font-serif text-lg">
            <p><strong>Date:</strong> 20 February 2025</p>
            <p><strong>Time:</strong> 7:00 PM Onwards</p>
            <p><strong>Venue:</strong> Grand Imperial Hall, Pune</p>
          </div>

          {/* Button */}
          <button className="mt-8 px-8 py-3 bg-black/70 text-white rounded-full tracking-wide font-serif hover:bg-black transition">
            View Location
          </button>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
