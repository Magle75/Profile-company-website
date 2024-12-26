"use client"; 
import React, { useState, useEffect } from "react";

// Daftar testimonial yang berisi konten dan foto
const testimonialList = [
  {
    content:
      "Trios excels in conceptual thinking. They break down major problems into smaller, manageable parts and combine them into a well-functioning whole. The solutions are surprising and always well thought out. Ideas and concepts are discussed internally with multiple disciplines before they are presented to the customer. During the development of transport solutions, extensive calculations and simulations are carried out. This process gives a lot of confidence in the final results.",
  },
  {
    photo: "./slider-img.jpg", 
  },
];

const Section4 = () => {
  const [index, setIndex] = useState(0); // State untuk menyimpan indeks testimonial saat ini
  const [fade, setFade] = useState(false); // State untuk mengontrol efek fade

  // Mengambil konten dan foto berdasarkan indeks saat ini
  const currentContent = testimonialList[index * 2]?.content; 
  const currentPhoto = testimonialList[index * 2 + 1]?.photo; 

  // Fungsi untuk mengontrol navigasi testimonial
  const handleControl = (type) => {
    setFade(true); // Memulai efek fade
    setTimeout(() => {
      // Mengubah indeks berdasarkan kontrol yang dipilih
      if (type === "prev") {
        setIndex(index <= 0 ? testimonialList.length / 2 - 1 : index - 1);
      } else if (type === "next") {
        setIndex(index >= testimonialList.length / 2 - 1 ? 0 : index + 1);
      }
      setFade(false); // Mengakhiri efek fade
    }, 300); // Durasi efek fade
  };

  // Mengatur fade ke false saat indeks berubah
  useEffect(() => {
    setFade(false); 
  }, [index]);

  return (
    <section className="ezy__testimonial19 light py-14 md:py-24 bg-white dark:bg-[#dee7f4] text-zinc-900 dark:text-white relative z-[1]">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <div
              className={`shadow-xl bg-[#2b3467] rounded-xl relative py-14 px-9 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Menampilkan konten testimonial */}
              <p className="mb-6 opacity-80">"{currentContent}"</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* Menampilkan foto testimonial */}
            <img
              src={currentPhoto}
              alt="Testimonial"
              className={`rounded-xl transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;