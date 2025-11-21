import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Journey from "./components/Journey";
import Quotes from "./components/Quotes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CoupleIntro from "./components/CoupleIntro";
import Countdown from "./components/Countdown";
import LoveQuotes from "./components/LoveQuotes";
import RSVP from "./components/RSVP";
import VenueSection from "./components/VenueSection";

export default function App() {
  return (
    <div className="bg-[#FFF7F4] text-gray-800">
      <Hero />
      <Invitation />
    <Journey />
      
      <Gallery />
      <CoupleIntro />
      <Countdown />
      {/* <LoveQuotes />
      <RSVP /> */}
      <VenueSection />
      <Footer /> 
    </div>
  );
}
