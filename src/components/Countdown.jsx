import React, { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2025-02-20T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#FAF6EF] overflow-hidden">

      {/* Soft Background Animation */}
      <div className="absolute inset-0 opacity-40 animate-slowFloat pointer-events-none">
        <div className="absolute w-72 h-72 bg-[#d4c7a3]/30 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-[#c1a875]/20 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-3">
          Save the Date
        </h2>

        <p className="text-gray-600 mb-10">
          We can’t wait to celebrate this beautiful day with you 💛
        </p>

        {/* Countdown Box */}
        <div className="bg-white/40 backdrop-blur-md border border-[#d4c7a3]/40 shadow-xl rounded-3xl py-10 px-8 max-w-3xl mx-auto animate-fadeIn">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* Days */}
            <div className="flex flex-col">
              <span className="text-5xl font-serif font-bold text-gray-800">
                {timeLeft.days}
              </span>
              <span className="text-gray-600 tracking-wide">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col">
              <span className="text-5xl font-serif font-bold text-gray-800">
                {timeLeft.hours}
              </span>
              <span className="text-gray-600 tracking-wide">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col">
              <span className="text-5xl font-serif font-bold text-gray-800">
                {timeLeft.minutes}
              </span>
              <span className="text-gray-600 tracking-wide">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col">
              <span className="text-5xl font-serif font-bold text-gray-800">
                {timeLeft.seconds}
              </span>
              <span className="text-gray-600 tracking-wide">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
