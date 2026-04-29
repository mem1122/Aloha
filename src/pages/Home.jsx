import React from "react";
import HeroSection from "../components/home/HeroSection";
import AdvantagesSection from "../components/home/AdvantagesSection";
import AtmosphereSection from "../components/home/AtmosphereSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AdvantagesSection />
      <AtmosphereSection />
    </div>
  );
}