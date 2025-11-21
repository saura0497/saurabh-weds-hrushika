import React, { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";

export default function Countdown() {
  const weddingDate = new Date("2025-12-16T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <SectionWrapper>

      <h2 className="text-center font-script text-6xl text-gray-900">
        Save the Date
      </h2>

      <p className="text-gray-700 mb-12 md:text-lg flex justify-center mt-2">
        Join us as we celebrate our love story ❤️
      </p>

      {/* Countdown Card */}
      <div className="relative bg-white/20 backdrop-blur-[8px] border border-white/30 rounded-3xl py-12 px-6 md:px-10 shadow-2xl max-w-4xl mx-auto animate-fadeIn">

        {/* Gradient overlay inside card */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ffe5d4]/30 to-[#fff4e6]/10 rounded-3xl pointer-events-none"></div>

        {/* FIXED → Always one row */}
        <div className="relative z-10 flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">

          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center flex-1 min-w-[70px]">
              <span className="text-4xl md:text-6xl font-serif font-bold text-gray-900 drop-shadow-lg">
                {item.value}
              </span>
              <span className="text-gray-700 tracking-widest mt-2 text-sm md:text-base">
                {item.label}
              </span>
            </div>
          ))}

        </div>

        {/* Floating particles */}
        <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#f8e0c9]/30 blur-2xl animate-slowFloat"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#f0d9b9]/20 blur-2xl animate-slowFloat"></div>
      </div>

    </SectionWrapper>
  );
}
