import React from "react";
import { motion } from "framer-motion";
import { skillKu } from "../data";
import SpotlightCard from "./SpotlightCard";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skill = () => {
  return (
    <div>
      {/* Skill Section Start */}
      <div className="pt-15 pb-32 bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white transition-colors duration-300 ">
        <h1 className="text-center text-3xl sm:text-5xl lg:text-3xl font-bold mb-6 font-sans">Skill Teknis</h1>
        {/* Desain */}
        <h2 className="text-center text-2xl font-bold mb-2 font-sans">Desain</h2>
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="skills-box mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 sm:px-8 md:px-12 lg:px-24">
          {skillKu
            .filter((skill) => skill.category === "Desain")
            .map((skill) => (
              <SpotlightCard key={skill.id} spotlightColor="rgba(0, 229, 255, 0.4)" className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md overflow-hidden transition">
                <img src={skill.gambar} alt={skill.nama} className="w-14 h-14 mb-4 dark:filter dark:invert" />
                <h1 className="text-lg font-bold mb-2 font-sans">{skill.nama}</h1>
                <p className="font-semibold text-sm text-gray-700 dark:text-gray-400 font-sans">{skill.desk}</p>
              </SpotlightCard>
            ))}
        </motion.div>
        {/* Pemrograman */}
        <h2 className="text-center text-2xl font-bold mb-2 mt-10 font-sans">Pemrograman</h2>
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="skills-box mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 sm:px-8 md:px-12 lg:px-24">
          {skillKu
            .filter((skill) => skill.category === "Coding")
            .map((skill) => (
              <SpotlightCard key={skill.id} spotlightColor="rgba(255, 105, 180, 0.4)" className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md overflow-hidden transition">
                <img src={skill.gambar} alt={skill.nama} className="w-14 h-14 mb-4 dark:filter dark:invert" />
                <h1 className="text-lg font-bold mb-2 font-sans">{skill.nama}</h1>
                <p className="font-semibold text-sm text-gray-700 dark:text-gray-400 font-sans">{skill.desk}</p>
              </SpotlightCard>
            ))}
        </motion.div>
      </div>
      {/* Skill Section end */}
    </div>
  );
};

export default Skill;
