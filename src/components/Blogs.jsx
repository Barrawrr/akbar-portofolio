import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data";

const Blogs = () => {
  return (
    <section id="blog" className="bg-[var(--color-primary)] text-black dark:bg-[var(--color-primary-dark)] dark:text-white pt-36 pb-32 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="mb-12 text-center">
            <h4 className="text-4xl font-bold font-sans">Blog</h4>
            <p className="text-gray-400 dark:text-gray-600 font-sans mt-3">Artikel terbaru seputar desain & pengembangan.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12 lg:px-20">
          {blogData.map((item) => (
            <Link key={item.id} to={item.link} className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <img src={item.gambar} alt={item.judul} className="absolute inset-0 h-full w-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
              </div>

              <div className="absolute top-0 inset-x-0 z-10 p-4 sm:p-6">
                <div className="flex items-center">
                  <img src={item.avatar} alt={item.author} className="w-11 h-11 rounded-full border-2 border-white" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-white">{item.author}</h4>
                    <p className="text-xs text-white/80">{item.date}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-white/80 transition">{item.judul}</h3>
                <p className="mt-2 text-white/80 line-clamp-2">{item.desk}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
