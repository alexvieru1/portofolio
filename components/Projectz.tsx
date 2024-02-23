"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { simplifiedProjects } from "@/constants/simplifiedProjects";

const Projectz = () => {
  const projects = simplifiedProjects;
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default Projectz;
