import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-primary text-sm font-bold">K</div>
              <h3 className="font-bold text-lg">KIITECH</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology - Excellence in Technical Education
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm mb-4">PROGRAMS</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/programs/bca" className="hover:text-accent transition-colors">
                  BCA Degree
                </Link>
              </li>
              <li>
                <Link href="/programs/diploma" className="hover:text-accent transition-colors">
                  Diploma Programs
                </Link>
              </li>
              <li>
                <Link href="/programs/bba" className="hover:text-accent transition-colors">
                  BBA Program
                </Link>
              </li>
              <li>
                <Link href="/programs/pgdm" className="hover:text-accent transition-colors">
                  PGDM
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-accent transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-accent transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">CONTACT US</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Campus Address, City, Country</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@kiitech.edu" className="hover:text-accent transition-colors">
                  info@kiitech.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              &copy; {currentYear} KIITECH - Dr. A.P.J. Abdul Kalam Institute. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-75">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
