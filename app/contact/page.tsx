"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// ✅ TYPE FIX
type FormDataType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ safer typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ typed fields
  const fields: { name: keyof FormDataType; label: string }[] = [
    { name: "name", label: "Full Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "number" },
    { name: "subject", label: "Subject" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbyBV6RpQpqawhaZ-alX5fnvUfpZFXZbmJmXgDtQRbwIdI1CrD4QZ8QqIcY7ZdyzIYZ8sQ/exec";

      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value.toString());
      });

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

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
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
  };

  return (
    <>
      <section className="relative pt-8 pb-28 overflow-hidden bg-[#0b1633] text-white">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-accent/20 text-accent blur-[160px] rounded-full"></div>
          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px]  blur-[140px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-yellow-400 mb-12 w-fit"
          >
            <span className="transition group-hover:-translate-x-1">←</span>
            Back
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Where questions turn into <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  opportunities
                </span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-xl">
                Whether you're planning to apply, exploring our programs, or
                seeking guidance for your academic journey, our team at KIITECH
                is here to support you at every step. From admissions and course
                selection to career opportunities, we are committed to helping
                you make the right decisions for a successful future.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-semibold">office@kiitech.org</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                  <p className="text-sm text-white/60">Call us</p>
                  <p className="font-semibold">+91 9337736501</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative group">
              {/* Glow border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-3xl blur opacity-30"></div>

              {/* Form Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Start Your Admission Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map((field) => (
                    <div key={field.name} className="relative">
                      <input
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-white/20 bg-white/10 text-white placeholder-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                      />
                      <label
                        className="absolute left-4 top-2 text-sm text-white/60 transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300"
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
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 text-black hover:opacity-90 transition"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
              title="Campus Map"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-3">Visit Our Campus</h3>
              <p className="text-muted-foreground">
                Experience the vibrant learning environment at KIITech, where
                innovation, discipline, and practical education come together.
                Explore our modern classrooms, well-equipped library, and our
                unique 9-hour learning model designed to shape industry-ready
                professionals. We welcome you to visit us on weekdays and
                discover your future with us.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology
                (KIITech) <br />
                Majhgaon, West Singhbhum, <br />
                Jharkhand – 833214, India
              </p>

              <p>
                Admission Office <br />
                Open: Monday – Friday <br />
                Time: 10:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
