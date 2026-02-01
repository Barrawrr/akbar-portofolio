// NORTH VAL
import React from "react";

const Portfolio9 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src="/assets/prev-9.jpeg" alt="NorthVal" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Karya Pribadi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya Pribadi Manipulasi Desain Poster Film </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Northval : Back To Home</h1>

            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify mb-6">
              Pada karya ini, saya terinspirasi dari poster film The Northman dan mengadaptasinya ke dalam konsep pribadi. Dengan mengubah pose, tokoh, serta pendekatan figure–ground, karya ini difokuskan pada narasi personal tentang
              perjalanan dan kebebasan diri sendiri. Siluet tokoh yang membelakangi penonton dengan tangan terbuka menguatkan kesan penerimaan dan perlawanan. Foto utama pada karya ini menggunakan dokumentasi teman saya yang sedang berpose
              di lingkungan sekolah saat hujan, menambah kesan emosional dan realistis, lalu dimanipulasi untuk membangun suasana dramatis. Latar laut dan langit gelap ditambahkan untuk memperkuat atmosfer sinematik serta memberi kesan
              ruang yang lebih luas.
            </p>
            <p className="font-sans mt-2 text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src="/ps.svg" alt="adobe-photoshop" className="w-12 h-12 mr-3 fill-blue-900 drop-shadow-lg drop-shadow-blue-900/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio9;
