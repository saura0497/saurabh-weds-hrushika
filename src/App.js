import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Extra from "./Extra";
// import Home from "./pages/Home";
// import Extra from "./pages/Extra";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/for-her" element={<Extra />} />
    </Routes>
  );
}
