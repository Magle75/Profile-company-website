import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroHeader29 from "./components/Hero";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import CardGrid from "./components/Section2";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Testimonial21 from "./components/Section8";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mb-4">
    <Navbar/>
    <HeroHeader29/>
    <Section1/>
    <Section3/>
    <CardGrid/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Footer/>
  

    </div>
  );
}
