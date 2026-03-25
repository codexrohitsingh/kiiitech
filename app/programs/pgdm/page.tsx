import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CurriculumAccordion } from '@/components/curriculum-accordion'
import { TestimonialCard } from '@/components/testimonial-card'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Briefcase } from 'lucide-react'
import { ApplyNow } from "@/components/apply";

export const metadata: Metadata = {
  title: 'PGDM Program - KIITECH',
  description: 'Post Graduate Diploma in Management for working professionals and graduates seeking career advancement at KIITECH.',
  keywords: ['PGDM', 'Management', 'Post Graduate', 'MBA Alternative'],
}

export default function PGDMProgram() {
  const curriculum = [
    {
      title: 'Semester 1',
      subjects: [
        { name: 'Organizational Behavior & Management', credits: 4 },
        { name: 'Financial Management', credits: 4 },
        { name: 'Marketing Management', credits: 4 },
        { name: 'Business Communication', credits: 3 },
        { name: 'Business Ethics & CSR', credits: 2 },
      ],
    },
    {
      title: 'Semester 2',
      subjects: [
        { name: 'Strategic Management', credits: 4 },
        { name: 'Human Resource Management', credits: 4 },
        { name: 'Operations Management', credits: 4 },
        { name: 'Business Analytics', credits: 3 },
        { name: 'Leadership Development', credits: 2 },
      ],
    },
    {
      title: 'Semester 3',
      subjects: [
        { name: 'International Business', credits: 4 },
        { name: 'Digital Marketing & E-Commerce', credits: 4 },
        { name: 'Supply Chain Management', credits: 4 },
        { name: 'Project Management', credits: 3 },
        { name: 'Specialization Elective-I', credits: 3 },
      ],
    },
    {
      title: 'Semester 4',
      subjects: [
        { name: 'Corporate Strategy & Governance', credits: 4 },
        { name: 'Entrepreneurship & Innovation', credits: 4 },
        { name: 'Research Methodology', credits: 3 },
        { name: 'Capstone Project/Thesis', credits: 8 },
        { name: 'Specialization Elective-II', credits: 3 },
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Vikas Sharma',
      title: 'General Manager',
      company: 'Reliance Industries',
      testimonial: 'The PGDM program accelerated my career progression. The practical focus and industry connections are invaluable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Priya Bansal',
      title: 'Director, Operations',
      company: 'Flipkart',
      testimonial: 'Perfect blend of theory and practice. The PGDM curriculum is very relevant to current market demands.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Rajesh Iyer',
      title: 'VP, Finance',
      company: 'HDFC Bank',
      testimonial: 'Great mentoring and networking opportunities. PGDM is an excellent alternative to traditional MBA.',
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
              PGDM - Post Graduate Diploma in Management
            </h1>
            <p className="text-xl opacity-95 mb-8">
              A 2-year intensive management program designed for graduates and
              working professionals seeking rapid career advancement and
              leadership roles.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2 Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>4 Semesters</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>92 Credits</span>
              </div>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/admissions" className="flex items-center gap-2">
                <ApplyNow />
                {/* <ArrowRight className="w-5 h-5" /> */}
              </Link>
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
                  The PGDM is a premium alternative to traditional MBA, designed
                  for individuals ready for senior management positions. Our
                  intensive curriculum combines business rigor with practical
                  industry applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through expert faculty mentoring, industry partnerships, and
                  international exposure, students develop strategic thinking
                  and leadership competencies required for executive roles in
                  organizations.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Industry-immersed curriculum",
                  "Senior management-focused content",
                  "Executive guest lectures",
                  "Internship with leading companies",
                  "Global exchange programs",
                  "Network with industry leaders",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="PGDM Program"
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
                title: "Finance & Banking",
                description:
                  "Investment banking, corporate finance, and risk management",
              },
              {
                title: "Digital Business",
                description:
                  "E-commerce, digital marketing, and technology strategy",
              },
              {
                title: "Strategic Management",
                description:
                  "Corporate strategy, competitive analysis, and growth planning",
              },
              {
                title: "Supply Chain & Logistics",
                description:
                  "Global supply chain, procurement, and distribution networks",
              },
              {
                title: "Healthcare Management",
                description:
                  "Healthcare administration, operations, and policy",
              },
              {
                title: "Consulting & Analytics",
                description: "Management consulting and business analytics",
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
              Intensive management curriculum focusing on strategic thinking and
              executive leadership
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border">
            <CurriculumAccordion semesters={curriculum} />
          </div>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border bg-white">
              <h3 className="font-bold text-foreground mb-4">
                Educational Background
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Bachelor's degree from recognized university</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Any discipline eligible (Science, Commerce, Arts)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 border-border bg-white">
              <h3 className="font-bold text-foreground mb-4">
                Work Experience
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Minimum 2 years relevant work experience</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Preference given to professionals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Recent graduates also eligible</span>
                </li>
              </ul>
            </Card>
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
                title: "Senior Manager",
                description:
                  "Lead departments and drive organizational strategy",
              },
              {
                title: "Business Consultant",
                description: "Advise C-suite executives on strategic decisions",
              },
              {
                title: "Entrepreneur",
                description: "Launch and scale your own venture",
              },
              {
                title: "Investment Banking",
                description: "M&A, corporate finance, and advisory roles",
              },
              {
                title: "Product Manager",
                description: "Lead product strategy and innovation",
              },
              {
                title: "Director Level",
                description: "Executive positions across industries",
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

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              PGDM Graduate Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our successful PGDM graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            PGDM vs MBA Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold text-foreground">
                    Aspect
                  </th>
                  <th className="text-left p-4 font-bold text-accent">
                    PGDM at KIITECH
                  </th>
                  <th className="text-left p-4 font-bold text-muted-foreground">
                    Traditional MBA
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Duration", "2 Years", "2 Years"],
                  [
                    "Focus",
                    "Industry-immersed, practical",
                    "Academic & theoretical",
                  ],
                  [
                    "Delivery",
                    "Intensive, full-time",
                    "Full-time or part-time",
                  ],
                  ["Cost", "Affordable", "Higher investment"],
                  ["Placement", "100% assured", "Competitive placement"],
                  ["Faculty", "Industry professionals", "Academic faculty"],
                  ["Internship", "Mandatory", "Optional"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-muted/30"
                  >
                    <td className="p-4 font-semibold text-foreground">
                      {row[0]}
                    </td>
                    <td className="p-4 text-foreground">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Accelerate Your Career with PGDM
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join industry leaders who have transformed their careers through
            KIITECH's rigorous PGDM program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
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
