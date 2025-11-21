import React from "react";

export default function Navbar() {
  const nav = [
    {name:'Home', to:'#'},
    {name:'Invitation', to:'#'},
    {name:'Journey', to:'#journey'},
    {name:'Gallery', to:'#gallery'},
    {name:'Meet', to:'#meet'},
    {name:'Countdown', to:'#countdown'},
    {name:'RSVP', to:'#rsvp'},
    {name:'Venue', to:'#venue'},
  ];

  return (
    <nav className="fixed w-full z-50 top-4 left-0 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="glass px-4 py-2 rounded-full">
          <span className="text-script text-2xl soft-gold">S & H</span>
        </div>
        <ul className="hidden md:flex gap-4 items-center">
          {nav.map((n)=>(
            <li key={n.name}>
              <a href={n.to} className="text-sm text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                {n.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
