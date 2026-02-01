// VAN HELSING
import React from "react";

const Portfolio3 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src={`${import.meta.env.BASE_URL}assets/prev-3.webp`} alt="Poster Van Helsing" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Karya Pribadi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya Pribadi Desain ulang Poster Film VAN HELSING </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Van Helsing</h1>

            <p className="font-sans mt-4 text-gray-700 dark:text-gray-400 text-lg justify-center mx-auto text-justify">Dalam mengisi waktu libur sekolah, saya membuat ulang desain poster sebuah film berjudul Van Helsing.</p>
            <p className="font-sans mt-4 text-gray-700 dark:text-gray-400 text-lg justify-center mb-6 text-justify">
              Poster ini saya buat menggunakan software Photoshop. Dengan menampilkan tokoh-tokoh film dan suasana yang mendukung. Ini adalah karya terbaik saya sampai dengan sekarang dalam membuat poster film.
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src={`${import.meta.env.BASE_URL}ps.svg`} alt="adobe-photoshop" className="w-12 h-12 mr-3 fill-blue-900 drop-shadow-lg drop-shadow-blue-900/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio3;
