"use client"; 
import React, { useRef, useEffect } from "react";
import gsap from "gsap"; 

const Section6 = () => {
  const numberRefs = useRef([]); // Referensi untuk menyimpan elemen angka
  const targetNumbers = [30, 50, 16]; // Target angka yang akan ditampilkan
  const sectionRef = useRef(null); // Referensi untuk elemen section

  useEffect(() => {
    // Membuat observer untuk mendeteksi saat section muncul di viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jika section terlihat, animasikan angka
          numberRefs.current.forEach((ref, index) => {
            const targetNumber = targetNumbers[index];
            gsap.to(ref, {
              innerText: targetNumber,
              duration: 2, // Durasi animasi
              snap: { innerText: 1 }, // Menyusun angka ke bilangan bulat
              ease: "power1.out", // Jenis easing untuk animasi
              onUpdate: () => {
                ref.innerText = Math.floor(ref.innerText); // Memperbarui teks saat animasi berlangsung
              },
            });
          });

          observer.unobserve(entry.target); // Menghentikan pengamatan setelah animasi
        }
      });
    });

    // Mengamati section jika ada
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Menghapus observer saat komponen di-unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Menetapkan referensi ke elemen section
      className="ezy__header25 light pt-12 bg-white dark:bg-[#dee7f4] relative overflow-hidden z-[1]"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center lg:text-start items-center">
          <div className="col-span-12 lg:col-span-6 py-12 lg:col-start-7">

            <h1 className="text-2xl font-bold leading-[1.1] text-[#2b3467] md:text-[62px] mb-2">
              Reliability at Trios: facts that speak
            </h1>

            <p className="text-[22px] text-[#7c7f8d] leading-snug opacity-80 my-6">
              We focus on trust, innovation and craftsmanship. We'd love to tell
              you about that, but the facts speak for themselves.
            </p>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white p-4 rounded-lg">
                  <h2
                    className="text-4xl font-bold text-[#2b3467]"
                    ref={(el) => (numberRefs.current[0] = el)} // Menyimpan referensi untuk angka pertama
                  >
                    0
                  </h2>
                  <h3 className="text-[#2b3467] text-xl">
                    Years of experience
                    <p className="text-sm text-[#7c7f8d]">
                      in precision engineering solutions.
                    </p>
                  </h3>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h2
                    className="text-4xl font-bold text-[#2b3467]"
                    ref={(el) => (numberRefs.current[1] = el)} // Menyimpan referensi untuk angka kedua
                  >
                    0
                  </h2>
                  <h3 className="text-[#2b3467] text-xl">
                    Projects
                    <p className="text-sm text-[#7c7f8d]">in various sectors</p>
                  </h3>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h2
                    className="text-4xl font-bold text-[#2b3467]"
                    ref={(el) => (numberRefs.current[2] = el)} // Menyimpan referensi untuk angka ketiga
                  >
                    0
                  </h2>
                  <h3 className="text-[#2b3467] text-xl">
                    Young and experienced
                    <p className="text-sm text-[#7c7f8d]">professionals.</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
