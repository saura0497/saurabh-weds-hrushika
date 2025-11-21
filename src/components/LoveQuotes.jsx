import React from "react";
import { useEffect } from "react";

const quotes = [
  "“Every love story is beautiful, but ours is my favourite.”",
  "“In you, I’ve found my today and all of my tomorrows.”",
  "“Two souls, one heart… forever.”",
  "“You are my once-in-a-lifetime.”",
  "“Love is not something you look for. Love is something you become.”",
];

export default function LoveQuotes() {
  useEffect(() => {
    const observers = document.querySelectorAll(".fade-quote");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.3 }
    );

    observers.forEach((el) => io.observe(el));
  }, []);

  return (
    <section
      className="relative py-28 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/your-bg.jpg')", // use a soft blurred photo
      }}
    >
      {/* Dark Romantic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-serif text-white font-bold mb-12 drop-shadow">
          Love Notes
        </h2>

        <div className="space-y-16">
          {quotes.map((q, index) => (
            <p
              key={index}
              className="
              text-2xl md:text-3xl font-serif italic text-white opacity-0 
              translate-y-6 transition-all duration-[1200ms] fade-quote drop-shadow-lg"
            >
              {q}
            </p>
          ))}
        </div>
      </div>

      {/* Soft Gold Gradient at Bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#FAF6EF] to-transparent"></div>
    </section>
  );
}
