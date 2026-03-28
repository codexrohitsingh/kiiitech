import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Building2,
  Globe,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology | Best College in Majhgaon, Jharkhand",

  description:
    "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology is a leading private college in Majhgaon, Jharkhand, India offering BBA, BCA, PGDM, Diploma and industry-focused programs with 100% placement support.",

  keywords: [
    "KIITech",
    "kiitech",
    "KIITech college",
    "Dr APJ Abdul Kalam Institute of Innovation and Technology",
    "college in Majhgaon Jharkhand",
    "private college Jharkhand",
    "BBA college Jharkhand",
    "BCA college Jharkhand",
    "PGDM college India",
    "Diploma college Jharkhand",
  ],

  authors: [{ name: "KIITech" }],

  creator: "KIITech",

  openGraph: {
    title:
      "KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology",
    description:
      "Top private college in Majhgaon, Jharkhand offering BBA, BCA, PGDM & Diploma programs with excellent placements.",
    url: "https://www.kiitech.org",
    siteName: "KIITech",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KIITech - Best College in Jharkhand",
    description:
      "Join KIITech for BBA, BCA, PGDM & Diploma programs with industry-ready curriculum.",
  },

  alternates: {
    canonical: "https://www.kiitech.org/about",
  },
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
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
              About KIITech
            </h1>
            <p className="text-xl opacity-95">
              Leading the future of technical education with innovation,
              excellence, and student-centric learning
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2026, KIITECH - Dr. A.P.J. Abdul Kalam Institute of
                  Innovation and Technology - is a modern institution built on a
                  strong foundation of academic excellence and industry
                  experience. While newly established, our institute is driven
                  by a team of highly experienced educators and professionals
                  who bring years of expertise from reputed institutions and
                  technical universities.
                </p>

                <p>
                  With academic association and experience aligned with
                  Jharkhand University of Technology, KIITECH follows a
                  structured and industry-relevant curriculum designed to meet
                  evolving technological and professional standards. Named after
                  Dr. A.P.J. Abdul Kalam, the visionary scientist and former
                  President of India, our institute reflects his ideals of
                  innovation, knowledge, and nation-building through quality
                  education.
                </p>

                <p>
                  From the very beginning, KIITECH has focused on delivering
                  practical, skill-based learning combined with strong academic
                  foundations. Today, the institute is rapidly growing as a
                  promising center for technical and management education,
                  committed to shaping future-ready professionals and leaders
                  who can excel in global industries. Our dedication to quality
                  education, industry exposure, and student success continues to
                  drive our journey forward.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about.png"
                alt="KIITech Campus"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide innovative, industry-aligned technical education that
                empowers students with knowledge, skills, and values to excel as
                professionals, entrepreneurs, and responsible citizens in a
                rapidly evolving global landscape.
              </p>
              <p className="text-muted-foreground text-sm italic">
                We are committed to fostering a culture of continuous learning,
                innovation, and excellence.
              </p>
            </Card>
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be recognized globally as a premier institution of technical
                excellence that creates opportunities for all stakeholders
                through cutting-edge research, innovative teaching, and
                transformative education.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Building the leaders and innovators of tomorrow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and action at KIITECH
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description:
                  "Pursuing the highest standards in everything we do",
              },
              {
                title: "Innovation",
                description:
                  "Encouraging creative thinking and entrepreneurial spirit",
              },
              {
                title: "Integrity",
                description:
                  "Maintaining honesty, transparency, and ethical behavior",
              },
              {
                title: "Inclusivity",
                description:
                  "Creating opportunities for all regardless of background",
              },
              {
                title: "Industry Relevance",
                description:
                  "Bridging education with real-world industry needs",
              },
              {
                title: "Student-Centric",
                description:
                  "Focusing on individual growth and success of every student",
              },
              {
                title: "Sustainability",
                description:
                  "Promoting environmental and social responsibility",
              },
              {
                title: "Global Perspective",
                description: "Preparing students for international careers",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-foreground mb-2 text-lg">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose KIITECH?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "25+ Years of Excellence",
                description:
                  "Established legacy of academic and professional excellence",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "Experienced educators with industry backgrounds",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art labs, libraries, and learning spaces",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Partnerships",
                description: "Collaborations with international institutions",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Industry-Aligned Curriculum",
                description:
                  "Programs designed in consultation with industry leaders",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "100% Placements",
                description: "Guaranteed career placements with top companies",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-accent mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Notable Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "25+",
                label: "Years of Excellence",
                description: "Serving students since 1998",
              },
              {
                number: "15K+",
                label: "Graduates",
                description: "Placed in leading companies worldwide",
              },
              {
                number: "50+",
                label: "Industry Partners",
                description: "Collaborating organizations",
              },
              {
                number: "100%",
                label: "Placement Rate",
                description: "Guaranteed job opportunities",
              },
              {
                number: "500+",
                label: "Faculty Members",
                description: "Dedicated educators and mentors",
              },
              {
                number: "50K+",
                label: "Alumni Network",
                description: "Globally connected success stories",
              },
              {
                number: "100+",
                label: "Research Projects",
                description: "Active research initiatives",
              },
              {
                number: "10+",
                label: "Accreditations",
                description: "National and international recognitions",
              },
            ].map((achievement, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <h4 className="font-bold text-foreground mb-1">
                  {achievement.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders committed to excellence in education and
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Chancellor",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Prof. Neha Sharma",
                position: "Vice Chancellor",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
              },
              {
                name: "Dr. Amit Patel",
                position: "Academic Director",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-accent font-semibold text-sm">
                    {leader.position}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the KIITECH Family</h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Be part of an institution that believes in transforming lives
            through quality education and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              // className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
