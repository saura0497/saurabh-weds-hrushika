import React from "react";
import SectionWrapper from "../SectionWrapper";

const timelineData = [
  {
    year: "April 2025",
    title: "First Meet",
    description: "The moment we met, something felt different — a quiet spark, a soft beginning.",
    image: "/images/ss.jpeg",
  },
  {
    year: "2025",
    title: "Togetherness",
    description: "Late night talks, long drives, and endless laughter — we grew closer every day.",
    image: "/images/6 days.jpg",
  },
  {
    year: "June 2025",
    title: "Engagement",
    description: "A heartfelt yes to a lifetime of love, trust, and beautiful memories.",
    image: "/images/engagement.jpg",
  },
  {
    year: "October 2025",
    title: "Pre-Wedding",
    description: "Capturing the love, joy, and magic before stepping into forever.",
    image: "/images/10 days.JPG",
  },
];

export default function Journey() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <h2 className="text-center font-script text-6xl text-gray-900">Our Journey</h2>
        <p className="text-center font-serif text-lg text-gray-600 mt-2 mb-12">
          Every moment brought us closer to forever.
        </p>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-300"></div>

          {/* TIMELINE ITEMS */}
          <div className="space-y-20">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0; // alternate on desktop

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 
                                  bg-[#c1a875] border-4 border-white rounded-full shadow-md z-20"></div>

                  {/* CARD */}
                  <div
                    className={`
                      bg-white/50 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg p-6 mt-10
                      w-full md:w-[45%]
                      ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
                    `}
                    style={{ marginTop: "40px" }}
                  >
                    <h3 className="font-serif text-sm tracking-widest uppercase text-gray-600">
                      {item.year}
                    </h3>
                    <h4 className="font-script text-4xl text-gray-900">{item.title}</h4>
                    <p className="font-serif text-gray-700 mt-2">{item.description}</p>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover rounded-xl shadow-md mt-4"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
