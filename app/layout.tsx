import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

// 👉 Import your components
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import ScrollingBar from "@/components/ScrollingBar";
import Chatbot from "../chatbot/Chatbot";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

/* =========================
   🔥 SEO METADATA (HIGH LEVEL)
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://kiitech.org"),

  title: {
    default:
      "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology | Best College in Jharkhand",
    template: "%s | KIITech",
  },

  description:
    "KIITech is a top private college in Majhgaon, Jharkhand offering BBA, BCA, PGDM and Diploma programs with industry-focused curriculum, modern infrastructure and strong placement support.",

  keywords: [
    "KIITech",
    "kiitech",
    "Dr APJ Abdul Kalam Institute of Innovation and Technology",
    "college in Majhgaon Jharkhand",
    "best college Jharkhand",
    "private college Jharkhand",
    "BCA college Jharkhand",
    "BBA college Jharkhand",
    "PGDM college India",
    "Diploma Polytechnic Jharkhand",
    "top college near Raurkela",
    "placement college Jharkhand",
    "AI ML diploma India",
    "technical institute Jharkhand",
  ],

  authors: [{ name: "KIITech" }],
  creator: "KIITech",
  publisher: "KIITech",

  alternates: {
    canonical: "https://kiitech.org",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kiitech.org",
    title: "KIITech | Best Private College in Jharkhand",
    description:
      "Join KIITech for BBA, BCA, PGDM and Diploma programs with industry-ready curriculum and strong placement support.",
    siteName: "KIITech",
    images: [
      {
        url: "https://kiitech.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "KIITech Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KIITech - Best College in Jharkhand",
    description:
      "Top private college offering BBA, BCA, PGDM and Diploma programs.",
    images: ["https://kiitech.org/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "education",

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png" },
    ],
    apple: "/apple-icon.png",
  },
};

/* =========================
   📱 VIEWPORT
========================= */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000080",
};

/* =========================
   🧠 ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* 🔥 STRUCTURED DATA (VERY IMPORTANT FOR SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",

              name: "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology",
              alternateName: "KIITech",

              url: "https://kiitech.org",
              logo: "https://kiitech.org/logo.png",
              image: "https://kiitech.org/og-image.png",

              description:
                "Top private college in Majhgaon, Jharkhand offering BBA, BCA, PGDM and Diploma programs.",

              telephone: "+91 9337736501",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Majhgaon",
                addressLocality: "Majhgaon",
                addressRegion: "Jharkhand",
                postalCode: "833214",
                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.0904",
                longitude: "85.8781",
              },

              sameAs: [
                "https://www.facebook.com/kiitech.org",
                "https://www.linkedin.com/company/kiitech/",
                "https://www.instagram.com/kiitech.org_/",
                "https://www.youtube.com/@KIITech",
              ],

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Courses",
                itemListElement: [
                  { "@type": "Course", name: "BBA" },
                  { "@type": "Course", name: "BCA" },
                  { "@type": "Course", name: "PGDM" },
                  { "@type": "Course", name: "Diploma Polytechnic" },
                ],
              },
            }),
          }}
        />

        {/* ✅ HEADER */}
        <Header />

        {/* ✅ SCROLLING BAR (AFTER HEADER) */}
        <ScrollingBar />

        {/* ✅ MAIN CONTENT */}
        <main>{children}</main>

        {/* ✅ FOOTER */}
        <Footer />

        {/* ✅ FLOATING SOCIAL ICONS */}
        <FloatingSocialBar />

        {/* ✅ SYSTEM */}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
