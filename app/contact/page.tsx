'use client'

import { Metadata } from 'next'
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
              Get in Touch
            </h1>
            <p className="text-xl opacity-95">
              We are here to answer your questions and help you with admissions
              or any other inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
          </div>

          {/* Office Hours */}
          <Card className="p-8 border-border bg-muted/30 mb-16">
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
          </Card>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Inquiry about..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground">
                  * Required fields. We will respond to your inquiry within 24
                  hours.
                </p>
              </form>
            </div>

            {/* Map & Info */}
            <div>
              <div className="bg-white rounded-lg border border-border p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Visit Our Campus
                  </h3>
                  <div className="mb-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-foreground mb-2">
                          Main Campus
                        </h4>
                        <p className="text-muted-foreground">
                          Kalam Institute of Innovation and Technology
                          <br />
                          Campus Road, City Name
                          <br />
                          State - 123456
                          <br />
                          Country
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">
                          Admission Office
                        </h4>
                        <p className="text-muted-foreground">
                          Building A, Ground Floor
                          <br />
                          Easy to locate near main gate
                          <br />
                          Available on weekdays
                        </p>
                      </div>
                      <div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1927.8919667975317!2d85.8781492!3d22.0904362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e43e810109cd9%3A0xf96556f30c85347b!2sDr.%20APJ%20Abdul%20Kalam%20Institute%20of%20Innovation%20and%20Technology!5e1!3m2!1sen!2sin!4v1774375327459!5m2!1sen!2sin"
                          height="450"
                          width="510"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need directions? Use your preferred maps application to find
                    KIITECH campus.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
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
      </section>

      <Footer />
    </>
  );
}
