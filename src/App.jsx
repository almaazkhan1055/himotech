import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import Legacy from "./components/Legacy";
import Difference from "./components/Difference";
import CardSection from "./components/CardSection";
import Process from "./components/Process";
import OurWorks from "./components/OurWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <OurWorks />
      <Legacy />
      <Difference />
      <Process />
      <CardSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
