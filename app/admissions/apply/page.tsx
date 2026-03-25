'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Loader2, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ApplyNow() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    course: '',
    qualification: '',
    passingYear: '',
    marks: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
       * 1. Deploy the Apps Script from /scripts/admission-form-handler.gs as a Web App.
       * 2. Replace the URL below with your deployed Web App URL.
       * 3. Make sure the spreadsheet ID in the script matches your sheet: 1UaMTyzzkD5Y5Rmu9ursmmIikgJEOsn7cynA7O1YsR_s
       */
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTixTHH07NqeVXW9ZoyeIfRHsNLOsWQQd1FGlNDjdHV-Ieik-imi5R_L1A9jcvlU8/exec'
      
      // Convert formData to URLSearchParams for better compatibility with Apps Script no-cors
      const params = new URLSearchParams()
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value.toString())
      })

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      })

      // With mode: 'no-cors', we won't get a proper response body, but we can assume success if no error is thrown
      toast({
        title: "Application Submitted Successfully!",
        description: "Your data has been sent to the Google Sheet. Our team will contact you soon.",
      })
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        course: '',
        qualification: '',
        passingYear: '',
        marks: '',
        address: '',
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

    {/* Premium Card */}
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-2xl">
      <div className="bg-[#2b0000]/90 backdrop-blur-xl rounded-2xl p-8">

        {/* Badge */}
        {/* <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-bold px-6 py-2 rounded-full shadow-lg">
             No.1 College Application
          </div>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Input Style */}
            {[
              { label: "Full Name",  type: "text", placeholder: "Rohit Singh" },
              { label: "Email Address",  type: "email", placeholder: "example@gmail.com" },
              { label: "Phone Number",  type: "tel", placeholder: "+91 00000 00000" },
              { label: "Date of Birth", type: "date" },
            ].map((field, i) => (
              <div key={i} className="space-y-2">
                <label className="text-yellow-300 text-sm font-semibold">
                  {/* {field.label} * */}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required value={field.name}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded-lg bg-[#1a0000] border border-yellow-600 text-white placeholder-gray-400 
                  focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                />
              </div>
            ))}

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-yellow-300 text-sm font-semibold">Gender *</label>
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
              <label className="text-yellow-300 text-sm font-semibold">Select Program *</label>
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
              <label className="text-yellow-300 text-sm font-semibold">Highest Qualification *</label>
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
              <label className="text-yellow-300 text-sm font-semibold">Year of Passing *</label>
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
              <label className="text-yellow-300 text-sm font-semibold">Aggregate Marks (%) *</label>
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
            <label className="text-yellow-300 text-sm font-semibold">Full Address *</label>
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
              className="w-full py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
              text-black shadow-lg hover:scale-[1.02] hover:shadow-yellow-500/50 transition-all"
            >
              {isSubmitting ? "Processing..." : "Submit Application"}
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              By submitting, you agree to Terms & Privacy Policy
            </p>
          </div>

        </form>
      </div>
    </div>
  </div>
</main>

      <Footer />
    </>
  )
}
