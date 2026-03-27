import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CurriculumAccordion } from '@/components/curriculum-accordion'
import { TestimonialCard } from '@/components/testimonial-card'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Briefcase } from 'lucide-react'
import { NewApplyNow } from '@/components/apply'
// import { ApplyNow } from "@/components/apply";
export const metadata: Metadata = {
  title:
    'BCA Course in Jharkhand | Best BCA College in Majhgaon - KIITECH',

  description:
    'Join the BCA (Bachelor of Computer Applications) program at KIITECH - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology, Majhgaon, Jharkhand. Learn programming, software development, web development, AI basics, and data science with industry-focused curriculum and 100% placement support.',

  keywords: [
    "BCA course in Jharkhand",
    "best BCA college in Jharkhand",
    "BCA college in Majhgaon",
    "KIITECH BCA program",
    "Bachelor of Computer Applications India",
    "top private college Jharkhand BCA",
    "computer course after 12th",
    "BCA admission 2026 Jharkhand",
    "software development course India",
    "web development course after 12th",
    "BCA placements college Jharkhand",
    "BCA fees and admission KIITECH",
    "best college for BCA near me",
    "career in IT after BCA",
    "BCA program with placement support",
  ],

  openGraph: {
    title:
      'BCA Program at KIITECH | Best Computer Course in Jharkhand',
    description:
      'Explore KIITECH’s BCA program designed for future IT professionals. Learn programming, web development, and software skills with strong placement support.',
    url: 'https://kiitech.org/programs/bca',
    siteName: 'KIITECH',
    type: 'website',
    images: [
      {
        url: 'https://kiitech.org/bca-og.jpg',
        width: 1200,
        height: 630,
        alt: 'BCA Program at KIITECH',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BCA Course at KIITECH - Start Your IT Career',
    description:
      'Enroll in KIITECH’s BCA program and build skills in programming, software development, and IT careers.',
    images: ['https://kiitech.org/bca-og.jpg'],
  },

  alternates: {
    canonical: 'https://kiitech.org/programs/bca',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BCAProgram() {
  const curriculum = [
    {
      title: 'Semester 1',
      subjects: [
        { name: 'Fundamentals of Computing', credits: 4 },
        { name: 'Mathematics-I', credits: 4 },
        { name: 'Programming Fundamentals (C)', credits: 4 },
        { name: 'Digital Logic Design', credits: 4 },
        { name: 'Communication Skills', credits: 2 },
      ],
    },
    {
      title: 'Semester 2',
      subjects: [
        { name: 'Object Oriented Programming (Java)', credits: 4 },
        { name: 'Mathematics-II', credits: 4 },
        { name: 'Database Management Systems', credits: 4 },
        { name: 'Web Development Basics', credits: 4 },
        { name: 'Professional Ethics', credits: 2 },
      ],
    },
    {
      title: 'Semester 3',
      subjects: [
        { name: 'Data Structures & Algorithms', credits: 4 },
        { name: 'Operating Systems', credits: 4 },
        { name: 'Computer Networks', credits: 4 },
        { name: 'Advance Web Technologies', credits: 4 },
        { name: 'Software Engineering', credits: 3 },
      ],
    },
    {
      title: 'Semester 4',
      subjects: [
        { name: 'Database Design & Implementation', credits: 4 },
        { name: 'Enterprise Application Development', credits: 4 },
        { name: 'Mobile App Development', credits: 4 },
        { name: 'Cloud Computing Basics', credits: 4 },
        { name: 'Internship/Project', credits: 4 },
      ],
    },
    {
      title: 'Semester 5',
      subjects: [
        { name: 'Artificial Intelligence & ML', credits: 4 },
        { name: 'Information Security', credits: 4 },
        { name: 'DevOps & CI/CD', credits: 4 },
        { name: 'Advanced Database Systems', credits: 4 },
        { name: 'Elective-I', credits: 3 },
      ],
    },
    {
      title: 'Semester 6',
      subjects: [
        { name: 'Big Data Analytics', credits: 4 },
        { name: 'Blockchain Technology', credits: 4 },
        { name: 'IoT & Embedded Systems', credits: 4 },
        { name: 'Capstone Project', credits: 6 },
        { name: 'Elective-II', credits: 3 },
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Senior Software Engineer',
      company: 'TCS',
      testimonial: 'The BCA program at KIITECH provided me with strong fundamentals and practical skills that directly helped in my career at TCS.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Priya Sharma',
      title: 'Full Stack Developer',
      company: 'Infosys',
      testimonial: 'Excellent curriculum and industry-focused teaching made my transition to professional work seamless.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Amit Patel',
      title: 'Product Manager',
      company: 'Google',
      testimonial: 'KIITECH shaped my technical foundation and taught me the importance of continuous learning.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ]

  return (
    <>
      <Header />

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
              Bachelor of Computer Applications (BCA)
            </h1>
            <p className="text-xl opacity-95 mb-8">
              A comprehensive 3-year undergraduate program designed to prepare
              you for a successful career in software development, IT, and
              technology innovation.
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
                <span>115 Credits</span>
              </div>
            </div>
            <Button variant="secondary" size="lg" asChild>
              {/* <ApplyNow />
               */}
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
                  The BCA program is designed to equip students with
                  comprehensive knowledge of computer science fundamentals,
                  software development, and emerging technologies. Our
                  curriculum balances theoretical concepts with practical
                  implementation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Students learn industry-standard programming languages, web
                  development, database management, and modern frameworks
                  through hands-on projects and real-world case studies.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Industry-aligned curriculum",
                  "Expert faculty with 10+ years experience",
                  "Modern labs and development environment",
                  "Real-world project exposure",
                  "Internship opportunities",
                  "Career guidance and placement support",
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
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                alt="BCA Program"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of computer science
              and software development
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border">
            <CurriculumAccordion semesters={curriculum} />
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software Developer",
                description:
                  "Develop applications and software solutions for various platforms",
              },
              {
                title: "Full Stack Developer",
                description:
                  "Build end-to-end web applications with modern frameworks",
              },
              {
                title: "Mobile App Developer",
                description:
                  "Create native and cross-platform mobile applications",
              },
              {
                title: "Data Scientist",
                description: "Analyze data and build machine learning models",
              },
              {
                title: "DevOps Engineer",
                description: "Manage infrastructure and deployment pipelines",
              },
              {
                title: "Cloud Architect",
                description: "Design and implement cloud-based solutions",
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Higher Education Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Master of Computer Applications (MCA)",
                duration: "2 Years",
                focus: "Advanced software development and research",
              },
              {
                title: "M.Tech in Computer Science",
                duration: "2 Years",
                focus: "Advanced technology and specializations",
              },
              {
                title: "M.Sc in Computer Science",
                duration: "2 Years",
                focus: "Research-oriented advanced studies",
              },
              {
                title: "MBA (Technology Management)",
                duration: "2 Years",
                focus: "Technology leadership and management",
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our successful graduates
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
            Ready to Start Your BCA Journey?
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully built their careers
            through KIITECH's BCA program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NewApplyNow />
<Button
  size="lg"
  asChild
  className="
    px-8 py-3 rounded-full font-semibold text-white
    bg-gradient-to-r from-[#00319c] via-[#0053d9] to-[#0062da]
    shadow-[0_0_20px_rgba(59,130,246,0.6)]
    hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
    active:scale-95
    transition-all duration-300
  "
>
  <Link href="/contact">Schedule a Consultation</Link>
</Button>


          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
