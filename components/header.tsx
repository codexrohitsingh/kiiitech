'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl hover:text-primary/80 transition-colors">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">K</div>
            <span>KIITECH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                Programs
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link href="/programs/bca" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors text-sm">
                  Bachelor of Computer Applications
                </Link>
                <Link href="/programs/diploma" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors text-sm">
                  Diploma Programs
                </Link>
                <Link href="/programs/bba" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors text-sm">
                  Bachelor of Business Admin
                </Link>
                <Link href="/programs/pgdm" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors text-sm">
                  PGDM - Management
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/admissions" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Admissions
            </Link>
            <Link href="/faculty" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Faculty
            </Link>
            <Link href="/placements" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Placements
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" size="sm" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-border pt-4">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors py-2">
              Home
            </Link>
            <button
              onClick={() => toggleDropdown('programs')}
              className="w-full text-left text-foreground hover:text-primary transition-colors py-2 flex items-center justify-between"
            >
              Programs
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'programs' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'programs' && (
              <div className="pl-4 space-y-2 border-l border-muted">
                <Link href="/programs/bca" className="block text-foreground hover:text-primary transition-colors text-sm py-1">
                  BCA
                </Link>
                <Link href="/programs/diploma" className="block text-foreground hover:text-primary transition-colors text-sm py-1">
                  Diploma
                </Link>
                <Link href="/programs/bba" className="block text-foreground hover:text-primary transition-colors text-sm py-1">
                  BBA
                </Link>
                <Link href="/programs/pgdm" className="block text-foreground hover:text-primary transition-colors text-sm py-1">
                  PGDM
                </Link>
              </div>
            )}
            <Link href="/about" className="block text-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="/admissions" className="block text-foreground hover:text-primary transition-colors py-2">
              Admissions
            </Link>
            <Link href="/faculty" className="block text-foreground hover:text-primary transition-colors py-2">
              Faculty
            </Link>
            <Link href="/placements" className="block text-foreground hover:text-primary transition-colors py-2">
              Placements
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Button variant="default" size="sm" asChild className="w-full">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
