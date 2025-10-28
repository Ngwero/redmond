'use client';

import { useState } from 'react';
import { Building2, PhoneCall, Mail, Clock3, Send, Calendar, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consultationType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Address",
      details: [
        "Plot 1-3 Acacia House, Spring Close",
        "P.O. Box 200921, Nakawa - Kampala"
      ]
    },
    {
      icon: <PhoneCall className="h-6 w-6" />,
      title: "Phone",
      details: [
        "+256 414 670 103"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "info@redmond.co.ug"
      ]
    },
    {
      icon: <Clock3 className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    'Tax Advisory & Planning',
    'Tax Compliance & Reporting',
    'Tax Dispute Resolution',
    'International Taxation',
    'Litigation',
    'Commercial Law',
    'Legal Consultancy',
    'Other'
  ];

  const consultationTypes = [
    'Free Initial Consultation',
    'Tax Advisory Session',
    'Legal Consultation',
    'Audit Representation',
    'Dispute Resolution'
  ];

  return (
    <div className="min-h-screen bg-redmond-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-redmond-blue to-redmond-dark-blue text-redmond-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get in touch with our experts for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-slide-down">Get in Touch</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>We&apos;re here to help with all your legal and tax needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-redmond-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 animate-fade-in-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-redmond-gold rounded-full mx-auto mb-4 flex items-center justify-center text-redmond-dark-blue transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-slide-in-right">Schedule a Consultation</h2>
                <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours. 
                  Free consultations available for tax advisory and audit cases.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-stagger-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="animate-stagger-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-stagger-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                      placeholder="+256 414 670 103"
                    />
                  </div>
                  <div className="animate-stagger-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="animate-stagger-5">
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Consultation *
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    required
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="animate-stagger-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="animate-stagger-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redmond-blue focus:border-transparent transition-all duration-300 hover:border-redmond-blue resize-none"
                    placeholder="Please describe your legal or tax needs in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-redmond-gold text-redmond-dark-blue py-3 px-6 rounded-lg hover:bg-redmond-gold-dark hover:text-white transition-all duration-300 font-medium flex items-center justify-center hover:scale-105 hover:shadow-lg active:scale-95 transform"
                >
                  <Send className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-fade-in-right">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-slide-in-left">Visit Our Office</h2>
                <p className="text-gray-600 animate-fade-in-up mb-2" style={{ animationDelay: '0.2s' }}>
                  We&apos;re located in Nakawa, Kampala, Uganda. Schedule an appointment for an in-person consultation.
                </p>
                <p className="text-redmond-dark-blue font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Visit us at: <a href="https://www.redmond.co.ug" target="_blank" rel="noopener noreferrer" className="underline hover:text-redmond-gold transition-colors duration-300">www.redmond.co.ug</a>
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center transition-all duration-300 hover:shadow-lg animate-fade-in-scale">
                <div className="text-center">
                  <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <p className="text-gray-600">Interactive map will be embedded here</p>
                  <p className="text-sm text-gray-500">Nakawa - Kampala, Uganda</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <button className="w-full bg-redmond-gold text-redmond-dark-blue py-3 px-6 rounded-lg hover:bg-redmond-gold-dark hover:text-white transition-all duration-300 font-medium flex items-center justify-center hover:scale-105 hover:shadow-lg active:scale-95 transform">
                  <Calendar className="h-5 w-5 mr-2 transition-transform duration-300" />
                  Schedule a Meeting
                </button>
                
                <button className="w-full bg-gray-100 text-redmond-dark-blue py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium flex items-center justify-center hover:scale-105 hover:shadow-md active:scale-95 transform">
                  <MessageCircle className="h-5 w-5 mr-2 transition-transform duration-300" />
                  Live Chat Support
                </button>
              </div>

              {/* Additional Information */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md animate-fade-in-up">
                <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Quick Response Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-600">Email responses within 24 hours</span>
                  </div>
                  <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-gray-600">Phone calls returned same day</span>
                  </div>
                  <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-gray-600">Urgent matters handled immediately</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
