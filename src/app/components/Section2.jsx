import React from "react";

// Komponen Card untuk menampilkan gambar dan nama
const Card = ({ image, name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Menampilkan gambar dengan alt text yang sesuai */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* Menampilkan nama dengan gaya teks */}
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
};

// Komponen CardGrid untuk menampilkan kumpulan kartu dalam grid
const CardGrid = () => {
  // Array berisi data kartu (gambar dan nama)
  const cards = [
    { image: "/foto1.jpg", name: "Marc Ottenschot" },
    { image: "/foto2.jpg", name: "Hans Groothornte" },
    { image: "/foto3.jpg", name: "Marc Ottenschot" },
    { image: "/foto4.jpg", name: "Wessel Warmink" },
    { image: "/foto5.jpg", name: "Tom Denekamp" },
    { image: "/foto6.jpg", name: "Michel Lammers" },
    { image: "/foto7.jpg", name: "Sjoerd van der Velde" },
    { image: "/foto8.jpg", name: "Hefney de Haan" },
    { image: "/foto9.jpg", name: "Max Porskamp" },
    { image: "/foto10.jpg", name: "Dick Boerstoel" },
    { image: "/foto11.jpg", name: "Sil Screever" },
    { image: "/foto12.jpg", name: "Martijn klein Kranenbarg" },
    { image: "/foto13.jpg", name: "Mick Borgelink" },
    { image: "/foto14.jpg", name: "Rene Freriksen" },
    { image: "/foto15.jpg", name: "Ina Hulzink" },
    { image: "/foto16.jpg", name: "Wouter Bos" },
  ];

  return (
    <section className="bg-[#dee7f4]">  
      <div className="container mx-auto p-4">
        {/* Judul untuk bagian kartu */}
        <h1 className="text-center text-2xl font-bold mb-6">
          Our professionals. The driving force behind our solutions.
        </h1>
        {/* Grid untuk menampilkan kartu */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Menggunakan map untuk merender setiap kartu */}
          {cards.map((card, index) => (
            <Card key={index} image={card.image} name={card.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;