import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Process from "./components/Process";
import Hero2 from "./components/Hero2";
import WhatWeDo from "./components/whatWeDo";
import CardSection from "./components/CardsSection";
import Legacy from "./components/Legacy";
import Difference from "./components/Difference";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <WhatWeDo />
      <Legacy />
      <Difference />
      <Process />
      <CardSection />
    </>
  );
}

export default App;
