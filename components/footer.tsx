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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12">
          {/* About */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/icon.svg"
                alt="KIITECH Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <h3 className="font-bold text-xl sm:text-lg">KIITech</h3>
            </div>
            <p className="text-sm opacity-90 mb-6 max-w-xs">
              Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology -
              Excellence in Technical Education
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-3">
              {[
                { href: "https://wa.me/919337736501", icon: FaWhatsapp, color: "text-green-500", label: "WhatsApp" },
                { href: "tel:+919337736501", icon: Phone, color: "text-blue-500", label: "Phone" },
                { href: "mailto:office@kiitech.org", icon: Mail, color: "text-red-500", label: "Email" },
                { href: "https://www.facebook.com/kiitech.org", icon: Facebook, color: "text-[#1877F2]", label: "Facebook" },
                { href: "https://www.linkedin.com/company/kiitech/", icon: Linkedin, color: "text-[#0A66C2]", label: "LinkedIn" },
                { href: "https://www.instagram.com/kiitech.org_/", icon: Instagram, color: "text-pink-500", label: "Instagram" },
                { href: "https://www.youtube.com/@KIITech", icon: Youtube, color: "text-[#FF0000]", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-125 transition-transform duration-200 p-1`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm mb-5 tracking-wider">PROGRAMS</h4>
            <ul className="space-y-3 text-sm opacity-90">
              {[
                { href: "/programs/bca", label: "BCA Degree" },
                { href: "/programs/diploma", label: "Diploma Programs" },
                { href: "/programs/bba", label: "BBA Program" },
                { href: "/programs/pgdm", label: "PGDM" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm mb-5 tracking-wider">LINKS</h4>
            <ul className="space-y-3 text-sm opacity-90">
              {[
                { href: "/about", label: "About Us" },
                { href: "/faculty", label: "Faculty" },
                { href: "/placements", label: "Placements" },
                { href: "/admissions", label: "Admissions" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm mb-5 tracking-wider">CONTACT US</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <MapPin className="w-5 h-5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                <span>Majhgaon - 833214, West Singhbhum, Jharkhand, India</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Phone className="w-5 h-5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+919337736501"
                  className="hover:text-accent transition-colors"
                >
                  +91 9337736501
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Mail className="w-5 h-5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
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
        <div className="border-t border-primary-foreground/20 pt-10">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-xs sm:text-sm opacity-75 max-w-2xl">
              &copy; {currentYear} KIITech - Dr. A.P.J. Abdul Kalam Institute of
              Innovation and Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm opacity-75">
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
