import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icon.svg"
                alt="KIITECH Logo"
                className="w-20 h-20 object-contain"
              />
              <h3 className="font-bold text-lg">KIITech</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology -
              Excellence in Technical Education
            </p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919337736501"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>

              {/* Call */}
              <a
                href="tel:+919337736501"
                className="text-blue-500 hover:scale-110 transition"
              >
                <Phone className="w-6 h-6" />
              </a>

              {/* Mail */}
              <a
                href="mailto:office@kiitech.org"
                className="text-red-500 hover:scale-110 transition"
              >
                <Mail className="w-6 h-6" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/kiitech.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:scale-110 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/kiitech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:scale-110 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kiitech.org_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@KIITech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:scale-110 transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm mb-4">PROGRAMS</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link
                  href="/programs/bca"
                  className="hover:text-accent transition-colors"
                >
                  BCA Degree
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/diploma"
                  className="hover:text-accent transition-colors"
                >
                  Diploma Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/bba"
                  className="hover:text-accent transition-colors"
                >
                  BBA Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/pgdm"
                  className="hover:text-accent transition-colors"
                >
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
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="hover:text-accent transition-colors"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="hover:text-accent transition-colors"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-accent transition-colors"
                >
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
                <span>Majhgaon - 833214, West Singhbhum, Jharkhand, India</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+91 9337736501"
                  className="hover:text-accent transition-colors"
                >
                  +91 9337736501
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:office@kiitech.org"
                  className="hover:text-accent transition-colors"
                >
                  office@kiitech.org
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
              &copy; {currentYear} KIITech - Dr. A.P.J. Abdul Kalam Institute of
              Innovation and Technology. All rights reserved.
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
  );
}
export default Footer;
