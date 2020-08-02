import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import TopAnimation from "./components/TopAnimation";
import WhatWeDo from "./components/WhatweDo";
import WhoWeServe from "./components/WhoWeServe";
import Technologies from "./components/Technologies";
import ContactUs from "./components/ContactUs";

function App() {
  
  return (
    <div>
      <NavBar />
      <TopAnimation />
      <WhatWeDo />
      <WhoWeServe />
      <Technologies />
      <ContactUs />
    </div>
  );
}

export default App;
