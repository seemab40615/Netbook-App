import React from "react";
import { NavBar } from "../../component/NavBar/NavBar";
import { HeroSection } from "../../component/HeroSection/HeroSection";
import { OurTeam } from "../../component/OurTeam/OurTeam";
import { Wrapper } from "./Home.style";
import { Footer } from "../../component/Footer/Footer";
import { AboutUs } from "../../component/AboutUs";
import { Achievements } from "../../component/Achievements";
export const Home = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <HeroSection />
      </Wrapper>
      <AboutUs />
      <Achievements />
      <OurTeam />
      <Footer />
    </>
  );
};
