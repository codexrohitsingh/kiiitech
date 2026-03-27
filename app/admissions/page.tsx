import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { CheckCircle, Clock, FileText, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admissions - KIITECH',
  description: 'Complete information about KIITECH admissions process, eligibility criteria, application deadlines, and fees.',
  keywords: ['Admissions', 'Apply', 'Eligibility', 'Application Process'],
}

export default function Admissions() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-linear-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
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
              Admissions
            </h1>
            <p className="text-xl opacity-95 mb-8">
              Join KIITECH and start your journey towards a successful career.
              Simple application process, transparent criteria, guaranteed
              opportunity.
            </p>
            {/* <Button variant="secondary" size="lg" asChild>
              <a href="#apply-now" className="flex items-center gap-2">
                Apply Now
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                program: "BCA",
                duration: "3 Years",
                eligibility: "12th Pass",
                seats: "100",
              },
              {
                program: "Diploma",
                duration: "2-3 Years",
                eligibility: "10th Pass",
                seats: "150",
              },
              {
                program: "BBA",
                duration: "3 Years",
                eligibility: "12th Pass",
                seats: "80",
              },
              {
                program: "PGDM",
                duration: "2 Years",
                eligibility: "Bachelor Degree",
                seats: "60",
              },
            ].map((prog, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {prog.program}
                </h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>
                    <strong>Duration:</strong> {prog.duration}
                  </p>
                  <p>
                    <strong>Eligibility:</strong> {prog.eligibility}
                  </p>
                  <p>
                    <strong>Seats:</strong> {prog.seats}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BCA Program",
                criteria: [
                  "Passed 10+2 (12th Standard) from recognized board",
                  "Any stream (Science/Commerce/Arts)",
                  "No minimum aggregate requirement",
                  "Age: No upper age limit",
                ],
              },
              {
                title: "Diploma Program",
                criteria: [
                  "Passed 10th Standard from recognized board",
                  "Any stream eligible",
                  "Minimum 40% in aggregate",
                  "Age: No upper age limit",
                ],
              },
              {
                title: "BBA Program",
                criteria: [
                  "Passed 10+2 (12th Standard)",
                  "Any stream (Science/Commerce/Arts)",
                  "No minimum aggregate requirement",
                  "Good communication skills preferred",
                ],
              },
              {
                title: "PGDM Program",
                criteria: [
                  "Bachelor degree from recognized university",
                  "Any discipline eligible",
                  "Minimum 50% aggregate or equivalent",
                  "Preference: 2+ years work experience",
                ],
              },
            ].map((eligibility, index) => (
              <Card
                key={index}
                className="p-8 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {eligibility.title}
                </h3>
                <ul className="space-y-3">
                  {eligibility.criteria.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple and straightforward process to apply at KIITECH
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Visit Our Portal",
                  description:
                    "Visit the admission portal and create your account. Provide basic information.",
                },
                {
                  step: "2",
                  title: "Fill Application Form",
                  description:
                    "Complete the detailed application form with personal and educational details.",
                },
                {
                  step: "3",
                  title: "Upload Documents",
                  description:
                    "10th/12th marksheet, ID proof, address proof, passport size photo, and other required documents.",
                },
                {
                  step: "4",
                  title: "Pay Application Fee",
                  description:
                    "Pay the non-refundable application fee (₹500). Multiple payment options available.",
                },
                {
                  step: "5",
                  title: "Entrance Exam (if applicable)",
                  description:
                    "Appear for the entrance test. Some programs require merit-based selection.",
                },
                {
                  step: "6",
                  title: "Counseling & Admission",
                  description:
                    "Attend counseling session, confirm seat, and submit enrollment fee.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold shrink-0">
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

      {/* Important Dates */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Important Dates
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold text-foreground">
                    Event
                  </th>
                  <th className="text-left p-4 font-bold text-accent">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Application Window Opens", "January 2026"],
                  ["Last Date for Applications", "June 2026"],
                  ["Entrance Exam (if applicable)", "July 2026"],
                  ["Results Declaration", "August 2026"],
                  ["Counseling Round", "August-September 2026"],
                  ["Classes Begin", "September 2026"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-muted/50"
                  >
                    <td className="p-4 font-semibold text-foreground">
                      {row[0]}
                    </td>
                    <td className="p-4 text-muted-foreground">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fees & Scholarships */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Fees & Scholarships
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                Annual Fee Structure
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>
                  <strong>BCA/BBA:</strong> ₹1,50,000 - ₹2,00,000 per annum
                </p>
                <p>
                  <strong>Diploma:</strong> ₹80,000 - ₹1,20,000 per annum
                </p>
                <p>
                  <strong>PGDM:</strong> ₹3,00,000 - ₹4,00,000 per annum
                </p>
                <p className="pt-4 border-t border-border">
                  <strong>Hostel:</strong> ₹1,00,000 - ₹1,50,000 per annum
                  (optional)
                  <br />
                  <strong>Application Fee:</strong> ₹500 (Non-refundable)
                </p>
              </div>
            </Card>

            <Card className="p-8 border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                Scholarship Programs
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Merit Scholarship",
                    amount: "Up to 50% waiver",
                  },
                  {
                    name: "Need-Based Scholarship",
                    amount: "Case-by-case basis",
                  },
                  {
                    name: "Sports Scholarship",
                    amount: "For outstanding athletes",
                  },
                  {
                    name: "Girl Child Scholarship",
                    amount: "Special support",
                  },
                ].map((scholarship, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start p-3 bg-muted/30 rounded"
                  >
                    <span className="font-semibold text-foreground">
                      {scholarship.name}
                    </span>
                    <span className="text-accent font-semibold text-sm">
                      {scholarship.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Required Documents
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-border bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    category: "Educational Documents",
                    items: [
                      "10th Standard Mark Sheet",
                      "12th Standard Mark Sheet",
                      "Transfer Certificate",
                      "Character Certificate",
                      "Admit Card/Enrollment Number",
                    ],
                  },
                  {
                    category: "Personal Documents",
                    items: [
                      "Aadhaar Card / PAN Card",
                      "Passport / Voter ID / Driving License",
                      "Address Proof (Utility Bill/Lease)",
                      "Passport Size Photos (4x4 cm, 6 nos)",
                      "Caste Certificate (if applicable)",
                    ],
                  },
                  {
                    category: "Additional Documents",
                    items: [
                      "Sports Certificate (if applicable)",
                      "Award Certificate (if applicable)",
                      "Income Certificate (if applicable)",
                      "Medical Certificate",
                      "Parental Consent Form",
                    ],
                  },
                  {
                    category: "Banking Documents",
                    items: [
                      "Bank Account Passbook",
                      "Cancelled Cheque",
                      "Parent/Guardian ID Proof",
                      "Fee Proof (after deposit)",
                      "Hostel Allotment Letter",
                    ],
                  },
                ].map((doc, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-foreground mb-4">
                      {doc.category}
                    </h4>
                    <ul className="space-y-2">
                      {doc.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-2 text-muted-foreground text-sm"
                        >
                          <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="apply-now"
        className="py-16 bg-primary text-primary-foreground"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Start your application now and take the first step towards a
            successful career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/admissions/apply">Start Application</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-white bg-black border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
