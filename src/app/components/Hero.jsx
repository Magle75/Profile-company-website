import React from "react";

const HeroHeader29 = () => {
  return (
    <section className="ezy__header29 light py-32 md:py-52 text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.jpg)", // Mengatur gambar latar belakang
          filter: "brightness(0.5)", // Mengatur kecerahan gambar latar belakang
          zIndex: 0, // Menempatkan gambar di belakang konten lainnya
        }}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="md:max-w-5xl mx-auto flex justify-center items-center text-left">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-[62px] mb-2">
              <span className="text-red-400">Trios.</span> reliable solution for
              30 years
            </h1>

            <div className="sm:max-w-lg mx-auto flex justify-center"></div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500">
        {/* Ruang untuk konten tambahan jika diperlukan */}
      </div>
    </section>
  );
};

export default HeroHeader29;