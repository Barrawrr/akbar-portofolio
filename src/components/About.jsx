import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isWave, setIsWave] = useState(false);

  return (
    <section id="about" className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-32 pb-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full px-4 sm:px-6 md:w-[90%] lg:w-2/3 lg:px-20 mx-auto"
          >
            <h2 className="font-sans mb-8 font-semibold lg:text-3xl md:text-xl">Tentang Saya</h2>

            <p className="text-gray-700 dark:text-gray-400 mb-8 max-w-xl font-semibold lg:text-lg text-justify">
              Mahasiswa Desain Grafis dengan minat pada desain visual dan pengembangan antarmuka, terbiasa menggunakan Adobe Photoshop dan Illustrator, serta aktif mempelajari teknologi front-end.
            </p>

            <h4 className="text-gray-700 dark:text-gray-400 max-w-xl font-semibold pb-10 lg:text-lg text-justify"> Terbuka untuk kolaborasi dan peluang bekerja sama.</h4>

            <div className="flex flex-row items-center gap-3 md:gap-5">
              {/* Dark */}
              <a href="/about" className="btn-dark-solid dark:block hidden font-semibold">
                Lihat selengkapnya
              </a>
              <a href="mailto:akbarazkila@gmail.com" className="btn-dark-outline dark:block hidden rounded-full py-3 px-6 text-base font-semibold">
                Hubungi Saya
              </a>

              {/* Light */}
              <a href="/about" className="btn-light-solid dark:hidden font-semibold">
                Lihat selengkapnya
              </a>
              <a href="mailto:akbarazkila@gmail.com" className="btn-light-outline dark:hidden rounded-full py-3 px-6 text-base font-semibold">
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          {/* AVATAR */}
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [0.94, 1.08, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-[90%] md:w-[60%] lg:w-[40%] flex justify-center mb-8 select-none"
          >
            <img src={`${import.meta.env.BASE_URL}assets/abay.jpg`} alt="HeroGambar" width={500} height={500} className="max-w-full" />
            {/* <video src="/assets/Avatar finale.webm" autoPlay muted playsInline preload="auto" onEnded={(e) => e.currentTarget.pause()} className="max-w-full" /> */}
          </motion.div>
        </div>
        <div className="w-full h-px bg-[#030712]/20 dark:bg-white/20 mt-16" />
      </div>
    </section>
  );
};

export default About;
