import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeroHeader29 = () => {
  return (
    <section className="ezy__header29 light py-32 md:py-52 text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.jpg)",

          filter: "brightness(0.5)", // Atur kecerahan di sini

          zIndex: 0, // Pastikan gambar berada di belakang konten
        }}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        {" "}
        {/* Tambahkan z-10 untuk menempatkan konten di atas gambar */}
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
       
      </div>
    </section>
  );
};

export default HeroHeader29;
