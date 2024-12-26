import React from "react";

// Komponen fungsional Section1
const Section1 = () => {
  return (
    <section className="light md:py-28 lg:p-44 bg-[#2b3467] text-white">
      <div className="container px-4">

        <div className="grid grid-cols-12 md:gap-8">
       
          <div className="col-span-12 lg:col-span-6">
            <div className="z-[1] flex justify-center items-center relative h-full w-full"></div>
          </div>
   
          <div className="col-span-12 lg:col-span-6">
            <p className="text-xl sm:text-lg leading-relaxed tracking-wide font-bold break-words mt-4 md:mt-12 opacity-75">
              For 30 years, our team has treated every project as if it were our
              own, with a great sense of responsibility. About the result, about
              your budget and your secrets. We realize what your company really
              needs and ensure that the solution stands like a stone.
            </p>
       
            <p className="text-xl sm:text-lg font-bold leading-relaxed tracking-wide break-words opacity-80 mt-4">
              We combine experience in various sectors and craftsmanship into
              customized solutions. In this, we go further than simply
              executing; we think along and always keep your interests in mind.
              That is where our strength lies. Trust in solutions that go beyond
              demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Section1;