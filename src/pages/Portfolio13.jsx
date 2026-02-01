// SUNSETZ
import React from "react";

const Portfolio13 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-32 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video */}
          <div className="w-full order-1 md:order-2 pt-20 mb-6 flex justify-center">
            <video src="/assets/Motion1.mp4" className="w-3/4 md:w-[90%]" autoPlay loop muted playsInline />
          </div>

          {/* Teks */}

          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Karya Pribadi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya Pribadi Desain Grafis dan Motion Grafis </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Sunsetz</h1>

            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify ">
              Karya ini merupakan eksplorasi motion design yang memadukan fotografi, tipografi, dan elemen gerak untuk menciptakan suasana visual yang tenang namun dinamis. Konsepnya berangkat dari gagasan refleksi diri, yang digambarkan
              melalui cermin dengan pantulan langit sebagai simbol ketenangan dan introspeksi.
            </p>
            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify mb-6">
              Proses pengerjaan dilakukan menggunakan Adobe Illustrator untuk penataan komposisi dan tipografi, kemudian dilanjutkan di Adobe Premiere Pro untuk animasi dan pengaturan gerak awan agar menghadirkan kesan hidup dan atmosferik.
              Melalui karya ini, saya ingin menampilkan harmoni antara keheningan dan pergerakan dalam satu frame visual yang sederhana namun bermakna.
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <div className="flex flex-row gap-4 mt-6 item-start">
              <img src="/ai.svg" alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
              <img src="/ae.svg" alt="adobe-ae" className="w-12 h-12  fill-indigo-800 drop-shadow-lg drop-shadow-indigo-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio13;
