'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useToast } from '@/hooks/use-toast'

export default function ApplyNow() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    qualification: "",
    passingYear: "",
    marks: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxTixTHH07NqeVXW9ZoyeIfRHsNLOsWQQd1FGlNDjdHV-Ieik-imi5R_L1A9jcvlU8/exec";

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
        title: "Application Submitted Successfully!",
        description: "Your data has been sent to the Google Sheet.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        course: "",
        qualification: "",
        passingYear: "",
        marks: "",
        address: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-[#3b0000] via-[#7a0000] to-[#1a0000]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-start">
            <Link
              href="/admissions"
              className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
            >
              ← Back to Admissions
            </Link>

            <h1 className="text-5xl font-extrabold mt-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Admission Application
            </h1>

            <p className="text-gray-300 mt-3">
              Start your journey with Jharkhand’s No.1 Private College
            </p>
          </div>

          {/* Card */}
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-2xl">
            <div className="bg-[#2b0000]/90 backdrop-blur-xl rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* ✅ NAME */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName" // ✅ FIXED
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Rohit Singh"
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* ✅ EMAIL */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rs21rohit@gmail.com"
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* DOB */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Course */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Select Program *
                    </label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Select Course</option>
                      <option value="bca">BCA</option>
                      <option value="bba">BBA</option>
                      <option value="diploma">Diploma Engineering</option>
                      <option value="pgdm">PGDM</option>
                    </select>
                  </div>

                  {/* Qualification */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="12th / Graduate"
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Passing Year */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Year of Passing *
                    </label>
                    <input
                      type="number"
                      name="passingYear"
                      required
                      value={formData.passingYear}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Marks */}
                  <div className="space-y-2">
                    <label className="text-yellow-300 text-sm font-semibold">
                      Aggregate Marks (%) *
                    </label>
                    <input
                      type="number"
                      name="marks"
                      required
                      value={formData.marks}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-yellow-300 text-sm font-semibold">
                    Full Address *
                  </label>
                  <textarea
                    name="address"
                    rows={3}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-lg hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}