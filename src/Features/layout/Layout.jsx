import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '/src/Features/components/Header.jsx'
import Footer from '/src/Features/components/Footer.jsx'
import ScrollToTopButton from '/src/Features/components/ScrollToTopButton.jsx'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Layout() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation time
      once: true,     // Animation only once
    });
  }, []);
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <ScrollToTopButton/>
    </>
  )
}
