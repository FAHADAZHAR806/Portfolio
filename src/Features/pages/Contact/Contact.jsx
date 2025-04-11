import React from "react";
import Contactt from "./Contactt";
import Discover from "/src/Features/components/Discover.jsx";
import Form from "./Form";
import Address from "./Address";

export default function Contact() {
  return (
    <>
      <Contactt/>
      <Form />
      <Address />
      <Discover />
    </>
  );
}
