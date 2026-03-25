'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-600 border-b border-[#8C4F01] shadow-lg">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 text-black font-extrabold text-2xl"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white text-lg font-bold">
              K
            </div>
            <span>KIITECH</span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-8">
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-black hover:text-white font-semibold"
              >
                Home
              </Link>

              {/* PROGRAMS */}
              <div className="relative group">
                <button className="text-black hover:text-white font-semibold flex items-center gap-1">
                  Programs
                  <ChevronDown className="w-5 h-5" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
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
                className="text-black hover:text-white font-semibold"
              >
                About
              </Link>
              <Link
                href="/admissions"
                className="text-black hover:text-white font-semibold"
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
                className="text-black hover:text-white font-semibold"
              >
                Placements
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-white font-semibold"
              >
                Contact
              </Link>
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex">
              <Button
                className="px-6 py-2 text-sm font-semibold rounded-md text-white
                bg-gradient-to-r from-[#B30000] via-[#E3A008] to-[#B30000]
                bg-[length:200%_200%]
                animate-[goldRedBlink_1.5s_infinite]
                hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/admissions/apply">Apply Now</Link>
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
        <div className="md:hidden bg-yellow-600 border-t border-[#8C4F01] shadow-lg px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* PROGRAMS MOBILE */}
          <div>
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
              <div className="mt-2 ml-3 space-y-2 border-l border-black/30 pl-3">
                <Link href="/programs/bca" onClick={() => setIsOpen(false)}>
                  BCA
                </Link>
                <Link href="/programs/diploma" onClick={() => setIsOpen(false)}>
                  Diploma
                </Link>
                <Link href="/programs/bba" onClick={() => setIsOpen(false)}>
                  BBA
                </Link>
                <Link href="/programs/pgdm" onClick={() => setIsOpen(false)}>
                  PGDM
                </Link>
              </div>
            )}
          </div>

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
            className="w-full mt-2 text-white
            bg-gradient-to-r from-[#B30000] via-[#E3A008] to-[#B30000]
            animate-[goldRedBlink_1.5s_infinite]"
            asChild
          >
            <Link href="/admissions/apply" onClick={() => setIsOpen(false)}>
              Apply Now
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}