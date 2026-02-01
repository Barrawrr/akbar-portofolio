// AGT RUN
import React, { useState } from "react";

const Portfolio8 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 3 : prev - 2));
  };

  return (
    <main
      className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white 
pt-4 md:pt-8 lg:pt-10 pb-32 my-navy"
    >
      <div className="max-w-7xl mx-auto pt-6 md:pt-12 px-4 md:px-12 lg:px-16">
        <div className="flex justify-center items-center">
          <div className=" mt-12 relative md:w-[40%]  overflow-hidden rounded-xl shadow-lg mx-auto">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              <img src="/assets/desain8_1.webp" className="w-full " alt="Desain 1" />
              <img src="/assets/desain8_2.webp" className="w-full " alt="Desain 2" />
              <img src="/assets/desain8_3.webp" className="w-full " alt="Desain 3" />
            </div>
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

        {/* Teks */}
        <div className="mt-12">
          <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Illustrasi]</p>
          <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya untuk Lomba Universitas Sebelas Maret Tahun 2024 </p>
          <h1 className="font-sans text-4xl font-bold mb-6">Budidaya Metode Vertikultur, Solusi Nyata Atasi Lahan Sempit Perkotaan </h1>

          <div className="grid grid-cols-[auto_1fr] gap-2 ">
            <p className="font-sans text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tema : </p>
            <p className="font-sans text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Swasembada Pangan</p>
          </div>

          <p className="font-sans text-gray-700 dark:text-gray-400 text-lg ">
            Illustrasi ini merupakan jenis illustrasi infografis yang berisi informasi dan data primer dan sekunder. Menjelaskan tentang penting menjaga ketahanan pangan dengan metode penanaman tanaman yang menyesuaikan kondisi geografis di
            perkotaan. Saya mengambil topik tentang penanaman vertikultur dengan menggunakan media dan lahan seminimal mungkin.
          </p>
          <p className="font-sans mt-2 text-gray-700 dark:text-gray-400 text-lg mb-6">
            Saya menggunakan illustrasi bergaya surat lama, terinspirasi dari pencampuran antara peta harta karun dan surat kabar lama. Semua data dan informasi dipelajari dan disaring terlebih dulu sebelum dituangkan menjadi bentuk
            illustrasi yang perlu dimasukkan.
          </p>

          <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
          <div className="flex flex-row gap-4 item-start">
            <img src="/ai.svg" alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio8;
