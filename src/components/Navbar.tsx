"use client";
import ThemeToggle from "./ThemeToggle";
import { FaHome } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { ImMagicWand } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-custom-primary text-custom-primary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* left logo */}
        <div className="flex items-center gap-3">
          <div>
            <Image src="/kr.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="text-sm flex justify-center items-center gap-1">
            <span className="h-4 w-4 rounded-3xl bg-radial from-blue-200 via-purple-200 to-pink-300"></span>
            <div className="font-semibold">benevolentminibeast</div>
            <button className="text-sm text-custom-primary">
              <FaAngleDown />
            </button>
          </div>
        </div>

        {/* center navbar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3w hidden lg:block">
          <nav className="bg-custom-secondary rounded-xl px-3 py-1 flex gap-4 items-center">
            {/* tiny icons placeholders */}
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <FaHome />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <AiFillPicture />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <FaVideo />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <ImMagicWand />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <FaPen />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <GiMeditation />
            </button>
            <button className="p-3 rounded-xl hover:bg-custom-tertiary transition-colors duration-200">
              <FaFile />
            </button>
          </nav>
        </div>

        {/* right buttons */}
        <div className="flex items-center gap-4">
          <button className="button-bg text-sm hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-3xl hover:button-bg-hover transition-colors duration-200">
            <span>
              {" "}
              <AiFillPicture />
            </span>
            Gallery
          </button>
          <button className="button-bg text-sm hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-3xl hover:button-bg-hover transition-colors duration-200">
            <span>
              <BiSupport />
            </span>
            Support
          </button>
          <button className="button-bg text-sm hidden md:inline-flex items-center gap-2 px-2 py-2 rounded-xl hover:button-bg-hover transition-colors duration-200">
            <FaBell />
          </button>
          <ThemeToggle />
          <span className="h-5 w-5 rounded-3xl bg-radial from-blue-200 via-purple-200 to-pink-300"></span>
        </div>
      </div>
    </header>
  );
}
