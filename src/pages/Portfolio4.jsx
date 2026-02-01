// NEVER SUNDAY
import React from "react";

const Portfolio4 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src="/assets/prev-4.webp" alt="NS" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Desain Promosi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tugas Sekolah, unofficial desain promosi brand NEVER SUNDAY </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Never Sunday T-shirt</h1>
            <p className="font-sans mt-4 text-gray-700 dark:text-gray-400 text-lg justify-center mx-auto text-justify">
              Poster iklan ini dibuat sebagai bagian dari tugas sekolah saat SMK dengan brief memasarkan produk dari brand NEVER SUNDAY. Desain menampilkan produk T-shirt dengan penekanan pada informasi promo melalui elemen harga yang
              dicoret, menandakan adanya potongan harga dari IDR 75.000 menjadi IDR 66.000 untuk menarik perhatian audiens.
            </p>
            <p className="font-sans mt-4 text-gray-700 dark:text-gray-400 text-lg justify-center mb-6 text-justify">
              Poster ini saya buat menggunakan software Illustrator, dengan pendekatan gaya modern dan minimalis agar tampilan terlihat bersih, fokus, dan mudah dipahami..
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src="/ai.svg" alt="adobe-photoshop" className="w-12 h-12 mr-3 fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio4;
