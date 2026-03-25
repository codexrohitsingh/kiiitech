'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      /**
       * IMPORTANT:
       * 1. Deploy the Apps Script from /scripts/contact-form-handler.gs as a Web App.
       * 2. Replace the URL below with your deployed Web App URL.
       */
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbyBV6RpQpqawhaZ-alX5fnvUfpZFXZbmJmXgDtQRbwIdI1CrD4QZ8QqIcY7ZdyzIYZ8sQ/exec";
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value.toString());
      });

      console.log("Sending contact form data to:", SCRIPT_URL);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for reaching out! We will get back to you soon.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-accent/20 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-secondary/30 blur-[140px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-accent mb-12 w-fit"
          >
            <span className="transition group-hover:-translate-x-1">←</span>
            Back
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Let’s create something <br />
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  amazing together
                </span>
              </h1>

              <p className="text-lg opacity-90 mb-10 max-w-xl">
                Whether you're applying, exploring, or collaborating — our team
                is ready to help you move forward.
              </p>

              {/* Quick contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-[1.03] transition">
                  <p className="text-sm opacity-80">Email us</p>
                  <p className="font-semibold">admissions@kiit.edu</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-[1.03] transition">
                  <p className="text-sm opacity-80">Call us</p>
                  <p className="font-semibold">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-accent via-secondary to-accent rounded-3xl blur opacity-30 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white/85 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/40">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Send a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Full Name" },
                    { name: "email", label: "Email" },
                    { name: "subject", label: "Subject" },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <input
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white/70 focus:ring-2 focus:ring-accent outline-none transition"
                      />
                      <label
                        className="absolute left-4 top-2 text-sm text-muted-foreground transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:top-2 peer-focus:text-sm"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}

                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl border bg-white/70 focus:ring-2 focus:ring-accent transition"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-secondary hover:scale-[1.03] active:scale-[0.97] transition shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message 🚀"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER SECTION */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1927.8919667975317!2d85.8781492!3d22.0904362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e43e810109cd9%3A0xf96556f30c85347b!2sDr.%20APJ%20Abdul%20Kalam%20Institute%20of%20Innovation%20and%20Technology!5e1!3m2!1sen!2sin!4v1774375327459!5m2!1sen!2sin"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-3">Visit our campus</h3>
              <p className="text-muted-foreground">
                Experience innovation in person. Our campus is open for visits
                during weekdays.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Kalam Institute of Innovation and Technology <br />
                Majhgaon, Jharkhand 833214 <br />
                India
              </p>

              <p>
                Admission Office <br />
                Ground Floor, Building A <br />
                Mon – Fri
              </p>
            </div>

            <Button className="w-fit px-6 rounded-xl">Open in Maps 📍</Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="py-16 bg-background">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">
                Reach us via phone during office hours
              </p>
              <a
                href="tel:+1234567890"
                className="text-accent font-semibold hover:text-primary"
              >
                +1 (234) 567-890
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                +1 (234) 567-891
              </p>
            </Card>
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Send us an email anytime
              </p>
              <a
                href="mailto:info@kiitech.edu"
                className="text-accent font-semibold hover:text-primary"
              >
                info@kiitech.edu
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                admissions@kiitech.edu
              </p>
            </Card>
            <Card className="p-8 border-border bg-white hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground mb-4">Visit our campus</p>
              <p className="font-semibold text-foreground">
                KIITECH Campus
                <br />
                <span className="text-sm text-muted-foreground">
                  City, State - Postal Code
                </span>
              </p>
            </Card>
          </div> */}

      {/* Office Hours */}
      {/* <Card className="p-8 border-border bg-muted/30 mb-16">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      Monday - Friday
                    </p>
                    <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      Saturday
                    </p>
                    <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </Card> */}
      {/* </div>  */}
      {/* </section>  */}

      {/* FAQ Section */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How do I apply for admission?",
                answer:
                  "You can apply through our online admission portal or visit the admission office. Check the Admissions page for detailed information about eligibility and application process.",
              },
              {
                question: "What are the eligibility criteria?",
                answer:
                  "Eligibility varies by program. Please visit the specific program page or contact our admissions office for detailed requirements.",
              },
              {
                question: "Is there a campus tour available?",
                answer:
                  "Yes! We offer campus tours. Contact our admissions office to schedule a visit.",
              },
              {
                question: "What is the average placement rate?",
                answer:
                  "KIITECH has a 100% placement rate with average package of Rs. 8-10 LPA depending on the program.",
              },
              {
                question: "Are scholarship programs available?",
                answer:
                  "Yes, we offer merit-based and need-based scholarships. Contact the admissions office for details.",
              },
              {
                question: "What is the hostel facility like?",
                answer:
                  "We have modern hostel facilities with all amenities. Contact us for detailed information about hostel accommodation.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-foreground mb-2">
                  {faq.question}
                </h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
