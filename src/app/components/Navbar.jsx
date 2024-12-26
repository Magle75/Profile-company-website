"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { gsap } from "gsap";

const Navbar = () => {
  // State untuk mengelola status menu dan scroll
  const [isOpen, setIsOpen] = useState(false); // Menyimpan status apakah menu terbuka atau tidak
  const [isScroll, setScroll] = useState(false); // Menyimpan status apakah halaman telah discroll
  const [dropdownOpen, setDropdownOpen] = useState(false); // Menyimpan status dropdown terbuka atau tidak
  const menuRef = useRef(null); // Referensi untuk elemen menu

  // Fungsi untuk menangani scroll
  const handleScroll = () => {
    const scrolled = window.scrollY; // Mendapatkan posisi scroll vertikal
    setScroll(scrolled > 200); // Mengubah status isScroll jika scroll lebih dari 200px
  };

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Mengubah status isOpen
  };

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Mengubah status dropdownOpen
  };

  // useEffect untuk menambahkan event listener scroll
  useEffect(() => {
    handleScroll(); // Memanggil handleScroll saat komponen pertama kali dirender
    window.addEventListener("scroll", handleScroll); // Menambahkan event listener untuk scroll
    return () => window.removeEventListener("scroll", handleScroll); // Membersihkan event listener saat komponen di-unmount
  }, []);

  // useEffect untuk animasi saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      const links = menuRef.current.children; // Mengambil elemen anak dari menu
      gsap.fromTo(
        links,
        { opacity: 0, y: 1 }, // Status awal animasi
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2, // Menambahkan efek stagger pada animasi
        }
      );
    }
  }, [isOpen]);

  // Daftar tautan navigasi
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Product development" },
    { href: "/services", label: "Mechanical engineering" },
    { href: "/about-trios", label: "About Trios" },
    { href: "/vacancies", label: "Vacancies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ease-linear ${
        isScroll ? "bg-white py-1" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="MyLogo"
            width={150}
            height={50}
            className="h-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg border-2 rounded-lg p-1 bg-[#dee7f4] hover:bg-gray-300 transition duration-300 ${
                isScroll ? "text-black" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <Image
              src="/english.svg" 
              alt="Image 1"
              width={40}
              height={40}
              className="cursor-pointer"
              onMouseEnter={toggleDropdown} // Menampilkan dropdown saat mouse masuk
              onMouseLeave={toggleDropdown} // Menyembunyikan dropdown saat mouse keluar
            />
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2">
                <Image
                  src="/netherland.svg" 
                  alt="Image 2"
                  width={100}
                  height={100}
                  className="mt-2"
                />
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden rounded-lg bg-[#dee7f4] p-1">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-s late-400" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-slate-400" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <div ref={menuRef} className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg border-2 border-slate-400 rounded-lg hover:bg-gray-300 transition duration-300 ${
                  isOpen ? "text-black" : isScroll ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-around mt-4">
              <Image
                src="/english.svg" 
                alt="Image 1"
                width={50}
                height={50}
                className="cursor-pointer"
              />
              <Image
                src="/netherland.svg"
                alt="Image 2"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;