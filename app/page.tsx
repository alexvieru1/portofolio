import NavBar from "@/components/NavBar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AtSymbolIcon, DevicePhoneMobileIcon, HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <NavBar/>
      <div className="h-[3000px]"></div>
    </div>
    
  );
}
