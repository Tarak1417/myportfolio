import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/contact/contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="flex">
      {/* Main content area where child components will be rendered */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/folder" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
