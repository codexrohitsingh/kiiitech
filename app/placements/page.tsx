import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { TestimonialCard } from "@/components/testimonial-card";
import Link from "next/link";
import { TrendingUp, Briefcase, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Placements - KIITECH",
  description:
    "KIITECH achieves 100% placement rate with excellent salary packages and top companies. Meet our successful alumni.",
  keywords: ["Placements", "Jobs", "Recruitment", "Career"],
};

export default function Placements() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Senior Software Engineer",
      company: "Google",
      testimonial:
        "KIITECH provided me with a strong foundation. The training and mentoring helped me excel at Google.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Priya Sharma",
      title: "Product Manager",
      company: "Microsoft",
      testimonial:
        "The curriculum and industry exposure at KIITECH were instrumental in my career at Microsoft.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Amit Patel",
      title: "Consultant",
      company: "McKinsey",
      testimonial:
        "KIITECH shaped my analytical and leadership skills which are crucial for consulting.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Neha Gupta",
      title: "Software Developer",
      company: "Amazon",
      testimonial:
        "Great preparation and placement support made my transition to Amazon seamless.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  const recruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "HCL Technologies",
    "Google",
    "Microsoft",
    "Amazon",
    "IBM",
    "Accenture",
    "Cognizant",
    "Tech Mahindra",
    "Capgemini",
    "Deloitte",
    "McKinsey",
    "Goldman Sachs",
    "JP Morgan",
    "HDFC Bank",
    "ICICI Bank",
    "Reliance Industries",
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
              Placements & Careers
            </h1>
            <p className="text-xl opacity-95">
              100% placement guarantee with top companies. Average package of
              ₹8-10 LPA across all programs.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                label: "Placement Rate",
                value: "100%",
                description: "Guaranteed placements",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                label: "Average Package",
                value: "₹8-10 LPA",
                description: "Across all programs",
              },
              {
                icon: <Users className="w-8 h-8" />,
                label: "Total Placements",
                value: "10K+",
                description: "Successful placements",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                label: "Top Recruiters",
                value: "100+",
                description: "Leading companies",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 border-border bg-white text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-accent mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  {stat.label}
                </p>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program-wise Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Program-wise Placement Statistics
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold text-foreground">
                    Program
                  </th>
                  <th className="text-left p-4 font-bold text-accent">
                    Avg. Package
                  </th>
                  <th className="text-left p-4 font-bold text-accent">
                    Highest Package
                  </th>
                  <th className="text-left p-4 font-bold text-accent">
                    Placement Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["BCA", "₹7-9 LPA", "₹28 LPA", "100%"],
                  ["Diploma", "₹4-6 LPA", "₹12 LPA", "100%"],
                  ["BBA", "₹6-8 LPA", "₹18 LPA", "100%"],
                  ["PGDM", "₹12-15 LPA", "₹35 LPA", "100%"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-muted/30"
                  >
                    <td className="p-4 font-semibold text-foreground">
                      {row[0]}
                    </td>
                    <td className="p-4 text-accent font-semibold">{row[1]}</td>
                    <td className="p-4 text-accent font-semibold">{row[2]}</td>
                    <td className="p-4 text-accent font-semibold">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Top Recruiters
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {recruiters.map((recruiter, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-foreground">{recruiter}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Placement Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Registration",
                  description:
                    "Students register with the placement cell in their final year.",
                },
                {
                  step: "2",
                  title: "Company Visits",
                  description:
                    "Recruitment teams from leading companies visit campus throughout the year.",
                },
                {
                  step: "3",
                  title: "Aptitude Test",
                  description:
                    "Companies conduct written aptitude and technical tests.",
                },
                {
                  step: "4",
                  title: "Interviews",
                  description:
                    "Group discussions and individual interviews with company representatives.",
                },
                {
                  step: "5",
                  title: "Offer & Selection",
                  description:
                    "Selected candidates receive offer letters with package details.",
                },
                {
                  step: "6",
                  title: "Joining",
                  description:
                    "Candidates join the organization post-graduation.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    {index !== 5 && (
                      <div className="absolute left-6 top-12 w-0.5 h-12 bg-muted"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <h4 className="font-bold text-foreground mb-2 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Placement Support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Resume Building",
                description:
                  "Expert guidance in creating impressive resumes and cover letters",
              },
              {
                title: "Interview Preparation",
                description:
                  "Mock interviews and coaching for technical and HR rounds",
              },
              {
                title: "Aptitude Training",
                description:
                  "Coaching for written tests and quantitative aptitude",
              },
              {
                title: "Soft Skills Development",
                description:
                  "Communication, presentation, and leadership skill training",
              },
              {
                title: "Career Counseling",
                description: "One-on-one guidance for career path selection",
              },
              {
                title: "Industry Networking",
                description:
                  "Networking events and industry meet-ups throughout the year",
              },
            ].map((support, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-foreground mb-3">
                  {support.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {support.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground">
              Hear from our alumni working at leading companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Higher Studies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Higher Studies & Scholarships
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-foreground mb-6">
                International Placements
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Students placed in USA, UK, Canada, Australia</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Average international salary: $60K-$100K USD</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Visa assistance and relocation support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>10% of students pursue international careers</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-foreground mb-6">
                Higher Education Abroad
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Students pursue MS from US universities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Partnership with international universities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>GMAT/GRE coaching and guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>15% of graduates pursue higher studies</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
