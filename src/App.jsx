import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import ScrollToTopButton from '/src/components/ScrollToTopButton.jsx'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      Aos.init({
        duration: 1000, // Animation time
        once: true,     // Animation only once
      });
    }, 3000,[]); 
    
    // 2 seconds loader
    // useEffect(() => {
    //   Aos.init({
    //     duration: 1000, // Animation time
    //     once: true,     // Animation only once
    //   });
    // }, []);
    return () => clearTimeout(timer); // clean up
  }, []);

  if (loading) return <Loader />;

  
 
  
  return (
    <>


    <Header/>
    <Outlet/>
    <Footer/>
    <ScrollToTopButton/>
    </>
  )
}
