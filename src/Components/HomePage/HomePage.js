import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../SiteImg/landing-hero-img.png";
import twoDrinks from "../SiteImg/landing-mid-image.png";
import strawberries from "../SiteImg/landing-strawberries.png";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:gap-20 mt-2 mb-8 text-center">
      <img src={heroImage} alt="Hero" />
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
        <img src={twoDrinks} alt="Two Drinks" className="z-0" />
      </div>
      <h2 className="text-5xl font-bold my-8 mx-2 md:my-10">
        Amoria is all about our love for tea.
      </h2>
      <div className="flex flex-col lg:flex-row px-8 gap-8 items-center justify-center">
        <img
          src={strawberries}
          alt="Strawberries"
          className="w-full md:w-1/2"
        />
        <div className="bg-[#F8E8D4] text-2xl px-8 md:px-20 py-10 md:w-176 w-full">
          We place a big emphasis on what goes into our drinks. Teas imported
          straight from Asia, in-season fruits, and organic dairy.
        </div>
      </div>
    </section>
  );
};

export default HomePage;
