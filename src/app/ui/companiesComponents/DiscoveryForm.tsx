
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  companyName: string;
  industry: string;
  email: string;
  areaOfInterest: string;
  phone: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  industry?: string;
  email?: string;
  areaOfInterest?: string;
  phone?: string;
  description?: string;
}

const DiscoveryForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    industry: '',
    email: '',
    areaOfInterest: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim())
      newErrors.companyName = 'Company name is required';
    if (!formData.industry.trim())
      newErrors.industry = 'Please select an industry';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.description.trim())
      newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage('');

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('https://e-africa-platform-backend.onrender.com/api/discovery/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

        if (res.ok) {
      setServerMessage('Your discovery form has been submitted successfully!');
      setFormData({
        fullName: '',
        companyName: '',
        industry: '',
        email: '',
        areaOfInterest: '',
        phone: '',
        description: '',
      });
      setErrors({});
      router.push('/success');
    } else if (data.errors) {
       setErrors(data.errors);
      setServerMessage("Please fix the highlighted errors.");
    } else {
      setServerMessage(data.error || "Something went wrong, please try again.");
    }
  } catch (error) {
    console.error(error);
    setServerMessage("Server error: Could not submit form.");
  } finally {
    setLoading(false);
  }
};

  const placeholderClass =
    'placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 placeholder:tracking-wide';

  return (
    <section className="border-8 mx-auto max-w-screen-xl md:px-2">
      <div className="py-6 md:py-15">
        <h2 className="text-center text-xl md:text-3xl font-semibold uppercase tracking-wide text-black">
          Discovery Form
        </h2>
        <p className="mx-auto mb-7 mt-1 max-w-3xl tracking-wide text-center text-lg md:text-xl leading-9 text-black">
          Tell Us A Bit About Your Company And How We Can Support Your Training,
          Hiring, Or Strategy Goals.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid max-w-4xl p-6 md:p-0 mx-auto grid-cols-1 gap-12 md:grid-cols-2"
          noValidate
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`h-10 md:h-15 rounded-sm border-2 px-3 text-black text-sm font-medium outline-none focus:border-neutral-500 focus:ring-2 focus:ring-gray-500 ${errors.fullName ? 'border-red-500' : 'border-gray-500'
                } ${placeholderClass}`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className={`h-10 md:h-15 rounded-sm border-2 px-3 text-black text-sm font-medium outline-none focus:border-neutral-500 focus:ring-2 focus:ring-gray-500 ${errors.companyName ? 'border-red-500' : 'border-gray-500'
                } ${placeholderClass}`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Industry */}
          <div className="flex text-black flex-col relative">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              data-placeholder={formData.industry === ""}
              className={`h-10 md:h-15 w-full border-2 appearance-none rounded-sm bg-white px-3 pr-10 text-sm font-medium outline-none focus:border-neutral-500 focus:ring-2 focus:ring-gray-500 ${errors.industry ? 'border-red-500' : 'border-gray-500'
                }`}
            >
              <option value="" disabled>
                Industry
              </option>
              <option>Technology</option>
              <option>Education</option>
              <option>Energy</option>
              <option>Retail</option>
              <option>Hospitality</option>
              <option>Other</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-neutral-500">
              ▾
            </span>
            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`h-10 md:h-15 rounded-sm border-2 px-3 text-black text-sm font-medium outline-none focus:border-neutral-500 focus:ring-2 focus:ring-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-500'
                } ${placeholderClass}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Areas of Interest */}
          <div className="rounded-sm text-black border-2 border-gray-500 p-4">
            <p className="text-lg font-semibold uppercase tracking-wide text-black">
              Areas of Interest
            </p>
            <div className="mt-3 space-y-2 text-sm">
              {['Training', 'Hiring', 'Consultant', 'Customer Experience'].map(
                (option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="areaOfInterest"
                      value={option}
                      checked={formData.areaOfInterest === option}
                      onChange={handleChange}
                    />
                    <span className="text-sm font-medium text-gray-500 tracking-wide">{option}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Phone + Description */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Official Phone Number"
                className={`h-10 md:h-15 rounded-sm border-2 px-3 text-sm outline-none focus:border-neutral-500 ${errors.phone ? 'border-red-500' : 'border-gray-500'
                  } ${placeholderClass}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief Description Of Your Company"
                rows={4}
                className={`min-h-[90px] md:h-33 rounded-sm border-2 p-3 text-black text-sm font-medium outline-none focus:border-neutral-500 focus:ring-2 focus:ring-gray-500 ${errors.description ? 'border-red-500' : 'border-gray-500'
                  } ${placeholderClass}`}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 mt-2 md:col-span-2">
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex min-w-[260px] items-center justify-center rounded-sm bg-green-800 px-6 py-2 md:px-7 md:py-10text-xs font-medium uppercase tracking-wide text-white shadow hover:bg-green-900 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {loading ? 'Submitting...' : 'Book A Discovery Call'}
              </button>

              {serverMessage && (
                <p
                  className={`mt-4 text-sm ${serverMessage.includes('successfully')
                    ? 'text-green-600'
                    : 'text-red-600'
                    }`}
                >
                  {serverMessage}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscoveryForm;
