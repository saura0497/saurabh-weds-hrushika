import React from "react";

const timelineData = [
  {
    year: "April 2025",
    title: "First Meet",
    description:
      "The moment we met, something felt different — a quiet spark, a soft beginning.",
    image: "/images/ss.jpeg", // replace with your image
  },
  {
    year: "2021",
    title: "Togetherness",
    description:
      "Late night talks, long drives, and endless laughter — we grew closer every day.",
    image: "/images/together.jpg",
  },
  {
    year: "June 2025",
    title: "Enagement",
    description:
      "A heartfelt yes to a lifetime of love, trust, and beautiful memories.",
    image: "/images/engagement.jpg",
  },
  {
    year: "October 2025",
    title: "Pre-Wedding",
    description:
      "Capturing the love, joy, and magic before stepping into forever.",
    image: "/images/10 days.jpg",
  },
];

const Journey = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-[#fff9f5]">

      {/* Top Wave */}
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

      <div className="relative max-w-4xl mx-auto z-10">

        <h2 className="text-center font-script text-6xl text-gray-900">
          Our Journey
        </h2>

        <p className="text-center font-serif text-lg text-gray-600 mt-2 mb-12">
          Every moment brought us closer to forever.
        </p>

        <div className="relative border-l-2 border-gray-300 ml-6 md:ml-12">

          {timelineData.map((item, index) => (
            <div key={index} className="mb-16 relative">

              {/* Dot */}
              <div className="w-5 h-5 bg-black rounded-full absolute -left-[13px] top-1.5 border-4 border-white shadow-md"></div>

              {/* Card */}
              <div className="ml-10 md:ml-14 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 animate-slideUp">

                {/* Text */}
                <h3 className="font-serif text-xl text-gray-700 uppercase tracking-widest">
                  {item.year}
                </h3>

                <h4 className="font-script text-4xl text-gray-900">
                  {item.title}
                </h4>

                <p className="font-serif text-gray-700 mt-2">
                  {item.description}
                </p>

                {/* Image */}
                <div className="mt-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Journey;
