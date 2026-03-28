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
  title: "BBA Course in Jharkhand | Best BBA College in Majhgaon - KIITECH",

  description:
    "Join the BBA (Bachelor of Business Administration) program at KIITECH - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology, Majhgaon, Jharkhand. Learn business management, entrepreneurship, finance, marketing, and leadership skills with 100% placement support.",

  keywords: [
    "BBA course in Jharkhand",
    "best BBA college in Jharkhand",
    "BBA college in Majhgaon",
    "KIITECH BBA program",
    "Bachelor of Business Administration India",
    "top private college Jharkhand BBA",
    "management course after 12th",
    "business administration degree India",
    "BBA admission 2026 Jharkhand",
    "entrepreneurship course India",
    "BBA placements college Jharkhand",
    "BBA fees and admission KIITECH",
    "best college for BBA near me",
    "career in business management India",
    "BBA program with placement support",
  ],

  openGraph: {
    title: "BBA Program at KIITECH | Best Management Course in Jharkhand",
    description:
      "Explore KIITECH’s BBA program designed for future business leaders. Industry-focused curriculum, expert faculty, and strong placement support.",
    url: "https://kiitech.org/programs/bba",
    siteName: "KIITECH",
    type: "website",
    images: [
      {
        url: "https://kiitech.org/bba-og.jpg",
        width: 1200,
        height: 630,
        alt: "BBA Program at KIITECH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BBA Course at KIITECH - Build Your Business Career",
    description:
      "Enroll in KIITECH’s BBA program and develop leadership, management, and entrepreneurial skills.",
    images: ["https://kiitech.org/bba-og.jpg"],
  },

  alternates: {
    canonical: "https://kiitech.org/programs/bba",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BBAProgram() {
  const curriculum = [
    {
      title: "Semester 1",
      subjects: [
        { name: "Business Economics", credits: 4 },
        { name: "Financial Accounting", credits: 4 },
        { name: "Organizational Behavior", credits: 4 },
        { name: "Business Communication", credits: 4 },
        { name: "Mathematics for Business", credits: 3 },
      ],
    },
    {
      title: "Semester 2",
      subjects: [
        { name: "Management Principles", credits: 4 },
        { name: "Managerial Accounting", credits: 4 },
        { name: "Business Law", credits: 4 },
        { name: "Business Statistics", credits: 4 },
        { name: "Information Systems", credits: 3 },
      ],
    },
    {
      title: "Semester 3",
      subjects: [
        { name: "Marketing Management", credits: 4 },
        { name: "Human Resource Management", credits: 4 },
        { name: "Financial Management", credits: 4 },
        { name: "Operations Management", credits: 4 },
        { name: "Business Research Methods", credits: 3 },
      ],
    },
    {
      title: "Semester 4",
      subjects: [
        { name: "Strategic Management", credits: 4 },
        { name: "International Business", credits: 4 },
        { name: "Project Management", credits: 4 },
        { name: "Entrepreneurship", credits: 4 },
        { name: "Internship", credits: 4 },
      ],
    },
    {
      title: "Semester 5",
      subjects: [
        { name: "Supply Chain Management", credits: 4 },
        { name: "E-Commerce & Digital Marketing", credits: 4 },
        { name: "Corporate Governance", credits: 4 },
        { name: "Investment Management", credits: 4 },
        { name: "Elective-I", credits: 3 },
      ],
    },
    {
      title: "Semester 6",
      subjects: [
        { name: "Business Ethics & CSR", credits: 4 },
        { name: "Mergers & Acquisitions", credits: 4 },
        { name: "Business Analytics", credits: 4 },
        { name: "Capstone Project", credits: 6 },
        { name: "Elective-II", credits: 3 },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Aishwarya Desai",
      title: "Management Consultant",
      company: "McKinsey",
      testimonial:
        "The BBA program provided me with strong business acumen and leadership skills that are crucial at McKinsey.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Rohit Malhotra",
      title: "Startup Founder",
      company: "TechVenture Co",
      testimonial:
        "The entrepreneurship focus and business fundamentals helped me launch my own successful startup.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Divya Nair",
      title: "Marketing Director",
      company: "Nestlé",
      testimonial:
        "Excellent curriculum that covers all aspects of modern business management and marketing.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-linear-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
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
              Bachelor of Business Administration (BBA)
            </h1>
            <p className="text-xl opacity-95 mb-8">
              A comprehensive 3-year program designed to develop future business
              leaders with strong management foundations and entrepreneurial
              mindset.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>6 Semesters</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>121 Credits</span>
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
                  Our BBA program combines business theory with practical
                  application, preparing students for leadership roles in
                  various industries. The curriculum covers core business
                  functions and emerging business trends.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Students develop skills in strategic thinking, financial
                  analysis, marketing innovation, and organizational management.
                  Industry internships and case studies provide real-world
                  exposure.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Business-focused curriculum",
                  "Industry practitioners as guest lecturers",
                  "Case study methodology",
                  "Internship programs",
                  "Business simulations",
                  "Entrepreneurship support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/bba.png"
                alt="BBA Program"
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
                title: "Finance & Accounting",
                description:
                  "Corporate finance, investment analysis, and financial planning",
              },
              {
                title: "Marketing Management",
                description:
                  "Digital marketing, brand management, and consumer behavior",
              },
              {
                title: "Human Resource Management",
                description:
                  "Talent management, organizational development, and HR strategy",
              },
              {
                title: "Operations & Supply Chain",
                description:
                  "Process optimization, logistics, and supply chain management",
              },
              {
                title: "Entrepreneurship",
                description:
                  "Startup development, business planning, and innovation",
              },
              {
                title: "International Business",
                description:
                  "Global commerce, international trade, and cultural management",
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
              Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business curriculum covering management, finance,
              marketing, and strategy
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
                title: "Management Consultant",
                description:
                  "Advise organizations on strategy and operational improvements",
              },
              {
                title: "Finance Manager",
                description:
                  "Manage corporate finances and investment portfolios",
              },
              {
                title: "Marketing Manager",
                description:
                  "Develop and execute marketing strategies and campaigns",
              },
              {
                title: "HR Manager",
                description:
                  "Lead human resources and talent management functions",
              },
              {
                title: "Entrepreneur",
                description: "Start and manage your own business venture",
              },
              {
                title: "Business Analyst",
                description:
                  "Analyze business processes and drive optimization",
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
                title: "MBA (Master of Business Administration)",
                duration: "2 Years",
                focus: "Advanced management and business strategy",
              },
              {
                title: "CA/CMA (Chartered/Cost Accountant)",
                duration: "4.5 Years",
                focus: "Professional accounting credentials",
              },
              {
                title: "M.Com (Master of Commerce)",
                duration: "2 Years",
                focus: "Advanced commerce and accounting",
              },
              {
                title: "Executive Programs",
                duration: "1-2 Years",
                focus: "Specialized management certifications",
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
              BBA Graduate Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our successful BBA graduates
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
            Ready to Become a Business Leader?
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join KIITECH's BBA program and develop the skills needed to lead
            organizations in the modern business landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NewApplyNow />
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
