import React from "react";
import Intro from "./Intro";
import Card from "./Card";
import PriceCard from "./PriceCard";
import Selected from "./selected";
import Testimonial from "./Testimonial";
import TestimonialCard from "./TestimonialCard";
import ServiceCard from "./ServiceCard";
import Discover from "./Discover";
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
