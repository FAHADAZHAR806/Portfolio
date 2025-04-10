import React from 'react'
import Intro from './Intro'
import Service from './Service'
import Card from './Card'
import Selected from './selected'
import Testimonial from './Testimonial'
import ServiceCard from "./ServiceCard";
import Discover from "./Discover"
 import Projects from "./Projects";
export default function Home() {
  return (
   <>
  <Intro/>
  <Service/>
  <ServiceCard/>
   <Card/>
  <Selected/>
  <Projects/>
  <Testimonial/>
  <Discover/>
   </>
  )
}
