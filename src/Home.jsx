import React from "react";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import VenueSection from "./components/VenueSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Invitation /> */}
      <Journey />
      <Gallery />
      <Countdown />
      <VenueSection />
      <Footer />
    </>
  );
}
