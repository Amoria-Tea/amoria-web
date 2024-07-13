import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import 'Components/fade-in.css';
import ImageGallery from "Components/Common/ImageGallery";
import CompanyLogos from "Components/Common/CompanyLogos";
import "./Catering.css";
const Catering = () => {
   
  const containerRef = useRef(null);
  const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const containerTop = containerRef.current.offsetTop;
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       if (scrollY > containerTop - windowHeight + 100) {
//         controls.start({ opacity: 1 });
//       } else {
//         controls.start({ opacity: 0 });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [controls]);

  return (
    <div className="catering-container fade-in">
        <h1 className="catering-header"> Ever want your own Bottomless Boba Bar? </h1>
        <h3 className="catering-subheader"> Elevate any event with Amoria's craft boba! 
            We offer multiple options from bottomless boba bars and personalizable prebottled boba.    </h3>
        <h3 className="catering-subheader italic"> We offer our catering services across the NYC and New Jersey Area. </h3>
        <button className="catering-button">
          <NavLink to="/contact"> Contact Us </NavLink>
        </button>
        <ImageGallery />
        <div className="company-catering">
            <h3 className="company-catering-header"> Companies We Have Catered For </h3>
            <CompanyLogos />
        </div>
    </div>

  );
};

export default Catering;
