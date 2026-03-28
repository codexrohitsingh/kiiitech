import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, FileText, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions - KIITECH",
  description:
    "Complete information about KIITECH admissions process, eligibility criteria, courses, and fees.",
};

export default function Admissions() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-linear-to-br from-primary via-primary/95 to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/"
            className="text-accent hover:underline text-sm font-semibold"
          >
            ← Back to Home
          </Link>

          <div className="max-w-3xl mt-6">
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>

            <p className="text-xl opacity-95">
              Join KIITECH and start your journey towards a successful career.
              Explore our professional courses and simple admission process.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Programs & Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

            {/* BCA */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                BCA (Bachelor of Computer Applications)
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                A professional course focused on computer applications,
                programming, and software development.
              </p>

              <ul className="text-sm space-y-2">
                <li><strong>Duration:</strong> 3 Years (6 Semesters)</li>
                <li><strong>Eligibility:</strong> 12th Pass</li>
                <li><strong>Semester Fee:</strong> ₹25,000</li>
              </ul>
            </Card>

            {/* BBA */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                BBA (Bachelor of Business Administration)
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                Develop business knowledge, management skills,
                and leadership qualities.
              </p>

              <ul className="text-sm space-y-2">
                <li><strong>Duration:</strong> 3 Years (6 Semesters)</li>
                <li><strong>Eligibility:</strong> 12th Pass</li>
                <li><strong>Semester Fee:</strong> ₹25,000</li>
              </ul>
            </Card>

            {/* Diploma */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Diploma in Engineering
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                Skill-based technical education with industry-ready training.
              </p>

              <p className="font-semibold mb-2">
                Available Branches:
              </p>

              <ul className="list-disc list-inside text-sm mb-3 space-y-1">
                <li>Diploma in Mechanical Engineering</li>
                <li>Diploma in Electrical Engineering</li>
                <li>Diploma in Civil Engineering</li>
                <li>
                  Diploma in Artificial Intelligence and Machine Learning
                </li>
              </ul>

              <ul className="text-sm space-y-2">
                <li><strong>Duration:</strong> 2–3 Years</li>
                <li><strong>Eligibility:</strong> 10th Pass</li>
                <li><strong>Semester Fee:</strong> ₹25,000</li>
              </ul>
            </Card>

            {/* PGDM */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                PGDM (Post Graduate Diploma in Management)
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                Advanced management education designed to prepare students
                for leadership roles.
              </p>

              <p className="font-semibold mb-2">
                Specializations:
              </p>

              <ul className="list-disc list-inside text-sm mb-3 space-y-1">
                <li>PGDM in Business Administration</li>
                <li>PGDM in Human Resource Management</li>
                <li>PGDM in Marketing and Finance</li>
              </ul>

              <ul className="text-sm space-y-2">
                <li><strong>Duration:</strong> 2 Years (4 Semesters)</li>
                <li><strong>Eligibility:</strong> Bachelor Degree</li>
                <li><strong>Semester Fee:</strong> ₹35,000</li>
              </ul>
            </Card>

          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Course Fee Structure (Per Semester)
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">

            <table className="w-full border border-border">

              <thead className="bg-muted/30">
                <tr>
                  <th className="p-4 text-left">Course</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Semester Fee</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-4">
                    BCA (Bachelor of Computer Applications)
                  </td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4 font-semibold text-accent">
                    ₹20,000
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    BBA (Bachelor of Business Administration)
                  </td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4 font-semibold text-accent">
                    ₹20,000
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    Diploma Engineering (All Branches)
                  </td>
                  <td className="p-4">2–3 Years</td>
                  <td className="p-4 font-semibold text-accent">
                    ₹20,000
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    PGDM (All Specializations)
                  </td>
                  <td className="p-4">2 Years</td>
                  <td className="p-4 font-semibold text-accent">
                    ₹35,000
                  </td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Required Documents
          </h2>

          <Card className="p-8 max-w-4xl mx-auto">

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h4 className="font-bold mb-4">
                  Educational Documents
                </h4>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    10th Mark Sheet
                  </li>

                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    12th Mark Sheet
                  </li>

                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Transfer Certificate
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">
                  Personal Documents
                </h4>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Aadhaar Card
                  </li>

                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Passport Size Photos
                  </li>

                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Address Proof
                  </li>
                </ul>
              </div>

            </div>

          </Card>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Apply?
        </h2>

        <p className="mb-8">
          Start your application today and secure your future.
        </p>

        <div className="flex justify-center gap-4">

          <Button variant="secondary" size="lg" asChild>
            <Link href="/admissions/apply">
              Start Application
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Contact Admissions
            </Link>
          </Button>

        </div>

      </section>
    </>
  );
}