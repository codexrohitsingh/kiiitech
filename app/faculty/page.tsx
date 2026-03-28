import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Phone, GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty - KIITECH",
  description:
    "Meet KIITECH faculty members - experienced educators and industry professionals dedicated to student success.",
  keywords: ["Faculty", "Teachers", "Professors", "Instructors"],
};

export default function Faculty() {
  const faculty = [
    {
      name: "Dr. Rajesh Verma",
      title: "Professor & Head - Computer Science",
      department: "Computer Science & Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      experience: "18 Years",
      qualifications: "Ph.D. Computer Science, IIT",
      specialization: "AI & Machine Learning",
      email: "r.verma@kiitech.edu",
    },
    {
      name: "Prof. Neha Sharma",
      title: "Associate Professor - Electronics",
      department: "Electronics & Communication",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      experience: "15 Years",
      qualifications: "M.Tech Electronics, NIT",
      specialization: "Embedded Systems",
      email: "n.sharma@kiitech.edu",
    },
    {
      name: "Dr. Amit Patel",
      title: "Professor - Mechanical Engineering",
      department: "Mechanical Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      experience: "20 Years",
      qualifications: "Ph.D. Mechanical, IIT Delhi",
      specialization: "Thermal & Fluid Mechanics",
      email: "a.patel@kiitech.edu",
    },
    {
      name: "Prof. Priya Singh",
      title: "Assistant Professor - Management",
      department: "Business Management",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      experience: "12 Years",
      qualifications: "MBA, University of Delhi",
      specialization: "Strategic Management",
      email: "p.singh@kiitech.edu",
    },
    {
      name: "Dr. Vikram Kumar",
      title: "Senior Lecturer - Civil Engineering",
      department: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      experience: "10 Years",
      qualifications: "M.Tech Civil, NIT Rourkee",
      specialization: "Structural Analysis",
      email: "v.kumar@kiitech.edu",
    },
    {
      name: "Prof. Anjali Desai",
      title: "Assistant Professor - Mathematics",
      department: "Mathematics & Physics",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      experience: "8 Years",
      qualifications: "M.Sc Mathematics, Delhi University",
      specialization: "Applied Mathematics",
      email: "a.desai@kiitech.edu",
    },
  ];

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
              Our Faculty
            </h1>
            <p className="text-xl opacity-95">
              Meet our world-class faculty - experienced educators and industry
              experts dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Expert Faculty
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professors and lecturers committed to delivering
              excellence in education and mentoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-3">
                    {member.title}
                  </p>

                  <div className="space-y-3 text-sm mb-4">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Department
                        </p>
                        <p className="text-muted-foreground">
                          {member.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Qualifications
                        </p>
                        <p className="text-muted-foreground">
                          {member.qualifications}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-3 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-foreground mb-1">
                      Experience: {member.experience}
                    </p>
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Specialization: {member.specialization}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-xs font-semibold"
                    >
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "500+",
                label: "Total Faculty Members",
              },
              {
                number: "15+",
                label: "Average Experience",
              },
              {
                number: "95%",
                label: "Ph.D./M.Tech Holders",
              },
              {
                number: "100+",
                label: "Publications & Patents",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-6 border-border bg-white">
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground font-semibold text-sm">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Faculty Development & Training
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Continuous Professional Development",
                points: [
                  "Regular training workshops and seminars",
                  "Industry certification programs",
                  "International faculty exchange programs",
                  "Research paper publication support",
                  "Advanced degree programs",
                ],
              },
              {
                title: "Teaching Excellence Initiatives",
                points: [
                  "Pedagogy and curriculum development",
                  "Mentorship programs",
                  "Teaching excellence awards",
                  "Student feedback and improvement",
                  "Use of innovative teaching methods",
                ],
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="p-8 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {program.title}
                </h3>
                <ul className="space-y-3">
                  {program.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Research & Innovation
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Active Research Areas",
                content:
                  "Our faculty conducts cutting-edge research in AI/ML, IoT, blockchain, renewable energy, and sustainable development.",
              },
              {
                title: "Patents & Publications",
                content:
                  "Over 100+ patents filed and 500+ research papers published in reputed national and international journals.",
              },
              {
                title: "Industry Collaborations",
                content:
                  "Partnerships with leading tech companies for applied research and technology development projects.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-foreground mb-4">{item.title}</h4>
                <p className="text-muted-foreground">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
