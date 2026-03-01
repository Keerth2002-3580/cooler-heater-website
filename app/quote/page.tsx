'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, Phone, Mail, User, MessageSquare, Settings } from 'lucide-react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simple client-side handling
    console.log('Quote request:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1E40AF] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Request a Free Quote
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get a personalized quote for premium cooling and heating solutions. Our experts will respond within 24 hours with a detailed proposal tailored to your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-2xl p-12 text-center border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quote Request Received!
              </h2>
              <p className="text-lg text-gray-600">
                Thank you for your interest. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Tell Us About Your Project
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you with a customized quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <div className="relative">
                    <Settings className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900 appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="cooling">Cooling System</option>
                      <option value="heating">Heating System</option>
                      <option value="installation">Installation Service</option>
                      <option value="maintenance">Maintenance Plan</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all text-gray-900 resize-none"
                      placeholder="Tell us about your project requirements, property size, and any specific needs..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  Submit Quote Request
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our terms and privacy policy. We&apos;ll never share your information with third parties.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
