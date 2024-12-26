"use client"; // Menandakan bahwa ini adalah komponen yang menggunakan client-side rendering
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Mengimpor GSAP untuk animasi

const Home = () => {
  // Daftar pekerjaan yang tersedia
  const jobs = [
    {
      title: "Toolmaker with CNC experience",
      description: "Do you have an eye for detail, problem solving skills...",
      requirements: ["Need", "Full-Time", "MBO"],
    },
    {
      title: "Office environment cleaner",
      description:
        "Will you keep our pleasant working environment clean? Then you`ll never work alone! This job is for you",
      requirements: ["Need", "18/24 hours a month", "No training required"],
    },
  ];

  const cardRefs = useRef([]); // Referensi untuk menyimpan elemen kartu pekerjaan

  // Fungsi untuk menangani efek saat mouse memasuki kartu
  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      backgroundColor: "#e0e0e0", // Mengubah warna latar belakang saat mouse masuk
      duration: 0.3, // Durasi animasi
      y: -10, // Menggeser kartu ke atas
      ease: "power1.out", // Jenis easing untuk animasi
    });
  };

  // Fungsi untuk menangani efek saat mouse meninggalkan kartu
  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      backgroundColor: "#ffffff", // Mengembalikan warna latar belakang saat mouse keluar
      duration: 0.3, // Durasi animasi
      y: 0, // Mengembalikan posisi kartu
      ease: "power1.out", // Jenis easing untuk animasi
    });
  };

  return (
    <section className="bg-[#dee7f4] pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Vacancies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <div
              key={job.title} // Kunci unik untuk setiap kartu
              ref={(el) => (cardRefs.current[index] = el)} // Menyimpan referensi untuk elemen kartu
              className="bg-white shadow-md rounded-lg px-5 py-6 cursor-pointer" // Gaya untuk kartu
              onMouseEnter={() => handleMouseEnter(index)} // Menangani mouse enter
              onMouseLeave={() => handleMouseLeave(index)} // Menangani mouse leave
            >
              <h2 className="text-lg font-semibold text-[#2b3467]">
                {job.title}
              </h2>
              <p className="text-[#7c7f8d]">{job.description}</p>
              <ul>
                {job.requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="text-sm text-gray-600 list-disc ml-4" // Gaya untuk item daftar
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
