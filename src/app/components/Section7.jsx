import React from "react";

const Section7 = () => {
  return (
    <div className="bg-[#dee7f4]">
      <section className="container mx-auto py-16 ">
        <h2 className="text-2xl text-[#2b3467] font-bold text-center mb-8">
          Our people are our driving force. We value experienced professionals
          and young talent. We are happy to invest in that. Also working for a
          company where your passion for the profession is central and seen? We
          are always looking for more talent.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="./S72.jpg" 
              alt="Image 1"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-4 text-[#7c7f8d]">
              24 vacation days, 12 ATV days and a profit sharing.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./S7.jpg" 
              alt="Image 2"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-4 text-[#7c7f8d]">
              Informal, pleasant working atmosphere in a small, proud and
              enthusiastic team.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./S73.jpg" 
              alt="Image 3"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-4 text-[#7c7f8d]">
              Opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section7;