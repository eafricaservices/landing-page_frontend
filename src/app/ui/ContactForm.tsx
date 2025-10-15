'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("https://e-africa-platform-backend.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
     

      const data = await res.json();

      if (res.ok) {
        setServerMessage("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        router.push("/success");
      } else {
        setServerMessage(data.error || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setServerMessage("Server error: Could not send your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full flex flex-col space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full border-2 px-4 py-5 text-black text-sm font-medium placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-500 
            ${errors.fullName ? "border-red-500" : "border-black"}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border-2 px-4 py-5 text-black text-sm font-medium placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-500 
            ${errors.email ? "border-red-500" : "border-black"}`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full border-2 px-4 py-5 text-black text-sm font-medium placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-500 
            ${errors.phone ? "border-red-500" : "border-black"}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full border-2 px-4 py-3 text-black text-sm font-medium placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-500 
            ${errors.message ? "border-red-500" : "border-black"}`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-60 border border-green-700 rounded-xl self-center md:self-start  text-green-700 px-20 py-6 font-semibold 
          hover:bg-green-700 hover:text-white transition-all duration-300
          ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {serverMessage && (
        <p
          className={`mt-4 text-sm ${
            serverMessage.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {serverMessage}
        </p>
      )}
    </form>
  );
}
