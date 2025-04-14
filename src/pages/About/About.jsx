import React from "react";
import Intro from "./Intro";
import Education from "./Education";
import Institue from "./Institue";
import Experience from "./Experience";
import ExperienceCard from "./ExperienceCard";
import Skills from "./Skills";
import Selected from "./Selected";
import SelectedWork from "./SelectedWork";
import Count from "./Count";
import CountCard from "./CountCard";
import Discover from "/src/components/Discover.jsx";
export default function About() {
  return (
    <>
      <Intro />
      <Education/>
      <Institue/>
      <Experience />
      <ExperienceCard/>
      <Skills />
      <Selected />
      <SelectedWork />
      <Count />
      <CountCard/>
      <Discover />
    </>
  );
}
