'use client'

import { Phone, Mail } from "lucide-react"
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa"

export default function FloatingSocialBar() {
  return (
<div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">

  {/* WhatsApp */}
  <a href="https://wa.me/919337736501" target="_blank">
    <FaWhatsapp className="w-6 h-6 text-green-500 hover:scale-110 transition" />
  </a>

  {/* Call */}
  <a href="tel:+919337736501">
    <Phone className="w-6 h-6 text-blue-500 hover:scale-110 transition" />
  </a>

  {/* Email */}
  <a href="mailto:office@kiitech.org">
    <Mail className="w-6 h-6 text-red-500 hover:scale-110 transition" />
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/kiitech.org" target="_blank">
    <FaFacebookF className="w-6 h-6 text-[#1877F2] hover:scale-110 transition" />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/kiitech.org_" target="_blank">
    <FaInstagram className="w-6 h-6 text-pink-500 hover:scale-110 transition" />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/kiitech/" target="_blank">
    <FaLinkedinIn className="w-6 h-6 text-[#0A66C2] hover:scale-110 transition" />
  </a>

  {/* YouTube */}
  <a href="https://www.youtube.com/@KIITech" target="_blank">
    <FaYoutube className="w-6 h-6 text-red-600 hover:scale-110 transition" />
  </a>

</div>
  )
}