import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import AOS from "aos";
import "aos/dist/aos.css";

const qna = [
  {
    q: ["bisa, bisakah", "iya,iye,ya", "boleh", "oke", "siap"],
    a: "Baik, Anda bisa bertanya mengenai portofolio, pengalaman, atau kontak saya.",
  },
  {
    q: ["engga,ga,nggak", "tidak", "belum,belom,nanti"],
    a: "Baik, kalau begitu silakan hubungi saya kapan saja bila diperlukan.",
  },
  {
    q: ["Hai", "Halo", "siapa kamu", "nama lo siapa", "lu siapa", "nama kamu siapa", "siapa nama anda, kamu", "woy"],
    a: "Halo! Saya Akbar Rafa, senang berkenalan dengan Anda.",
  },
  {
    q: ["Dimana Anda, Lo, tinggal, rumah, kota"],
    a: "Saat ini saya tinggal di Kota Jakarta",
  },
  {
    q: ["Apa latar belakang pendidikan anda sebelumnya, SMK/SMA"],
    a: "pernah bersekolah di SMKN 59 Jakarta",
  },

  {
    q: ["Kamu, lu, ngapain", "kerjaan lo apa", "aktivitas lo", "role kamu, lo", "apa profesi anda saat ini"],
    a: "Saya adalah mahasiswa Desain dengan minat yang tinggi di bidang industri kreatif dalam menciptakan desain dan pengembangan anatarmuka.",
  },
  {
    q: ["keahlian kamu, kerjaan lo, jago, sepuh, Anda, kamu, Akbar"],
    a: "Saya memiliki keahlian dalam mengolah gambar digital menjadi satu kesatuan",
  },
  {
    q: ["Jasa apa saja yang anda tawarkan"],
    a: "Saya dapat membantu anda dalam membuat branding produk anda serta dapat memasarkannya melalui platform digital",
  },
  {
    q: ["Apa pengalaman kamu, anda, lo"],
    a: "Saya memiliki pengalaman dalam bidang konten digital, desain, dan entrepreneurship. Beberapa project saya mencakup pembuatan brand identity, ilustrasi digital.",
  },
  {
    q: ["Kamu pernah membuat apa saja"],
    a: "Anda dapat melihat hasil karya saya pada bagian Portfolio di website ini. Di sana saya menampilkan beberapa project desain, ilustrasi, dan konten yang pernah saya kerjakan.",
  },
  {
    q: ["Apakah kamu pernah memiliki klien sebelumnya?", "Apa kamu pernah memiliki project dengan klien sungguhan?", "Apa lo pernah punya klien nyata sebelumnya?"],
    a: "Ya, saya memiliki project nyata dengan klien sebelumnya, Bintang Klin adalah klien pertama saya. Anda? bisa menjadi kedua setelahnya",
  },
  {
    q: ["Coba saya lihat portfolio", "project", "karya lo apa", "project kamu"],
    a: "Anda dapat melihat portofolio saya di Portfolio.",
  },
  {
    q: ["Lo sekarang lagi open project?", "open project?", "Buka layanan jasa?"],
    a: "Untuk saat ini, Saya hanya membuka jasa pembuatan poster promosi saja",
  },
  {
    q: ["pengalaman kerja anda", "kerja di mana", "pernah kerja apa", "lu pengalaman kerja di mana aja", "udah pernah kerja di mana aje"],
    a: "Saya memiliki pengalaman dalam membuat identitas visual brand.",
  },
  {
    q: ["harga jasa", "biaya", "tarif", "berapa bayaran", "rate card", "berapa duit", "berapa ongkos"],
    a: "Untuk informasi mengenai harga jasa, silakan hubungi saya langsung melalui kontak yang tersedia di halaman Kontak. Dengan begitu saya bisa menyesuaikan kebutuhan Anda ☺.",
  },
];

const fuse = new Fuse(qna, {
  keys: ["q"],
  threshold: 0.3,
});

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Halo! 👋 Selamat datang di portfolio saya. Ada yang bisa saya bantu?" }]);
  const [input, setInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const result = fuse.search(input);
    let reply = "Maaf, saya belum mengerti pertanyaan Anda.";

    if (result.length > 0) {
      reply = result[0].item.a;
    }

    setMessages((prev) => [...prev, userMsg, { sender: "bot", text: reply }]);
    setInput("");
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const clientsSection = document.querySelector("#clients");
    if (!clientsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowChatbot(true);
          } else {
            setShowChatbot(false);
            setIsOpen(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(clientsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showChatbot && (
        <div className="fixed bottom-32 right-4 z-50" data-aos="fade-up" data-aos-duration="1000">
          {/* Floating Btn */}
          {!isOpen && (
            <button onClick={() => setIsOpen(true)} className="bg-white text-blue-950 hover:text-white rounded-full w-18 h-18 shadow-lg flex items-center justify-center hover:bg-gray-600" data-aos="zoom-in">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path>
              </svg>
            </button>
          )}

          {/* Chat  */}
          {isOpen && (
            <div className="bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-xl flex flex-col" data-aos="fade-up" data-aos-duration="1000">
              <div className="flex justify-between items-center bg-gray-600 text-white p-3 rounded-t-lg">
                <span>Chatbot</span>
                <button onClick={() => setIsOpen(false)} className="text-xl font-bold">
                  ×
                </button>
              </div>

              <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`inline-block px-3 py-2 rounded-lg max-w-[80%] break-words
                      ${msg.sender === "bot" ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "bg-black/80 text-gray-300"}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 flex border-t border-gray-200 dark:border-gray-700">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 border rounded-l-lg px-3 py-2 
                  bg-black text-gray-400 
                  dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Tulis pesan Anda di sini "
                />
                <button onClick={handleSend} className="ml-2 bg-black text-white p-3 rounded-full hover:bg-gray-700 dark:bg-gray-400 dark:hover:bg-gray-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
