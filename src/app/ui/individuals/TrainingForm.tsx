"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  age: string;
  preferredTraining: string;
  referral: string;
  reason: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  age?: string;
  preferredTraining?: string;
  referral?: string;
  reason?: string;
}

const TrainingForm: React.FC = () => {
const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    preferredTraining: "",
    referral: "",
    reason: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email Address is required";
    if (!formData.phone.trim() || !/^\+?[0-9]{7,15}$/.test(formData.phone))
      newErrors.phone = "Valid Phone Number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.age.trim() || isNaN(Number(formData.age)) || Number(formData.age) < 16)
      newErrors.age = "Valid Age (16+) is required";
    if (!formData.preferredTraining)
      newErrors.preferredTraining = "Preferred Training is required";
    if (!formData.referral) newErrors.referral = "Please select how you heard about us";
    if (!formData.reason.trim() || formData.reason.length < 10)
      newErrors.reason = "Reason must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      setSuccess(null);

      const res = await axios.post("/api/training", formData);
      if (res.status === 201) {
        setSuccess("Form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          age: "",
          preferredTraining: "",
          referral: "",
          reason: "",
        });
        setErrors({});
        router.push("/success");
      }
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
    setErrors({ reason: "Something went wrong. Please try again." });
    } finally {
    setSubmitting(false);
    }
      };

      const placeholderClass =
    'placeholder:text-lg md:placeholder:text-xl placeholder:font-extrabold placeholder:tracking-wide placeholder:uppercase placeholder:text-black';


  return (

    <div className=" ">
      <div className="mb-6 md:mb-15">
       <h2 className="text-2xl md:text-3xl text-black font-bold text-center mb-5 md:mb-7">Trainings</h2>
      <p className="text-center text-sm md:text-xl text-black">
        Ready To Grow Your Skills? Fill Out This Form To Join Our Next Training Cycle.
      </p>
      </div>
      

      <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6  rounded-lg shadow-xl space-y-4 "
    >
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600 rounded ${placeholderClass}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        {/* Phone Number */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        {/* Country */}
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full p-2 border-1 border-gray-600  h-10 md:h-15  rounded ${placeholderClass}`}
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        {/* Age */}
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass}` }
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        {/* Preferred Training */}
        <div>
          <select
            name="preferredTraining"
            value={formData.preferredTraining}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded text-black md:text-xl ${
            formData.preferredTraining === "" ? "font-extrabold" : "font-normal"
          } ${placeholderClass}` }
          >
            <option value="" disabled>
              Preferred Training
              </option>
            {[
              "Soft Skills Development",
              "Technical Skills",
              "Customer Success & Experience (CX)",
              "Project & Operations Management",
              "Career Readiness & Personal Branding",
              "AI & Digital Transformation",
              "Sales & Communication",
              "Remote Work Tools",
              "CRM & Workflow Systems",
              "IoT & Smart Tech Basics",
            ].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.preferredTraining && (
            <p className="text-red-500 text-sm">{errors.preferredTraining}</p>
          )}
        </div>
        {/* Referral */}
        <div>
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded text-black md:text-xl ${
            formData.preferredTraining === "" ? "font-extrabold" : "font-normal"
          } ${placeholderClass}` }
          >
            <option value="">How Did You Hear About Us</option>
            {["Facebook", "Twitter", "LinkedIn"].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.referral && (
            <p className="text-red-500 text-sm">{errors.referral}</p>
          )}
        </div>
        {/* Reason */}
        <div className="md:col-span-2">
          <textarea
            name="reason"
            placeholder="Why Do You Want To Join?"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full p-2 border-1 border-gray-600  rounded ${placeholderClass}` }
            rows={4}
          />
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      {success && <p className="text-green-600 text-center">{success}</p>}
    </form>
    </div>
    
  );
};

export default TrainingForm;
