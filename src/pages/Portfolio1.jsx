// POSTER UICI
import React from "react";

const Portfolio1 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src={`${import.meta.env.BASE_URL}assets/prev-1.jpg`} alt="Poster digital UICI" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Gambar Digital]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya untuk Lomba Universitas Insan Cendekia Internasional </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Newsantara Horizon</h1>

            <p className="font-sans text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tema : Inovasi Digital</p>
            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify mb-6">
              Pada karya ini, saya mengeksplorasi imajinasi tentang hadirnya sebuah mesin teleportasi di masa depan, terinspirasi dari nuansa film distopia seperti Divergent. Poster ini menampilkan sudut pandang seorang tokoh yang berusaha
              mengejar pria paruh baya menuju sebuah tempat yang dikenal sebagai Newsantara atau Nusantara baru, seolah pria itu berkata “pak tunggu!”. Semua disusun mulai dari komposisi, cahaya, hingga penggabungan elemen futuristik dan
              tradisional. Tujuan dari karya ini adalah menghadirkan visual imajinatif yang menyentuh, sekaligus menunjukkan kemampuan saya dalam membuat poster digital image dengan storytelling yang kuat.
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src={`${import.meta.env.BASE_URL}ps.svg`} alt="adobe-photoshop" className="w-12 h-12 mr-3 fill-blue-900 drop-shadow-lg drop-shadow-blue-900/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio1;
