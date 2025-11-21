import React, { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp redirect
  const sendWhatsApp = () => {
    const text =
      `RSVP Confirmation:%0A` +
      `Name: ${name}%0A` +
      `Guests: ${guests}%0A` +
      `Message: ${message}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section className="relative py-28 bg-[#FAF6EF]">
      {/* Soft floating gold light */}
      <div className="absolute inset-0 opacity-30 pointer-events-none animate-slowFloat">
        <div className="absolute w-72 h-72 bg-[#d4c7a3]/40 rounded-full blur-3xl top-12 left-10"></div>
        <div className="absolute w-96 h-96 bg-[#c1a875]/30 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center text-gray-800">
          RSVP / Contact Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We would love to know if you’ll be joining us 💛
        </p>

        {/* Form Card */}
        <div className="mt-12 bg-white/50 backdrop-blur-md border border-[#d4c7a3]/40 shadow-xl rounded-3xl px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1a875]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Guests */}
            <input
              type="number"
              placeholder="Number of Guests"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1a875]"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message (optional)"
            rows="4"
            className="w-full mt-6 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1a875]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* WhatsApp Button */}
          <button
            onClick={sendWhatsApp}
            className="
              mt-8 w-full bg-[#c1a875] hover:bg-[#b29660]
              text-white py-3 rounded-xl 
              font-serif text-lg shadow-lg transition-all
            "
          >
            Send via WhatsApp 📩
          </button>

          {/* Note */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Your message will open directly in WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
