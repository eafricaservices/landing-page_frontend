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

      // Map frontend field names to backend expected field names
      const backendData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        age: formData.age,
        preferredTraining: formData.preferredTraining,
        howDidYouHear: formData.referral,  // Backend expects 'howDidYouHear'
        whyJoin: formData.reason,          // Backend expects 'whyJoin'
      };

      console.log("Sending data to backend:", backendData);

      const res = await axios.post("https://e-africa-platform-backend.onrender.com/api/trainings/submit", backendData);
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
    console.error("Training form submission error:", error);
    
    if (axios.isAxiosError(error)) {
        const statusCode = error.response?.status;
        const data = error.response?.data || {};
        
        console.error("Status Code:", statusCode);
        console.error("Error Response:", data);
        
        if (statusCode === 400 && data.errors) {
            // Handle validation errors
            console.error("Validation errors:", data.errors);
            setErrors({ reason: `Validation error: ${JSON.stringify(data.errors)}` });
        } else {
            setErrors({ reason: data.message || error.message || "Something went wrong. Please try again." });
        }
    } else if (error instanceof Error) {
        console.error("General error:", error.message);
        setErrors({ reason: error.message });
    } else {
        console.error("Unknown error:", error);
        setErrors({ reason: "Something went wrong. Please try again." });
    }
    } finally {
    setSubmitting(false);
    }
      };

      const placeholderClass =
    'placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide';


  return (

    <div className="  ">
      <div className="mb-6 md:mb-10">
       <h2 className="text-2xl md:text-3xl text-black font-bold text-center mb-5 md:mb-7">Trainings</h2>
      <p className="text-center text-sm md:text-xl text-black">
        Ready To Grow Your Skills? Fill Out This Form To Join Our Next Training Cycle.
      </p>
      </div>
      

      <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 mt-10 py-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] space-y-4 bg-white"
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
            className={`w-full p-2 h-12 md:h-15 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
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
            className={`w-full p-2 h-12 md:h-15 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
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
            className={`w-full p-2 h-12 md:h-15 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
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
            className={`w-full p-2 h-12 md:h-15 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}` }
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        {/* Age */}
        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full p-2 h-12 md:h-15 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}` }
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        {/* Preferred Training */}
        <div>
          <select
            name="preferredTraining"
            value={formData.preferredTraining}
            onChange={handleChange}
            required
            data-placeholder={formData.preferredTraining === ""}
            className="w-full p-2 h-12 md:h-15 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm font-medium"
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
            required
            data-placeholder={formData.referral === ""}
            className="w-full p-2 h-12 md:h-15 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm font-medium"
          >
            <option value="" disabled>How Did You Hear About Us</option>
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
            className={`w-full p-2 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}` }
            rows={4}
          />
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 bg-green-600 text-xl uppercase text-white rounded hover:bg-green-700 disabled:opacity-50"
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
