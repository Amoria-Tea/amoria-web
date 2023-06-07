import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const HomePage = () => {
   
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > containerTop - windowHeight + 100) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <>
    <section className="flex flex-col items-center justify-center lg:gap-20 mt-5 sm:mt-8 mb-8 text-center">
      <div>
      <img class="fade-in" src="https://amoria-tea-assets.s3.us-east-2.amazonaws.com/landing-hero-img.png" alt="Hero" />
      </div>
      <div class="fade-in-3">
      <div className="relative xl:w-304 lg:w-[90%] w-full flex lg:flex-row flex-col justify-end">
        <div className="lg:absolute flex flex-col items-center justify-center bg-[#F8E8D4] gap-6 text-center p-10 left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 h-96 lg:w-[40%] w-full">
          <h3 className="text-4xl font-bold">Hey! We're Amoria Tea 👋</h3>
          <p className="text-lg">
            The most delicious teas, crafted with farm-fresh ingredients by a
            team obsessed with quality.
          </p>
          <NavLink
            to="/contact"
            className="underline font-bold text-lg hover:opacity-70"
          >
            Contact us for Catering Opportunities &gt;&gt;
          </NavLink>
        </div>
        <img src="https://amoria-tea-assets.s3.us-east-2.amazonaws.com/landing-mid-image.png" alt="Two Drinks" className="z-0" />
      </div>
      </div>
      <h2 ref={containerRef} className="text-2xl sm:text-5xl font-bold mx-2 my-8 px-2 lg:my-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{duration: 0.5}}
        >
        Amoria is all about our love for tea.
        </motion.div>  
    </h2>
      
      <div ref={containerRef} className="flex flex-col lg:flex-row px-8 sm:gap-8 items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{duration: 0.5}}
        >
        <video
          alt="Strawberries"
          className="h-96 mb-8 sm:h-176"
          src="https://amoria-tea-assets.s3.us-east-2.amazonaws.com/strawberries-video.mov"
          autoPlay
          playsInline
          muted
          loop
        />
        </motion.div>
        <div className="bg-[#F8E8D4] text-2xl px-8 md:px-20 py-10 md:w-176 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{duration: 0.5}}
        >
          We place a big emphasis on what goes into our drinks. Teas imported
          straight from Asia, in-season fruits, and organic dairy.
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
