import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import FloatingSocialBar from "@/components/FloatingSocialBar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kiitech.org"),

  title: {
    default:
      "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology | Best College in Jharkhand",
    template: "%s | KIITech",
  },

  description:
    "KIITech is a top private college in Majhgaon, Jharkhand, India offering BBA, BCA, PGDM and Diploma programs with industry-focused curriculum, modern infrastructure and placement support.",

  keywords: [
    "KIITech",
    "kiitech",
    "KIITech college",
    "Dr APJ Abdul Kalam Institute of Innovation and Technology",
    "APJ Abdul Kalam institute Jharkhand",

    // 📍 Location based
    "college in Majhgaon Jharkhand",
    "college in Jharkhand",
    "private college Jharkhand",
    "top college in Jharkhand",
    "best college in Jharkhand",
    "college near Raurkela",
    "college near Odisha Jharkhand border",

    // 🎓 Courses
    "BCA college in Jharkhand",
    "best BCA college Jharkhand",
    "BBA college in Jharkhand",
    "best BBA college Jharkhand",
    "PGDM college India",
    "PGDM college Jharkhand",
    "Diploma college Jharkhand",
    "computer application courses Jharkhand",
    "management courses Jharkhand",

    // 💼 Career / placement
    "college with placement in Jharkhand",
    "top placement college Jharkhand",
    "job oriented courses in Jharkhand",
    "industry focused education India",

    // 🏫 Branding + intent
    "best private college India",
    "modern college infrastructure India",
    "career focused education institute",
    "innovation and technology college India",
    "top institute for BBA BCA PGDM",

    // 🎯 Admission intent
    "apply for BCA college Jharkhand",
    "admission open college Jharkhand",
    "BBA admission Jharkhand",
    "PGDM admission India",
    "diploma admission Jharkhand",
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
    title:
      "KIITech | Leading Private College in Majhgaon, Jharkhand for BBA, BCA & PGDM",
    description:
      "Discover KIITech – Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology. Offering industry-focused BBA, BCA, PGDM and Diploma programs with modern learning and strong placement support.",
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
    nocache: false,
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
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000080",
};

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
        {/* 🔥 ADVANCED STRUCTURED DATA (HIGH SEO IMPACT) */}
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
                postalCode: "833214",
                district: "West Singhbhum",
                block: "Majhgaon",
                policestation: "Majhgaon Police Station",
                postoffice: "Majhgaon",
                panchayat: "Majhgaon Panchayat",
                state: "Jharkhand",
                addressRegion: "Jharkhand",
                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.0904",
                longitude: "85.8781",
              },

              openingHours: "Mo-Fr 09:00-17:00",

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
                  { "@type": "Course", name: "Diploma" },
                ],
              },
            }),
          }}
        />

        {children}
<FloatingSocialBar/>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
