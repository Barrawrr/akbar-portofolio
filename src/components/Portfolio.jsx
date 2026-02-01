import React from "react";

import Masonry from "./Masonry";
import { portfolioData } from "@/data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-8 pb-12 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-bold font-sans mb-8">Portofolio</h1>
          <Masonry items={portfolioData} ease="power3.out" duration={0.6} stagger={0.05} animateFrom="bottom" scaleOnHover={true} hoverScale={0.95} blurToFocus={true} colorShiftOnHover={false} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
