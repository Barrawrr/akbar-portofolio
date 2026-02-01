// JAKARTAFEST
import React from "react";

const Portfolio14 = () => {
  return (
    <main className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-16 md:pt-4 lg:pt-4 pb-32 my-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar */}
          <div className="order-1 md:order-2 pt-20">
            <img src={`${import.meta.env.BASE_URL}assets/desain1_14.jpg`} alt="JakartaFestPoster" className="w-3/4 md:w-[90%] rounded-lg shadow-lg mx-auto" />
          </div>

          {/* Teks */}
          <div className="order-1 md:order-1 md:mt-12 lg:mt-18">
            <p className="font-sans italic text-lg font-semibold text-gray-700 dark:text-gray-400">[Illustrasi]</p>
            <p className="font-sans italic text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Karya untuk Lomba Jakarta Fest Tahun 2024 </p>
            <h1 className="font-sans text-4xl font-bold mb-6">Kamulah Pemuda Harapan Indonesia, Bersama Kita Lawan Korupsi Moral!</h1>
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <p className="font-sans text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Tema : </p>
              <p className="font-sans text-lg font-medium text-gray-700 dark:text-gray-400 mb-6">Gerakan Membangun Budaya Berintegritas & Antikorupsi di Kalangan Pelajar menuju Jakarta Kota Global</p>
            </div>
            <p className="font-sans  text-gray-700 dark:text-gray-400 text-lg justify-center mx-auto text-justify">
              Illustrasi ini memvisualkan seseorang yang merasakan perilaku ketidakadilan di kalangan antar pelajar dalam lingkungan sekolah. Seseorang tersebut tampil berdiri membelakangi 2 tokoh yang terlibat dalam kasus korupsi moral,
              seperti sudah tau akal-akalan yang dimainkan oleh oknum tenaga pendidik di sekolah.
            </p>
            <p className="font-sans mt-2 text-gray-700 dark:text-gray-400 text-lg justify-center mb-6 text-justify">
              Penjelasannya adalah pada karya ini, saya ingin membuat audiens mengenal dampak nyata yang terjadi dari korupsi moral di sekolah, yaitu ketidakadilan penilaian. Fokus utamanya adalah perasaan putus asa seorang siswa saat
              melihat adanya perlakuan istimewa pada kasus penilaian mata pelajaran di sekolah dalam artian bias dari oknum tenaga pendidik terhadap siswa/i tertentu, sebuah pengingat bahwa integritas harus dimulai dari sikap objektif
              tenaga pendidik itu sendiri.
            </p>
            <p className="font-sans text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">Tools</p>
            <img src={`${import.meta.env.BASE_URL}ai.svg`} alt="adobe-illustrator" className="w-12 h-12  fill-orange-800 drop-shadow-lg drop-shadow-orange-800/50 hover transition-transform duration-300 ease-in-out hover:scale-120"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio14;
