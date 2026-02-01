import Ikon1 from "../public/visual-identity.svg";
import Ikon2 from "../public/image-editing.svg";
import Ikon3 from "../public/front-end.svg";

import blog1 from "../public/assets/blog1.jpg";

export const skillKu = [
  {
    id: 1,
    category: "Desain",
    nama: "Visual Identity",
    gambar: Ikon1,
    desk: "Merancang elemen Identitas Visual sebuah brand meliputi logo, warna, tipografi ",
  },
  {
    id: 2,
    category: "Desain",
    nama: "Digital Image",
    gambar: Ikon2,
    desk: "Membuat sebuah gambar dengan prinsip dan elemen menggunakan efek. ",
  },
  {
    id: 3,
    category: "Coding",
    nama: "Front-End Development",
    gambar: Ikon3,
    desk: "Merancang sebuah sistem atau layanan web untuk menciptakan pengalaman yang memuaskan dan mudah  ",
  },
];

const experience = [
  {
    id: 1,
    year: "2025",
    place: "Ditjen Binalavotas",
    role: "Magang - Analisis Keuangan dan Pusat Data Informasi  ",
    description: "Melakukan validasi terhadap laporan operasi dan akrual perusahaan serta merancang storyboard konten media sosial",
    image: "/assets/experience3.jpg",
  },
  {
    id: 2,
    year: "2025",
    place: "CV Multi Karya Indonesia",
    role: "Magang - Asisten Operator Mesin Offset dan Digital",
    description: "Membantu mengoperasikan mesin cetak offset dan digital serta mempelajari software pengolah desain sebelum siap dicetak",
    image: "/assets/experience2.jpg",
  },
  {
    id: 3,
    year: "2023-2024",
    place: "Ekstrakurikuler Multimedia Club - SMKN 59 Jakarta",
    role: "Anggota Multimedia Club",
    description: "Menjadi anggota dari ekstrakurikuler multimedia club",
    image: "/assets/experience1.jpg",
  },
  // ... data lainnya
];

export default experience;

export const portfolioData = [
  {
    id: 1,
    img: "/assets/prev-1.jpg",
    link: "/portfolio/1",
    height: 730,
    title: "Project 1",
    category: "Desain",
  },
  {
    id: 2,
    img: "/assets/prev-2.webp",
    link: "/portfolio/2",
    height: 350,
    title: "Project 2",
    category: "Desain",
  },
  {
    id: 3,
    img: "/assets/prev-3.webp",
    link: "/portfolio/3",
    height: 750,
    title: "Project 3",
    category: "Desain",
  },
  {
    id: 4,
    img: "/assets/prev-4.webp",
    link: "/portfolio/4",
    height: 750,
    title: "Project 3",
    category: "Desain",
  },
  {
    id: 5,
    img: "/assets/prev-5.jpg",
    link: "/portfolio/5",
    height: 350,
    title: "Project 5",
    category: "Desain",
  },

  {
    id: 6,
    img: "/assets/prev-6.webp",
    link: "/portfolio/6",
    height: 350,
    title: "Project 7",
    category: "Desain",
  },

  {
    id: 7,
    img: "/assets/prev-7.jpg",
    link: "/portfolio/7",
    height: 750,
    title: "Project 9",
    category: "Desain",
  },
  {
    id: 8,
    img: "/assets/prev-8.webp",
    link: "/portfolio/8",
    height: 700,
    title: "Project 10",
    category: "Desain",
  },
  {
    id: 9,
    img: "/assets/prev-9.jpeg",
    link: "/portfolio/9",
    height: 750,
    title: "Project 11",
    category: "Desain",
  },
  {
    id: 10,
    img: "/assets/prev-10.jpeg",
    link: "/portfolio/10",
    width: 900,
    height: 330,
    title: "Project 12",
    category: "Desain",
  },

  {
    id: 11,
    img: "/assets/prev-11.jpeg",
    link: "/portfolio/11",
    height: 750,
    title: "Project 14",
    category: "Desain",
  },
  {
    id: 12,
    img: "/assets/prev-12.jpg",
    link: "/portfolio/12",
    height: 780,
    title: "Project 17",
    category: "Desain",
  },
  {
    id: 13,
    img: "/assets/prev-13.jpeg",
    link: "/portfolio/13",
    height: 750,
    title: "Project 17",
    category: "Desain",
  },
  {
    id: 14,
    img: "/assets/prev-14.webp",
    link: "/portfolio/14",
    height: 730,
    title: "Project 17",
    category: "Desain",
  },
];

export const portfolioImages = [
  {
    id: 1,
    img: "/assets/Desain5_1.jpg",
    title: "Poster Digital",
    height: 500,
  },
];

export const blogData = [
  {
    id: 1,
    gambar: blog1,
    judul: "Mengapa desain grafis penting di era digital saat ini?",
    desk: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit labore totam perspiciatis harum? Tempora, nihil modi!",
    link: "/blog",
    avatar: "/assets/profile.jpg",
    author: "Akbar Rafa",
    date: "Sep 09, 2025",
  },
];
