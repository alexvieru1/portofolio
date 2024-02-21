"use client";
import { Hero } from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="select-none">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <div className="h-[200px]"></div>
    </div>
  );
}
