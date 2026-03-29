"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NewApplyNow } from "./apply";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-yellow-400 border-b border-[#ff0000] shadow-lg">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            {/* Logo */}
            <div className="relative w-10 h-10 sm:w-14 sm:h-14">
              <Image
                src="/icon.svg"
                alt="KIITech Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* College Name */}
            <div className="leading-tight">
              <p className="text-[10px] sm:text-xs md:text-sm font-black text-[#000080]">
                KIITech - Dr. A.P.J. Abdul Kalam
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm font-black text-[#000080]">
                Institute of Innovation and Technology
              </p>
            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
              <Link href="/" className="text-black hover:text-white font-bold transition">
                Home
              </Link>

              {/* PROGRAMS */}
              <div className="relative group">
                <button className="text-black hover:text-white font-bold flex items-center gap-1 transition">
                  Programs
                  <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-yellow-400 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-black/10">
                  {[
                    { href: "/programs/bca", label: "BCA" },
                    { href: "/programs/diploma", label: "Diploma" },
                    { href: "/programs/bba", label: "BBA" },
                    { href: "/programs/pgdm", label: "PGDM" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 hover:bg-black/10 text-sm font-medium transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {[
                { href: "/about", label: "About" },
                { href: "/admissions", label: "Admissions" },
                { href: "/placements", label: "Placements" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-white font-bold transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <NewApplyNow className="hidden sm:flex" />

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/10 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400 border-t border-black/10 shadow-lg px-4 sm:px-6 py-6 flex flex-col space-y-4">
          <Link
            href="/"
            className="block text-black font-bold py-2 border-b border-black/5"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* PROGRAMS MOBILE */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown("programs")}
              className="w-full flex justify-between items-center text-black font-bold py-2 border-b border-black/5"
            >
              Programs
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === "programs" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "programs" && (
              <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-black/20 pl-4 py-2 animate-in slide-in-from-left-2">
                {[
                  { href: "/programs/bca", label: "BCA" },
                  { href: "/programs/diploma", label: "Diploma" },
                  { href: "/programs/bba", label: "BBA" },
                  { href: "/programs/pgdm", label: "PGDM" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-black font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: "/about", label: "About" },
            { href: "/admissions", label: "Admissions" },
            { href: "/placements", label: "Placements" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-black font-bold py-2 border-b border-black/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <div className="pt-4 flex sm:hidden">
            <NewApplyNow className="w-full" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
