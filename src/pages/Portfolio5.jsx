// BINTANG KLIN
import React from "react";

const Portfolio5 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white  pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-8">
          {/* Teks */}
          <div className="md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Branding]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tugas Sekolah, Unofficial Katalog dan X-banner untuk Branding Produk </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Bintang Klin</h1>

            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify">
              Proyek ini merupakan bagian dari mata pelajaran SMK yaitu Desain Produksi, di mana setiap kelompok diminta bekerja sama langsung dengan pelaku UMKM yang membutuhkan dukungan dalam pengembangan identitas visual terutama bisnis
              yang belum dikenal luas atau belum memiliki branding yang solid.
            </p>
            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify">
              Dalam proyek ini, saya dan tim berkesempatan berkolaborasi dengan sebuah usaha rumahan yang memproduksi sabun laundry. Meskipun sudah memiliki identitas dasar, setelah dilakukan emphatize di lapangan, brand tersebut
              membutuhkan beberapa media promosi yaitu X-Banner dan daftar produk. Pada bagian X-Banner, tim berfokus pada perencanaan tata letak, pengaturan informasi, serta strategi visual agar banner menarik perhatian audiens dan mudah
              dipahami di area penempatannya.
            </p>
            <p className="font-sans text-gray-700 dark:text-gray-400 text-lg justify-center text-justify mb-6">
              Di luar pekerjaan kelompok, saya sendiri merancang katalog produk. Mulai dari penyusunan struktur layout, penataan hierarki visual, hingga pengorganisasian konten, setiap elemen disusun agar tetap fungsional bagi pelanggan,
              sekaligus terasa lebih rapi, profesional, dan sesuai arah branding yang diperbarui.
            </p>
          </div>

          <div className="w-full max-w-[700px] mx-auto ">
            <img src="/assets/desain5_1.jpg" alt="Main BinKlin" className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[700px] mx-auto">
            <img src={`${import.meta.env.BASE_URL}assets/desain5_2.jpg`} alt="Binklin2" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src={`${import.meta.env.BASE_URL}assets/desain5_3.jpg`} alt="Binklin3" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src={`${import.meta.env.BASE_URL}assets/desain5_4.jpg`} alt="Binklin4" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
            <img src={`${import.meta.env.BASE_URL}assets/desain5_5.jpg`} alt="Binklin5" className="w-full aspect-[16/9] object-cover rounded-lg shadow-md" />
          </div>
        </div>
        <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mt-6 mb-2">Tools</p>
        <div className="flex flex-row item-start">
          <img src={`${import.meta.env.BASE_URL}ai.svg`} alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
        </div>
      </div>
    </main>
  );
};

export default Portfolio5;
