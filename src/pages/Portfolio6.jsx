// ALPINA ADVENTURE
import React, { useState } from "react";

const Portfolio6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === 9 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 9 : prev - 1));
  };

  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto pt-24 px-6 md:px-12 lg:px-16">
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-lg">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            <img src={`${import.meta.env.BASE_URL}assets/desain6_1.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 1" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_2.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 2" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_3.jpeg`} className="w-full flex-shrink-0 object-cover" alt="Desain 3" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_4.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 4" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_5.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 5" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_6.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 6" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_7.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 7" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_8.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 8" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_9.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 9" />
            <img src={`${import.meta.env.BASE_URL}assets/desain6_10.jpg`} className="w-full flex-shrink-0 object-cover" alt="Desain 10" />
          </div>

          <button onClick={prevSlide} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/30 group-hover:bg-white/40 dark:group-hover:bg-gray-800/50 transition">
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 6 10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 1 1 5l4 4" />
              </svg>
            </span>
          </button>

          <button onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/30 group-hover:bg-white/40 dark:group-hover:bg-gray-800/50 transition">
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 6 10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m1 9 4-4-4-4" />
              </svg>
            </span>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {[0, 1, 2].map((i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={`w-3 h-3 rounded-full transition ${activeIndex === i ? "bg-white" : "bg-gray-400"}`} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Branding]</p>
          <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Unofficial Visual Identity Brand ALPINA ADVENTURE GEAR </p>
          <h1 className="font-sans text-4xl font-bold mb-6">Alpina Adventure Gear</h1>
          <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center  text-justify">
            Proyek ini dibuat sebagai bagian dari tugas brief desain semasa SMK. Alpina Adventure Gear merupakan brand fiktif asal Swiss yang berfokus pada perlengkapan outdoor seperti pakaian gunung, perlengkapan mendaki, dan aksesori
            camping.
          </p>
          <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center mx-auto text-justify">
            Konsep desain menonjolkan karakter kuat, tegas, dan dekat dengan alam. Logo dirancang dari kombinasi bentuk gunung dan inisial huruf “A” serta “G” untuk merepresentasikan ketahanan dan semangat eksplorasi.
          </p>
          <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center mb-6 text-justify">
            Proyek ini dibuat menggunakan software Illustrator dan dikembangkan untuk menunjukkan pemahaman dalam membangun aturan identitas visual mulai dari logo, aturan jarak aman (clear space), hingga penerapan elemen identitas pada
            berbagai media.
          </p>
          <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
          <div className="flex flex-row gap-4 mt-6 item-start">
            <img src={`${import.meta.env.BASE_URL}ps.svg`} alt="adobe-photoshop" className="w-12 h-12  fill-blue-900 drop-shadow-lg drop-shadow-blue-900/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
            <img src={`${import.meta.env.BASE_URL}ai.svg`} alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio6;
