import React from "react";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";

const Hero = () => {
  return (
    <section id="hero" className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-32 pb-32 px-6 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300 ">
      <div className="max-w-7xl mx-auto">
        {/* H1 */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2, ease: "easeOut" }} className="font-bold font-sans text-3xl sm:text-5xl lg:text-6xl mb-6 ">
          Portofolio saya
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.15, ease: "easeOut" }}
          className=" text-gray-700 dark:text-gray-400 font-sans font-semibold mb-10 max-w-3xl sm:text-lg lg:text-xl text-justify"
        >
          Dengan pengalaman di bidang desain grafis dan pengembangan antarmuka, saya siap membantu mewujudkan kebutuhan visual Anda. Mari lihat portofolio yang telah saya bangun.
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }} className="flex flex-wrap gap-4">
          <a href="#portfolio" className="btn-dark-solid dark:block hidden font-semibold font-sans">
            <ShinyText text="Lihat Portfolio saya" className="shiny dark:shiny-dark" />
          </a>

          <a href="#portfolio" className="btn-light-solid dark:hidden font-semibold font-sans">
            <ShinyText text="Lihat Portfolio saya" className="shiny" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
