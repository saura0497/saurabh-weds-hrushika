import React, { useEffect } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

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
<SectionWrapper>
        {/* Heading */}
        {/* <h2 className="text-4xl font-serif font-bold text-gray-800 fade-up opacity-0 translate-y-6">
          Wedding Venue
        </h2> */}
          <h2 className="text-center font-script text-6xl text-gray-900">
       Wedding Venue
        </h2>
        <p className="text-gray-600 fade-up mt-2 flex justify-center">
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
                <span className="font-serif text-lg">16 December 2025</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="text-[#c1a875]" />
                <span className="font-serif text-lg">Evening Ceremony</span>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="text-[#c1a875] mt-1" />
                <span className="font-serif text-lg">
                  Sati Anusaya Mata Mangal Karyalay<br />
                  Near City Center, Nagpur, Maharashtra
                </span>
              </div>

              <a
                href="https://maps.app.goo.gl/zBxG1s6eALWP4m4fA?g_st=ipc"
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

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#d4c7a3]/40">
              <iframe
                title="Wedding Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.445085897985!2d78.61872427622785!3d20.758208081666214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f3d742aa843%3A0x43273f0dc088bcc3!2sSati%20Anusaya%20Mata%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1700545200000!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="rounded-3xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
    </SectionWrapper>
  );
}
