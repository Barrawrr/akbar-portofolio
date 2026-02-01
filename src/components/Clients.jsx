import React from "react";

const Clients = () => {
  return (
    <section id="clients" className="min-h-[400px] pt-36 pb-32 bg-blue-950 ">
      <div className="max-w-7xl mx-auto ">
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a href="https://www.smkn59jkt.sch.id/" target="_blank" rel="noopener noreferrer" className="mx-4 max-w-[120px]  lg:mx-6 xl:mx-8">
              <img src={`${import.meta.env.BASE_URL}assets/59logo.png`} alt="59logo" className="w-full object-contain" />
            </a>
            <a href="https://www.facebook.com/bintang.klin" target="_blank" rel="noopener noreferrer" className="mx-4 max-w-[120px]  py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src={`${import.meta.env.BASE_URL}assets/bintangklinlogo.png`} alt="BinKlin" />
            </a>
            <a
              href="https://www.instagram.com/cv.multikaryaindonesia/?hl=id"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 max-w-[120px]  py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={`${import.meta.env.BASE_URL}assets/mkilogo.png`} alt="mkilogo" />
            </a>
            <a
              href="https://www.instagram.com/pelatihan.vokasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 max-w-[120px]  py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={`${import.meta.env.BASE_URL}assets/kemnakerlogo.png`} alt="kemnakerlogo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
