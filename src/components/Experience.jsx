import { motion } from "framer-motion";
import experience from "../data.js";

const Experience = () => {
  return (
    <div className="w-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-black dark:text-white pt-32">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6  relative">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-20">
          Pengalaman
        </motion.h2>

        <div className="relative">
          {/* Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden sm:block absolute left-1/2 top-0 w-[3px] bg-neutral-700/40 -translate-x-1/2"
          />

          {experience && experience.length > 0 ? (
            experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div key={item.id || index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }} className="relative grid sm:grid-cols-2 items-center mb-28">
                  {/* Bullet poin */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#030712] dark:bg-[#ffffff]  rounded-full z-20"
                  />

                  {/* TEKS */}
                  <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="px-4 sm:pl-20 sm:pr-6">
                    <p className="font-sans text-sm font-medium">{item.year || item.periode || item.date || "Date"}</p>

                    <h3 className="text-lg font-bold mb-2 font-sans">{item.place || item.company || item.title || "Place"}</h3>

                    <p className="font-semibold  text-gray-700 dark:text-gray-400 font-sans ">{item.role || item.position || item.job || "Role"}</p>

                    <p className="font-sans text-gray-700 dark:text-gray-400  text-[0.9rem] text-justify mt-6">{item.description || item.desc || "Description"}</p>
                    <div className="border-b-1 border-black dark:border-white mt-12"></div>
                  </motion.div>

                  {/* GAMBAR */}
                  <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ once: true }} className="hidden sm:flex justify-end pr-20">
                    <div className="w-[70%] aspect-[5/3] rounded-xl overflow-hidden shadow-lg border border-neutral-800">
                      <img src={item.image || item.img || item.photo || "/placeholder.jpg"} alt={item.place || "Experience"} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-center text-neutral-400">No experience data found</p>
          )}
        </div>
      </div>
      <div className="w-full h-px bg-[#030712]/20 dark:bg-white/20 mt-16" />
    </div>
  );
};

export default Experience;
