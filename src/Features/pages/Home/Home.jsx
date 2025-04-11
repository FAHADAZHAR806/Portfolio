import React from "react";
import Intro from "./Intro";
import Card from "./Card";
import PriceCard from "./PriceCard";
import Selected from "./selected";
import Testimonial from "/src/Features/components/Testimonial.jsx";
import TestimonialCard from "/src/Features/components/TestimonialCard.jsx";
import ServiceCard from "./ServiceCard";
import Discover from "/src/Features/components/Discover.jsx";
import Projects from "./Projects";
export default function Home() {
  return (
    <>
      <Intro />
      <ServiceCard />
      <Card />
      <PriceCard />
      <Selected />
      <Projects />
      <Testimonial />
      <TestimonialCard />
      <Discover />
    </>
  );
}
