"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function ApplyNow() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Name should contain only letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (birthDate > today) {
        newErrors.dob = "Date of birth cannot be in the future.";
      } else if (age < 14) {
        newErrors.dob = "You must be at least 14 years old to apply.";
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }

    if (!formData.qualification.trim()) {
      newErrors.qualification = "Highest qualification is required.";
    }

    if (!formData.marks.trim()) {
      newErrors.marks = "Marks are required.";
    } else if (isNaN(Number(formData.marks)) || Number(formData.marks) < 0 || Number(formData.marks) > 100) {
      newErrors.marks = "Please enter valid marks (0-100).";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbyI4iYbOK7zhnvon8pbp4OZH5sWqzppCahe2y_W4O55_2GSKPj7_av-TekAmoBu3O8g/exec";

      const submitData = () => {
        return new Promise((resolve, reject) => {
          const params = new URLSearchParams();
          Object.entries(formData).forEach(([key, value]) => {
            params.append(key, value.toString());
          });

          const callbackName =
            "jsonp_callback_" + Math.round(100000 * Math.random());

          const script = document.createElement("script");
          const url = `${SCRIPT_URL}?${params.toString()}&callback=${callbackName}`;

          (window as any)[callbackName] = function (data: any) {
            delete (window as any)[callbackName];
            document.body.removeChild(script);
            resolve(data);
          };

          script.onerror = function () {
            delete (window as any)[callbackName];
            document.body.removeChild(script);
            reject(new Error("JSONP request failed"));
          };

          script.src = url;
          document.body.appendChild(script);

          setTimeout(() => {
            if ((window as any)[callbackName]) {
              delete (window as any)[callbackName];
              document.body.removeChild(script);
              reject(new Error("JSONP request timeout"));
            }
          }, 10000);
        });
      };

      const result = (await submitData()) as { result: string };

      if (result.result === "success") {
        toast({
          title: "Application Submitted Successfully!",
          description: "An email conformation has been sent.",
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
      } else {
        throw new Error("Failed to submit");
      }
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
      <main className="pt-24 pb-16 min-h-screen bg-linear-to-br from-[#3b0000] via-[#7a0000] to-[#1a0000]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-start">
            <Link
              href="/admissions"
              className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
            >
              ← Back to Admissions
            </Link>

            <h1 className="text-5xl font-extrabold mt-4 bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Admission Application
            </h1>

            <p className="text-gray-300 mt-3">
              Start your journey with Jharkhand’s No.1 Private College
            </p>
          </div>

          {/* Card */}
          <div className="relative rounded-2xl p-0.5 bg-linear-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-2xl">
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
                      placeholder="Your Name"
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.fullName ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
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
                      placeholder="YourEmail@gmail.com"
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.email ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
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
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.phone ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
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
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.dob ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.dob && (
                      <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                    )}
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
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.gender ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gender}
                      </p>
                    )}
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
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.course ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    >
                      <option value="">Select Course</option>
                      <option value="Bachelor of Computer Applications">
                        BCA (Bachelor of Computer Applications)
                      </option>
                      <option value="Bachelor of Business Administration">
                        BBA (Bachelor of Business Administration)
                      </option>

                      <option value="Diploma in Mechanical Engineering">
                        Diploma in Mechanical Engineering
                      </option>
                      <option value=" Diploma in Electrical Engineering">
                        Diploma in Electrical Engineering
                      </option>
                      <option value=" Diploma in Civil Engineering">
                        Diploma in Civil Engineering
                      </option>
                      <option value="Diploma in Artificial Intelligence and Machine Learning">
                        Diploma in Artificial Intelligence and Machine Learning
                      </option>

                      <option value="Post Graduate Diploma in Management">
                        PGDM (Post Graduate Diploma in Management)
                      </option>
                      <option value="PGDM in Business Administration">
                        PGDM in Business Administration
                      </option>
                      <option value="PGDM in Human Resource Management">
                        PGDM in Human Resource Management
                      </option>
                      <option value=" PGDM in Marketing and Finance">
                        PGDM in Marketing and Finance
                      </option>
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.course}
                      </p>
                    )}
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
                      placeholder="10th / 12th / Graduate"
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.qualification ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.qualification && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.qualification}
                      </p>
                    )}
                  </div>

                  {/* Passing Year */}
                  {/* <div className="space-y-2">
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
                  </div> */}

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
                      className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.marks ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.marks && (
                      <p className="text-red-500 text-xs mt-1">{errors.marks}</p>
                    )}
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
                    className={`w-full p-3 rounded-lg bg-[#1a0000] border ${errors.address ? "border-red-500" : "border-yellow-600"} text-white focus:ring-2 focus:ring-yellow-400`}
                  ></textarea>
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold rounded-xl bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-lg hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
