// USK
import React from "react";

const Portfolio2 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-8">
          {/* Teks */}
          <div className="md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Branding]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Logo, Moodboard, Mindmap, Storyboard Iklan untuk Branding Produk </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Sikat Pancong</h1>
            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify">
              Proyek ini merupakan bagian dari Uji Kompetensi Keahlian yang difasilitasi oleh Lembaga Sertifikasi Profesi (LSP). Sebagai siswa jurusan DKV, tugasnya adalah menggabungkan dua keahlian menjadi kesatuan.
            </p>
            <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center text-justify">
              Pada tugas pertama berperan sebagai Junior Content Creator, fokusnya adalah membuat materi iklan digital untuk produk pilihan yang saya pilih, yaitu Kue Pancong. Prosesnya dimulai dari penyusunan sinopsis, shot list, hingga
              storyboard, kemudian berlanjut ke tahap produksi dan penyuntingan video menggunakan Adobe After Effects. Selain itu, saya juga membuat bumper singkat yang menampilkan logo sekolah serta elemen produk.
            </p>
            <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center  text-justify">
              Tugas kedua yaitu berperan sebagai Junior Graphic Designer, dengan fokus membangun identitas visual lengkap untuk produk yang sama. Nama brand yang saya pilih adalah “Sikat Pancong”. Pada tahap ini, pengerjaan meliputi
              penyusunan creative brief, pembuatan moodboard, perumusan filosofi visual, hingga perancangan mockup prototipe desain. Seluruh proses ini menjadi pengalaman yang memperkaya cara pandang dalam membangun sebuah brand dari awal
              hingga siap dipresentasikan.
            </p>
          </div>

          {/* Gambar */}
          <div className="w-full max-w-[700px] mx-auto">
            <img src="/assets/prev-2.webp" alt="Ujikom" className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[700px] mx-auto">
            <img src="/assets/desain2_1.jpg" alt="usk1" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src="/assets/desain2_2.jpg" alt="usk2" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src="/assets/desain2_3.jpg" alt="usk3" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src="/assets/desain2_4.jpg" alt="usk4" className=" mb-6 w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
          </div>
        </div>
        <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
        <div className="flex flex-row gap-4 mt-6 item-start">
          <img src="/ps.svg" alt="adobe-photoshop" className="w-12 h-12  fill-blue-900 drop-shadow-lg drop-shadow-blue-900/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          <img src="/ai.svg" alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          <img src="/ae.svg" alt="adobe-ae" className="w-12 h-12  fill-indigo-800 drop-shadow-lg drop-shadow-indigo-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          <img src="/pr.svg" alt="premier pro" className="w-12 h-12  fill-indigo-800 drop-shadow-lg drop-shadow-indigo-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          <img src="/me.svg" alt="media encoder" className="w-11 h-11  fill-indigo-800 drop-shadow-lg drop-shadow-indigo-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
        </div>
      </div>
    </main>
  );
};

export default Portfolio2;
