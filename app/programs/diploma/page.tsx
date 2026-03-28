import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CurriculumAccordion } from "@/components/curriculum-accordion";
import { TestimonialCard } from "@/components/testimonial-card";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { NewApplyNow } from "@/components/apply";
// import { ApplyNow } from "@/components/apply";

export const metadata: Metadata = {
  title:
    "Diploma Polytechnic in Jharkhand | Mechanical, Electrical, Civil, AI & ML - KIITECH",

  description:
    "Apply for Diploma (Polytechnic) courses at KIITECH - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology, Majhgaon, Jharkhand. Choose from Mechanical Engineering (120 seats), Electrical Engineering (120 seats), Civil Engineering (60 seats), and Artificial Intelligence & Machine Learning (60 seats). Industry-focused curriculum with strong placement support.",

  keywords: [
    "Diploma course in Jharkhand",
    "Polytechnic college in Jharkhand",
    "best diploma engineering college Jharkhand",
    "Mechanical engineering diploma Jharkhand",
    "Electrical engineering diploma Jharkhand",
    "Civil engineering diploma Jharkhand",
    "AI ML diploma course India",
    "polytechnic admission 2026 Jharkhand",
    "KIITECH diploma courses",
    "diploma after 10th engineering",
    "top private polytechnic college Jharkhand",
    "engineering diploma with placement",
    "polytechnic college in Majhgaon",
    "diploma engineering fees Jharkhand",
    "career after diploma engineering India",
  ],

  openGraph: {
    title: "Diploma Polytechnic Courses at KIITECH | Engineering & AI Programs",
    description:
      "Join KIITECH Diploma programs in Mechanical, Electrical, Civil, and AI & ML. Limited seats with industry-ready training and placement support.",
    url: "https://kiitech.org/programs/diploma",
    siteName: "KIITECH",
    type: "website",
    images: [
      {
        url: "https://kiitech.org/diploma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Diploma Polytechnic Courses at KIITECH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diploma Polytechnic at KIITECH - Engineering & AI Courses",
    description:
      "Enroll in Mechanical, Electrical, Civil, and AI & ML diploma programs with strong placement opportunities.",
    images: ["https://kiitech.org/diploma-og.jpg"],
  },

  alternates: {
    canonical: "https://kiitech.org/programs/diploma",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DiplomaProgram() {
  const curriculum = [
    {
      title: "Semester 1",
      subjects: [
        { name: "Engineering Mathematics-I", credits: 4 },
        { name: "Applied Physics", credits: 4 },
        { name: "Engineering Chemistry", credits: 4 },
        { name: "Engineering Graphics", credits: 4 },
        { name: "Communication Skills", credits: 2 },
      ],
    },
    {
      title: "Semester 2",
      subjects: [
        { name: "Engineering Mathematics-II", credits: 4 },
        { name: "Mechanics of Solids", credits: 4 },
        { name: "Thermodynamics", credits: 4 },
        { name: "Electrical Engineering Basics", credits: 4 },
        { name: "Workshop Practice", credits: 2 },
      ],
    },
    {
      title: "Semester 3",
      subjects: [
        { name: "Fluid Mechanics", credits: 4 },
        { name: "Machine Design", credits: 4 },
        { name: "Industrial Electronics", credits: 4 },
        { name: "Manufacturing Technology", credits: 4 },
        { name: "Technical Report Writing", credits: 2 },
      ],
    },
    {
      title: "Semester 4",
      subjects: [
        { name: "Heat Transfer", credits: 4 },
        { name: "Power Plant Engineering", credits: 4 },
        { name: "Automation & Control", credits: 4 },
        { name: "Internship", credits: 6 },
        { name: "Project Work", credits: 4 },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Vikram Singh",
      title: "Manufacturing Engineer",
      company: "Bajaj Auto",
      testimonial:
        "The diploma program gave me hands-on experience that was invaluable. I started working with Bajaj right after graduation.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Neha Gupta",
      title: "Senior Technician",
      company: "Siemens",
      testimonial:
        "Practical training and industry connections made my transition smooth. Highly recommend this program.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Suresh Kumar",
      title: "Plant Manager",
      company: "NTPC",
      testimonial:
        "The curriculum perfectly aligns with industry requirements. Great labaratories and experienced faculty.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

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
              Diploma in Engineering & Technology
            </h1>
            <p className="text-xl opacity-95 mb-8">
              A 2-year intensive diploma program with hands-on training,
              state-of-the-art labs, and guaranteed industry placements.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2-3 Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>4-6 Semesters</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>75+ Credits</span>
              </div>
            </div>
            <Button variant="secondary" size="lg" asChild>
              {/* <ApplyNow /> */}
              <NewApplyNow />
              {/* <ArrowRight className="w-5 h-5" /> */}
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Program Overview
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our diploma programs are designed for students seeking
                  specialized technical training with emphasis on practical
                  skills and industry experience. Each program combines
                  classroom learning with extensive laboratory work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Students gain hands-on experience with modern equipment,
                  industrial software, and real-world engineering problems. Our
                  curriculum is regularly updated to meet current industry
                  standards.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Specialized technical programs",
                  "Modern labs with industry equipment",
                  "Experienced technical faculty",
                  "Internship with leading companies",
                  "Placement assistance",
                  "Industry certifications",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/diploma.png"
                alt="Diploma Program"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Available Specializations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mechanical Engineering",
                description:
                  "Design, analysis, and manufacturing of mechanical systems and components",
              },
              {
                title: "Electrical Engineering",
                description:
                  "Power systems, electrical machines, and industrial automation",
              },
              {
                title: "Civil Engineering",
                description:
                  "Construction, infrastructure, and building design",
              },
              {
                title: "Electronics & Communication",
                description:
                  "Electronic circuits, embedded systems, and telecommunications",
              },
              {
                title: "Computer Engineering",
                description: "Hardware, networking, and systems programming",
              },
              {
                title: "Thermal Engineering",
                description: "Thermodynamics, HVAC, and energy systems",
              },
            ].map((spec, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-foreground mb-2">{spec.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {spec.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Sample Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical curriculum with practical and theoretical
              components
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border">
            <CurriculumAccordion semesters={curriculum} />
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technician",
                description:
                  "Equipment installation, maintenance, and troubleshooting",
              },
              {
                title: "Design Engineer",
                description: "CAD-based design and technical drawings",
              },
              {
                title: "Process Engineer",
                description: "Process optimization and quality control",
              },
              {
                title: "Site Supervisor",
                description: "Project supervision and site management",
              },
              {
                title: "Maintenance Manager",
                description: "Equipment maintenance and facility management",
              },
              {
                title: "Quality Inspector",
                description: "Quality assurance and testing procedures",
              },
            ].map((career, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:shadow-lg transition-shadow"
              >
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">
                  {career.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {career.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Higher Education Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Further Education Pathways
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bachelor of Engineering (Lateral Entry)",
                duration: "2 Years",
                focus:
                  "Direct 3rd semester entry with advanced specializations",
              },
              {
                title: "Bachelor of Technology",
                duration: "2 Years",
                focus: "Advanced engineering with research opportunities",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="p-8 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-accent font-semibold mb-3">
                  {option.duration}
                </p>
                <p className="text-muted-foreground">{option.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Diploma Graduate Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our successful diploma graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Technical Career?
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join our diploma programs and gain practical skills sought by top
            engineering and manufacturing companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NewApplyNow />
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
