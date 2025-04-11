import React from "react";
import Testimonial from "/src/Features/components/Testimonial.jsx";
import TestimonialCard from "/src/Features/components/TestimonialCard.jsx";
import Discover from "../../components/Discover";
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
