import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ProgramCard } from '@/components/program-card'
import Link from 'next/link'
import Image from "next/image";
import { ArrowRight, BookOpen, Users, Building2, TrendingUp, Award, Zap } from 'lucide-react'
import { ApplyNow } from "@/components/apply";

export const metadata: Metadata = {
  title: 'KIITECH - Excellence in Technical Education',
  description: 'Discover world-class BCA, Diploma, BBA, and PGDM programs at KIITECH. Industry-focused education with 100% placement support.',
  openGraph: {
    title: 'KIITECH - Excellence in Technical Education',
    description: 'Discover world-class BCA, Diploma, BBA, and PGDM programs at KIITECH',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 text-sm font-semibold">
                Premier Technical Institute
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                Innovation in Education, Excellence in Practice
              </h1>
              <p className="text-lg opacity-95 mb-8 leading-relaxed max-w-xl">
                Experience transformative education at KIITECH, where
                cutting-edge technology meets academic excellence. Join
                thousands of successful graduates shaping the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/admissions" className="flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="">
                  <Link href="#programs">Explore Programs </Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15K+</div>
                  <div className="text-sm opacity-90">Graduates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Industry Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[452/384] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero3.jpeg"
                  alt="Campus life"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-red-800 via-red-900 to-red-950 p-6 rounded-2xl shadow-2xl border border-yellow-400/30">
                <div className="flex items-center gap-4">
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col leading-tight">
                    {/* Gold badge */}
                    <div className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold text-yellow-300 bg-yellow-400/10 border border-yellow-400/40 tracking-wide shadow-sm">
                      Accredited & Recognized
                    </div>

                    {/* Subtext */}
                    <div className="text-xs text-yellow-200/80 tracking-wide mt-1">
                      International Standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              World-Class Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse range of programs designed to meet the
              evolving demands of the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard
              title="BCA Program"
              description="Bachelor of Computer Applications with industry-focused curriculum"
              duration="3 Years"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
              href="/programs/bca"
              icon={<BookOpen className="w-6 h-6 text-primary" />}
            />
            <ProgramCard
              title="Diploma Programs"
              description="Advanced technical diplomas in various engineering fields"
              duration="2-3 Years"
              image="https://images.unsplash.com/photo-1516321318423-f06b85d504b6?w=400&h=300&fit=crop"
              href="/programs/diploma"
              icon={<Building2 className="w-6 h-6 text-primary" />}
            />
            <ProgramCard
              title="BBA Program"
              description="Bachelor of Business Administration for future business leaders"
              duration="3 Years"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
              href="/programs/bba"
              icon={<TrendingUp className="w-6 h-6 text-primary" />}
            />
            <ProgramCard
              title="PGDM Program"
              description="Post Graduate Diploma in Management for career advancement"
              duration="2 Years"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
              href="/programs/pgdm"
              icon={<Zap className="w-6 h-6 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose KIITECH?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience education that transforms lives and creates
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Expert Faculty",
                description:
                  "Learn from industry professionals with years of practical experience",
              },
              {
                icon: <Building2 className="w-8 h-8 text-accent" />,
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art labs, libraries, and learning spaces",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: "100% Placements",
                description: "Guaranteed placement support with top companies",
              },
              {
                icon: <Award className="w-8 h-8 text-accent" />,
                title: "Industry Partnerships",
                description:
                  "Strong connections with leading global organizations",
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Innovation Hub",
                description:
                  "Cutting-edge research and development opportunities",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-accent" />,
                title: "Holistic Development",
                description:
                  "Programs designed for overall personality development",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15K+</div>
              <div className="text-lg opacity-90">Successful Graduates</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Placement Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Corporate Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join KIITECH and become part of a community that values innovation,
            excellence, and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link href="/admissions/apply">
                <ApplyNow />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
