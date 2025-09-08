"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  linkedin: string;
  desiredRole: string;
  preference: string;
  cv: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  linkedin?: string;
  desiredRole?: string;
  preference?: string;
  cv?: string;
}

const TalentPoolForm: React.FC = () => {
const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    linkedin: "",
    desiredRole: "",
    preference: "",
    cv: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email Address is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.linkedin.trim())
      newErrors.linkedin = "LinkedIn profile is required";
    if (!formData.desiredRole.trim())
      newErrors.desiredRole = "Desired Role is required";
    if (!formData.preference)
      newErrors.preference = "Preference is required";
    if (!formData.cv) newErrors.cv = "CV upload is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      setSuccess(null);

        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
            formPayload.append(key, value); 
        } else if (typeof value === "string") {
            formPayload.append(key, value); 
        }
        });

      const res = await axios.post("/api/talent-pool", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        setSuccess("Form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          country: "",
          linkedin: "",
          desiredRole: "",
          preference: "",
          cv: null,
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
      setErrors({ cv: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

   const placeholderClass =
    'placeholder:text-lg md:placeholder:text-xl placeholder:font-extrabold placeholder:tracking-wide placeholder:uppercase placeholder:text-black';


  return (
    <div>
        <h2 className="text-2xl font-bold mb-10 text-black text-center">JOIN OUR TALENT POOL</h2>

    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mt-7 md:mt-15 mx-auto p-6  rounded-lg shadow-2xl space-y-6"
    >
      <div className=" flex flex-col md:flex-row gap-5 md:gap-10">
        <div className=" w-1/2 flex flex-col gap-5 md:gap-9">
     {/* Full Name */}     
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>
       
        {/* Country */}
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass} `}
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>

        {/* Preference */}
        <div>
          <label className="block text-black mb-2 font-semibold">PREFERENCE</label>
          <div className="border text-black text-xl  h-25 md:h-50 rounded p-2 space-y-7">
            {["Remote", "Hybrid", "Onsite"].map((opt) => (
              <label key={opt} className="flex items-center  space-x-2">
                <input
                  type="radio"
                  name="preference"
                  value={opt}
                  checked={formData.preference === opt}
                  onChange={handleChange}
                  className={`form-radio text-green-600  ${placeholderClass} `}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {errors.preference && <p className="text-red-500 text-sm">{errors.preference}</p>}
        </div>
        </div>
        <div className="flex w-1/2 flex-col gap-5 md:gap-9">
        {/* Email Address */}
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

        {/* LinkedIn */}
        <div>
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            value={formData.linkedin}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass} `}
          />
          {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
        </div>
        
        {/* Desired Role */}
        <div>
          <input
            type="text"
            name="desiredRole"
            placeholder="Desired Role"
            value={formData.desiredRole}
            onChange={handleChange}
            className={`w-full p-2 h-10 md:h-15 border-1 border-gray-600  rounded ${placeholderClass} `}
          />
          {errors.desiredRole && <p className="text-red-500 text-sm">{errors.desiredRole}</p>}
        </div>
        {/* CV Upload */}    

        <div>
        {/* Hidden file input */}
        <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            id="cv-upload"
            onChange={handleFileChange}
            className="hidden"
        />

        {/* Custom label */}
        <label
            htmlFor="cv-upload"
            className="flex items-center justify-center gap-3 w-full h-12 md:h-34 border-1 border-gray-600  rounded px-3 cursor-pointer text-black hover:border-green-600 hover:text-green-700 transition"
        >
            <span className="truncate">
            {formData.cv ? formData.cv.name : "Upload CV"}
            </span>            
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-15 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12"
            />
            </svg>
        </label>

        {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
        </div>
      </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      {success && <p className="text-green-600 text-center">{success}</p>}
    </form>         
    </div>
    
  );
};

export default TalentPoolForm;
