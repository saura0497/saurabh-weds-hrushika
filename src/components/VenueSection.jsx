import React, { useEffect } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function VenueSection() {

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
  }, []);

  return (
    <section className="relative py-28 bg-[#FAF6EF]">
      {/* Floating gold lights */}
      <div className="absolute inset-0 pointer-events-none opacity-30 animate-slowFloat">
        <div className="absolute w-72 h-72 bg-[#d4c7a3]/50 rounded-full blur-3xl top-20 left-12"></div>
        <div className="absolute w-96 h-96 bg-[#c1a875]/40 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-gray-800 fade-up opacity-0 translate-y-6">
          Wedding Venue
        </h2>
        <p className="text-gray-600 mt-2 fade-up opacity-0 translate-y-6">
          We can’t wait to celebrate this day with you 💛
        </p>

        {/* Venue Card */}
        <div
          className="
            mt-12 bg-white/70 backdrop-blur-md shadow-xl border border-[#d4c7a3]/40 
            rounded-3xl px-8 py-10 fade-up opacity-0 translate-y-6
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Venue Details */}
            <div className="text-left space-y-5">
              <h3 className="text-2xl font-serif font-bold text-gray-800">
                The Wedding Of Saurabh & Hrushika
              </h3>

              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="text-[#c1a875]" />
                <span className="font-serif text-lg">20 February 2025</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="text-[#c1a875]" />
                <span className="font-serif text-lg">Evening Ceremony</span>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="text-[#c1a875] mt-1" />
                <span className="font-serif text-lg">
                  [Place Name]<br />
                  [City, Area]<br />
                  [Landmark]
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Your+Location+Name"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-4 px-6 py-3 rounded-xl 
                  bg-[#c1a875] hover:bg-[#b29660] transition text-white font-serif
                "
              >
                Open in Google Maps
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#d4c7a3]/40">
              <iframe
                title="Wedding Venue Map"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_IFRAME_LINK"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded-3xl"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
