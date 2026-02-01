// POCARI
import React from "react";

const Portfolio11 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src={`${import.meta.env.BASE_URL}assets/prev-11.jpeg`} alt="Pocari" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Tipografi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tugas Sekolah, Menyusun tipografi ke dalam sebuah brand </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Pocari Sweat</h1>
            <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center mx-auto text-justify">
              Desain ini merupakan tugas kelompok mata pelajaran dasar tipografi saat SMK yang berfokus pada pengenalan dan eksplorasi tipografi. Tugasnya adalah menyusun kata-kata yang berkaitan dengan sebuah produk menjadi bentuk visual
              yang merepresentasikan karakter produk tersebut. Pada proyek ini, brand dan kumpulan kata disusun oleh teman kelompok, sementara saya bertanggung jawab pada proses eksekusi desain.
            </p>
            <p className="font-sans mt-2 text-gray-700 dark:text-gray-400 text-lg justify-center mb-6 text-justify">
              Desain ini saya buat menggunakan Adobe Illustrator, dengan teknik Create Outlines pada setiap kata sebelum dibentuk menggunakan Mesh Warp agar tipografi dapat mengikuti siluet botol secara presisi.
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src={`${import.meta.env.BASE_URL}ai.svg`} alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio11;
