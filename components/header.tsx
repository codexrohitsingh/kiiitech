"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 border-b border-[#ff0000] shadow-lg">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
  <div className="flex items-center justify-between">

    {/* LOGO + NAME */}
    <Link href="/" className="flex items-center gap-3">

      {/* Logo */}
      <Image
        src="/icon.svg"
        alt="KIITech Logo"
        width={50}
        height={50}
        className="object-contain"
      />

      {/* College Name */}
      <div className="leading-tight">
        <p className="text-l font-black text-[#000080]">
         KIITech - Dr. A.P.J. Abdul Kalam
        </p>
        <p className="text-l font-black text-[#000080]">
          Institute of Innovation and Technology
        </p>
      </div>

    </Link>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-8">
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-black hover:text-white font-bold"
              >
                Home
              </Link>

              {/* PROGRAMS */}
              <div className="relative group">
                <button className="text-black hover:text-white font-bold flex items-center gap-1">
                  Programs
                  <ChevronDown className="w-5 h-5" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-yellow-400 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link
                    href="/programs/bca"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    BCA
                  </Link>
                  <Link
                    href="/programs/diploma"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Diploma
                  </Link>
                  <Link
                    href="/programs/bba"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    BBA
                  </Link>
                  <Link
                    href="/programs/pgdm"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    PGDM
                  </Link>
                </div>
              </div>

              <Link
                href="/about"
                className="text-black hover:text-white font-bold"
              >
                About
              </Link>
              <Link
                href="/admissions"
                className="text-black hover:text-white font-bold"
              >
                Admissions
              </Link>
              {/* <Link
                href="/faculty"
                className="text-black hover:text-white font-semibold"
              >
                Faculty
              </Link> */}
              <Link
                href="/placements"
                className="text-black hover:text-white font-bold"
              >
                Placements
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-white font-bold"
              >
                Contact
              </Link>
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex">
              <Button
                className="
      relative px-7 py-3 text-sm font-bold text-white rounded-xl
      bg-gradient-to-r from-red-600 via-yellow-500 to-red-600
      bg-[length:200%_200%] animate-[gradientMove_3s_linear_infinite]

      shadow-lg shadow-red-500/30
      hover:shadow-yellow-400/50
      hover:scale-110 active:scale-95

      transition-all duration-300 overflow-hidden
    "
                asChild
              >
                <Link
                  href="/admissions/apply"
                  className="relative z-10 flex items-center gap-2"
                >
                  Apply Now
                  {/* Shine effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-md rotate-12 animate-shine"></span>
                  </span>
                </Link>
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden ml-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-7 h-7 text-black" />
              ) : (
                <Menu className="w-7 h-7 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400 border-t border-[#ff0000] shadow-lg px-6 py-4 flex flex-col space-y-4">
          {/* HOME */}
          <Link
            href="/"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* PROGRAMS MOBILE */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown("programs")}
              className="w-full flex justify-between items-center text-black font-semibold"
            >
              Programs
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openDropdown === "programs" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "programs" && (
              <div className="mt-2 ml-3 flex flex-col space-y-2 border-l border-black/30 pl-3">
                <Link
                  href="/programs/bca"
                  className="block text-black"
                  onClick={() => setIsOpen(false)}
                >
                  BCA
                </Link>

                <Link
                  href="/programs/diploma"
                  className="block text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Diploma
                </Link>

                <Link
                  href="/programs/bba"
                  className="block text-black"
                  onClick={() => setIsOpen(false)}
                >
                  BBA
                </Link>

                <Link
                  href="/programs/pgdm"
                  className="block text-black"
                  onClick={() => setIsOpen(false)}
                >
                  PGDM
                </Link>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link
            href="/about"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/admissions"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </Link>

          <Link
            href="/faculty"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Faculty
          </Link>

          <Link
            href="/placements"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Placements
          </Link>

          <Link
            href="/contact"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* MOBILE CTA */}
    
              <Button
                className="
      relative px-7 py-3 text-sm font-bold text-white rounded-xl
      bg-gradient-to-r from-red-600 via-yellow-500 to-red-600
      bg-[length:200%_200%] animate-[gradientMove_3s_linear_infinite]

      shadow-lg shadow-red-500/30
      hover:shadow-yellow-400/50
      hover:scale-110 active:scale-95

      transition-all duration-300 overflow-hidden
    "
                asChild
              >
                <Link
                  href="/admissions/apply"
                  className="relative z-10 flex items-center gap-2"
                >
                  Apply Now
                  {/* Shine effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-md rotate-12 animate-shine"></span>
                  </span>
                </Link>
              </Button>
        </div>
      )}
    </header>
  );
}
