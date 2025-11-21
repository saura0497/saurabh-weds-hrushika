// SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`relative py-24 overflow-hidden bg-gradient-to-b from-[#fff9f5] ${className}`}>
      {/* Cinematic Floating Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-[#d4c7a3]/30 rounded-full blur-3xl top-10 left-10 animate-slowFloat"></div>
        <div className="absolute w-96 h-96 bg-[#c1a875]/20 rounded-full blur-3xl bottom-10 right-10 animate-slowFloat"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
