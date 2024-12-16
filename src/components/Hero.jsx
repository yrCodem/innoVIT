import React from "react";
import Homepage from "./Homepage.jsx";
import Features from "./Features.jsx";
import About from "./About.jsx";
import Testimonials from "./Testimonials.jsx";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer.jsx";

const Hero = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Homepage />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Hero;
