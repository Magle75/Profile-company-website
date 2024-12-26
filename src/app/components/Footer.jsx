import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

import PropTypes from "prop-types";

const quickLinks = [
  { value: "Home", href: "#!" },
  { value: "Product development", href: "#!" },
  { value: "Mechanical engineering", href: "#!" },
  { value: "Vacancles", href: "#!" },
  { value: "Careers", href: "#!" },
  { value: "About Trios", href: "#!" },
  { value: "Contact", href: "#!" },
];

const socialMedia = [
  {
    value: "Facebook",
    href: "#!",
    icon: <FaFacebook className="mr-2 text-gray-700" />,
  },
  {
    value: "LinkedIn",
    href: "#!",
    icon: <FaLinkedin className="mr-2 text-gray-700" />,
  },
];
// Komponen untuk menampilkan quicklink
const QuickLinks = ({ qLink }) => (
  <li className="mb-4">
    <a
      href={qLink.href}
      className="text-black p-2 border-2 rounded-lg bg-[#dee7f4] hover:bg-gray-300 transition duration-300"
    >
      {qLink.value}
    </a>
  </li>
);

QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired, // Memastikan qLink adalah objek yang diperlukan
};

// Komponen untuk menampilkan tautan media sosial
const SocialMedia = ({ media }) => (
  <li className="flex items-center">
    {media.icon}
    <a
      href={media.href}
      className="text-gray-700 hover:text-blue-600 transition duration-300"
    >
      {media.value}
    </a>
  </li>
);

// Memastikan media adalah objek yang diperlukan
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

// Komponen utama Footer
const Footer = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-around text-center lg:text-left">
          <div className="lg:w-1/4">
            <h1 className="mt-3 mb-2 text-4xl font-bold">
              Ask us the impossible.{" "}
              <span className="text-red-500">Give us a problem</span> — we will
              find the solution!
            </h1>
            <div className="flex items-center mt-3">
              <button className="border rounded-lg text-white bg-[#2b3467] hover:bg-red-400 p-4 ">
                Get in touch
              </button>
            </div>
          </div>

          <div className="lg:w-1/4 mt-4 lg:mt-4">
            <p className="font-bold text-uppercase mb-2">Quick Links</p>
            <ul className="flex flex-col">
              {quickLinks.map((qLink, i) => (
                <QuickLinks qLink={qLink} key={i} />
              ))}
            </ul>
          </div>

          <div className="lg:w-1/4 mt-4 lg:mt-0">
            <h6 className="font-bold text-uppercase mb-3">Contact</h6>
            <p>
              Nijverheidsweg 19  NL-7161 AA Neede +31 (0) 545 — 280 130
              info@trios.nl
            </p>
            <ul className="flex flex-col">
              {socialMedia.map((media, i) => (
                <SocialMedia media={media} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
