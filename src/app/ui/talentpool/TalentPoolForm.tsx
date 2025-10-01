
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
    if (!formData.preference) newErrors.preference = "Preference is required";
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
    'placeholder:text-md   placeholder:uppercase placeholder:text-gray-600';

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
                className={`w-full px-4 py-3 border border-gray-900 rounded ${placeholderClass}`}
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
                className={`w-full px-4 py-3 border border-gray-900 rounded ${placeholderClass}`}
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>

            {/* Preference */}
            <div>
              <label className="block text-gray-600 text-md uppercase mb-2">
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
                    <span>{opt}</span>
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
                className={`w-full px-4 py-3 border border-gray-900 rounded ${placeholderClass}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                value={formData.linkedin}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-900 rounded ${placeholderClass}`}
              />
              {errors.linkedin && (
                <p className="text-red-500 text-sm">{errors.linkedin}</p>
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
                className={`w-full px-4 py-3 border border-gray-900 rounded ${placeholderClass}`}
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
                className="flex items-center justify-center gap-3 w-full px-4 py-3 border h-32 border-gray-900 rounded cursor-pointer text-gray-600 text-md uppercase hover:border-green-600 hover:text-green-700 transition"
              >
                <span className="truncate">
                  {formData.cv ? formData.cv.name : "Upload CV"}
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

              {errors.cv && (
                <p className="text-red-500 text-sm">{errors.cv}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
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

