"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section3 = () => {
  const boxesRef = useRef([]); // Referensi untuk menyimpan elemen kotak

  // Fungsi untuk menangani efek saat mouse memasuki kotak
  const handleMouseEnter = (index) => {
    const title = boxesRef.current[index].querySelector(".title");
    const description = boxesRef.current[index].querySelector(".description");

    // Animasi judul dan deskripsi saat mouse masuk
    gsap.to(title, { y: -20, duration: 0.5, ease: "power2.out" });
    gsap.to(description, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    });
  };

  // Fungsi untuk menangani efek saat mouse meninggalkan kotak
  const handleMouseLeave = (index) => {
    const title = boxesRef.current[index].querySelector(".title");
    const description = boxesRef.current[index].querySelector(".description");

    // Animasi judul dan deskripsi saat mouse keluar
    gsap.to(title, { y: 0, duration: 0.5, ease: "power2.out" });
    gsap.to(description, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="ezy__portfolio10 light py-14 md:py-24 bg-white dark:bg-[#dee7f4] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-content-center">
          <div className="max-w-3xl text-center mx-auto">
            {/* Deskripsi bagian */}
            <p className="text-lg font-bold text-[#7c7f8d] leading-8 mb-2">
              We are your product developer, process developer and machine
              builder. We are the team that stands by you every step of the way
              and helps. With prototypes, endurance tests, CE and patent
              support, FEM calculations and project management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto">
          {/* Data untuk setiap kotak */}
          {[
            {
              title: "Prototype +",
              description:
                "We build prototypes and zero series in our workshop. Here we test whether the design does what it should do. High focus, speed and efficiency.",
              imageUrl: "./card.jpg",
            },
            {
              title: "FEM Calculation +",
              description:
                "Build immediately? No. With FEM calculations, we foresee problems and see if we meet the conditions.",
              imageUrl: "./card2.jpg",
              isDark: true,
            },
            {
              title: "Duration test +",
              description:
                "Prototypen, nulseries en onderdelen van machines controleren we zorgvuldig op maatvoering, continuïteit en slijtage.",
              imageUrl: "./card3.jpg",
            },
            {
              title: "Project Management +",
              description:
                "We like to work together intensively and aim for long-term relationships in every project. Good project management is part of that.",
              imageUrl: "./card4.jpg",
              isDark: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`col-span-3 ${
                index % 2 === 0 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
              ref={(el) => (boxesRef.current[index] = el)} // Menyimpan referensi elemen
              onMouseEnter={() => handleMouseEnter(index)} // Menangani mouse enter
              onMouseLeave={() => handleMouseLeave(index)} // Menangani mouse leave
            >
              <div
                className={`bg-[#2b3467] shadow-xl rounded-xl overflow-hidden h-full ${
                  item.isDark ? "bg-[#2b3467] text-white" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row h-full items-center">
                  <div className="h-full w-full md:w-1/2">
                    {/* Menampilkan gambar sebagai latar belakang */}
                    <div
                      className="bg-center bg-repeat bg-cover h-full min-h-[200px] md:min-h-[250px] object-cover"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                  </div>
                  <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 h-full">
                    {/* Menampilkan judul dan deskripsi */}
                    <h5 className="title font-medium text-xl capitalize mb-2">
                      {item.title}
                    </h5>
                    <p className="description opacity-0 transform translate-y-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
