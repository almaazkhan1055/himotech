import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import WhatWeDo from "./components/whatWeDo";
import Legacy from "./components/Legacy";
import Difference from "./components/Difference";
import CardSection from "./components/CardSection";
import Process from "./components/Process";

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
