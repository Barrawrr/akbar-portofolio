import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-36 pb-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <form action="https://formsubmit.co/abayyazkila@gmail.com" method="POST" className="w-full px-4 sm:px-6 md:w-5/6 lg:w-2/3 mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-4xl font-bold font-sans mb-2">Kontak</h4>
              {/* <h2 className="mb-4 text-3xl font-bold text-gray-300 dark:text-gray-700 sm:text-4xl lg:text-5xl font-montserrat">Hubungi Saya</h2> */}
            </div>
          </div>

          {/* Nama */}
          <div className="mb-8 w-full px-4">
            <label htmlFor="name" className="block mb-2 text-base font-bold font-sans">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Masukkan nama Anda"
              className="w-full rounded-md p-3 border-2 border-gray-400 bg-transparent text-inherit placeholder-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-8 w-full px-4">
            <label htmlFor="email" className="block mb-2 text-base font-bold font-sans">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Masukkan email Anda"
              className="w-full rounded-md p-3 border-2 border-gray-400 bg-transparent text-inherit placeholder-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
          </div>

          {/* Pesan */}
          <div className="mb-8 w-full px-4">
            <label htmlFor="pesan" className="block mb-2 text-base font-bold font-sans">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="message"
              required
              placeholder="Tulis pesan Anda di sini"
              className="h-32 w-full rounded-md p-3 border-2 border-gray-400 bg-transparent text-inherit placeholder-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            ></textarea>
          </div>

          {/* Form Submit */}
          <div className="w-full px-4">
            <button type="submit" className="w-full rounded-full bg-black text-white dark:bg-gray-700  py-3 px-8 font-semibold transition-opacity hover:opacity-80 text-xl">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
