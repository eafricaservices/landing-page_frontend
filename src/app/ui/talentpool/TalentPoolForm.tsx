
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  linkedIn: string;
  desiredRole: string;
  preference: string;
  cvUrl: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  linkedIn?: string;
  desiredRole?: string;
  preference?: string;
  cvUrl?: string;
  general?: string;
}

const TalentPoolForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    linkedIn: "",
    desiredRole: "",
    preference: "",
    cvUrl: null,
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
      const file = e.target.files[0];
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, cvUrl: "Please upload a PDF or Word document" });
        return;
      }
      
      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setErrors({ ...errors, cvUrl: "File size must be less than 5MB" });
        return;
      }
      
      // Clear any previous file errors
      const newErrors = { ...errors };
      delete newErrors.cvUrl;
      setErrors(newErrors);
      
      setFormData({ ...formData, cvUrl: file });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Full Name validation - must be at least 2 characters
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid Email Address is required";
    }
    
    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    
    // LinkedIn validation
    if (!formData.linkedIn.trim()) {
      newErrors.linkedIn = "LinkedIn profile is required";
    }
    
    // Desired Role validation
    if (!formData.desiredRole.trim()) {
      newErrors.desiredRole = "Desired Role is required";
    }
    
    // Preference validation - must be exactly Remote, Onsite, or Hybrid
    const validPreferences = ['Remote', 'Onsite', 'Hybrid'];
    if (!formData.preference) {
      newErrors.preference = "Preference is required";
    } else if (!validPreferences.includes(formData.preference)) {
      newErrors.preference = "Preference must be one of: Remote, Onsite, Hybrid";
    }
    
    // CV upload validation
    if (!formData.cvUrl) {
      newErrors.cvUrl = "CV upload is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Debug: Log current form state
    console.log("Current form data state:", formData);
    
    if (!validate()) return;

    try {
  setSubmitting(true);
  setSuccess(null);

  const formPayload = new FormData();

  // Add text fields only if they have values
  if (formData.fullName.trim()) formPayload.append("fullName", formData.fullName.trim());
  if (formData.email.trim()) formPayload.append("email", formData.email.trim());
  if (formData.country.trim()) formPayload.append("country", formData.country.trim());
  if (formData.linkedIn.trim()) formPayload.append("linkedIn", formData.linkedIn.trim());
  if (formData.desiredRole.trim()) formPayload.append("desiredRole", formData.desiredRole.trim());
  if (formData.preference) formPayload.append("preference", formData.preference);
  if (formData.cvUrl) formPayload.append("cvUrl", formData.cvUrl);

  // Debug: Log FormData entries
      for (const pair of formPayload.entries()) {        
        console.log(""); 
        console.log("FormData entry:"); 
        console.log("FormData entry:", pair); 
        console.log(pair[0], pair[1]);
      }
  const res = await axios.post("https://e-africa-platform-backend.onrender.com/api/talent-pool/submit", formPayload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  if (res.status === 201) {
    setSuccess("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      country: "",
      linkedIn: "",
      desiredRole: "",
      preference: "",
      cvUrl: null,
    });
    setErrors({});
    router.push("/success");
  }
} catch (error: unknown) {
  console.error("Form submission error:", error);

  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status;
    const data = error.response?.data || {};
    const backendErrors = data.errors;
    const backendMessage = data.message || "An unexpected error occurred.";

    // Log detailed error information
    console.error("Status Code:", statusCode);
    console.error("Error Response Data:", data);
    console.error("Backend Errors:", backendErrors);
    console.error("Backend Message:", backendMessage);

    //  Handle Validation Errors (400)
      if (statusCode === 400) {
      if (backendErrors) {
        // Backend sent field-specific validation errors
        const mappedErrors: FormErrors = {};
        for (const key in backendErrors) {
          mappedErrors[key as keyof FormErrors] = backendErrors[key];
        }
        setErrors(mappedErrors);
      } else if (typeof data.message === "object") {
        // If message itself is an object (unexpected)
        setErrors({ general: JSON.stringify(data.message) });
      } else {
        setErrors({ general: data.message || "Validation failed. Please check your inputs." });
      }
      return;
    }


    //  Handle General Errors with Message (like 500)
    setErrors({
      general: backendMessage,
    });
  } else if (error instanceof Error) {
    setErrors({ general: error.message });
  } else {
    setErrors({ general: "An unknown error occurred. Please try again." });
  }
} finally {
  setSubmitting(false);
}
  };

  const placeholderClass =
    'placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide';

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 text-black text-center">
        JOIN OUR TALENT POOL
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mt-7 md:mt-10 mx-auto p-6 py-15 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] space-y-6 bg-white"
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {/* Left column */}
          <div className="md:w-1/2 flex flex-col gap-5 md:gap-9">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>

            {/* Preference */}
            <div>
              <label className="block text-gray-800 text-md uppercase mb-2">
                PREFERENCE
              </label>
              <div className="border h-45  border-gray-900 rounded px-4 py-4 space-y-4">
                {["Remote", "Hybrid", "Onsite"].map((opt) => (
                  <label key={opt} className="flex items-center  space-x-2">
                    <input
                      type="radio"
                      name="preference"
                      value={opt}
                      checked={formData.preference === opt}
                      onChange={handleChange}
                      className="form-radio text-green-600"
                    />
                    <span className="text-sm font-medium text-gray-800 tracking-wide">{opt}</span>
                  </label>
                ))}
              </div>
              {errors.preference && (
                <p className="text-red-500 text-sm">{errors.preference}</p>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex flex-col gap-5 md:gap-9">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
              />
              {errors.linkedIn && (
                <p className="text-red-500 text-sm">{errors.linkedIn}</p>
              )}
            </div>

            {/* Desired Role */}
            <div>
              <input
                type="text"
                name="desiredRole"
                placeholder="Desired Role"
                value={formData.desiredRole}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 ${placeholderClass}`}
              />
              {errors.desiredRole && (
                <p className="text-red-500 text-sm">{errors.desiredRole}</p>
              )}
            </div>

            {/* CV Upload */}
            <div>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                id="cv-upload"
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="cv-upload"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 border h-32 border-gray-900 rounded cursor-pointer text-gray-500 text-md  hover:border-green-600 hover:text-green-700 transition"
              >
                <span className="truncate">
                  {formData.cvUrl ? formData.cvUrl.name : "Upload CV"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700"
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

              {errors.cvUrl && (
                <p className="text-red-500 text-sm">{errors.cvUrl}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          {errors.general && (
              <p className="text-red-500 text-center">{errors.general}</p>
           )}
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 border text-xl uppercase border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white disabled:opacity-50"
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

