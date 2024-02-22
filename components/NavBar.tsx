import React from "react";
import {
  AtSymbolIcon,
  HomeIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { FloatingNav } from "./ui/floating-navbar";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <HomeIcon className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <UserIcon className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <RectangleStackIcon className="h-4 w-4 text-white dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <AtSymbolIcon className="h-4 w-4 text-white dark:text-white" />
      ),
    },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;
