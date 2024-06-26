import React from "react";
import Hero from "./componet/Hero/Hero.jsx";
import Navbar from "./componet/Navbar/navbar.jsx";
import Services from "./componet/Services/Services.jsx";
import Banner from "./componet/Banner/Banner.jsx";
import AppStore from "./componet/AppStore/AppStore.jsx";
import CoverBanner from "./componet/CoverBanner/CoverBanner.jsx";
import Testimonial from "./componet/Testimonial/Testimonial.jsx";
import Footer from "./componet/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import Service from "./componet/Service/Service.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <CoverBanner />
      <AppStore />
      <Testimonial />
      <Footer />


      
    </div>
  );
};

export default App;