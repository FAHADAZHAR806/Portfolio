import React from "react";
import Testimonial from "/src/components/Testimonial.jsx";
import TestimonialCard from "/src/components/TestimonialCard.jsx";
import Discover from "/src/components/Discover.jsx"
import Whatwedo from "./Whatwedo";
import OurServices from "./OurServices";
export default function Services() {
  return (
    <>
      <Whatwedo />
      <OurServices />
      <Testimonial />
      <TestimonialCard />
      <Discover />
    </>
  );
}
