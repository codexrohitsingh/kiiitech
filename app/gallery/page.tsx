import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KIITech - Campus Gallery",
  description: "Explore our vibrant campus life and state-of-the-art facilities at KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology",
  openGraph: {
    title: "KIITech - Campus Gallery",
    description: "Discover our campus through photos",
    type: "website",
  },
};

const galleryImages = [
  { src: "/hero1.png", alt: "Campus Building" },
  { src: "/hero2.jpeg", alt: "Student Activities" },
  { src: "/hero3.jpeg", alt: "Classroom" },
  { src: "/about.png", alt: "College Facilities" },
  { src: "/bca.png", alt: "Computer Lab" },
  { src: "/bba.png", alt: "Business Lab" },
  { src: "/diploma.png", alt: "Diploma Lab" },
  { src: "/pgdm.png", alt: "Management Lab" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link
              href="/"
              className="text-accent hover:underline text-sm font-semibold flex items-center gap-1 w-fit"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Campus Gallery
            </h1>
            <p className="text-xl opacity-95">
              Explore our vibrant campus life and state-of-the-art facilities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 px-4 py-2 rounded-lg">
                      <p className="font-semibold text-primary">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
