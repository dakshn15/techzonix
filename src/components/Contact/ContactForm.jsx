import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    // Map kebab-case IDs from HTML to camelCase state properties
    const stateKey = id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("Please fill in your first and last name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.subject) {
      setError("Please select a subject.");
      return;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }
    if (!formData.privacy) {
      setError("You must agree to the Privacy Policy.");
      return;
    }

    // Success simulation
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false
    });
  };

  return (
    <section className="lg:pb-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:gap-8 gap-5 items-stretch">
          {/* Contact Form */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="font-heading font-bold text-2xl md:text-3xl md:mb-6 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 md:mb-8 mb-4">
              Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="flex-grow">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center flex flex-col items-center justify-center h-full max-w-lg mx-auto">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 text-sm mb-6">
                    Thank you for reaching out to Techzonix. Our team will review your message and reply via email within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary text-sm font-semibold !py-2.5 !px-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="md:space-y-6 space-y-4 h-full" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block mb-2 font-medium md:text-base text-sm">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary px-3 py-2 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block mb-2 font-medium md:text-base text-sm">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary px-3 py-2 outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium md:text-base text-sm">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary px-3 py-2 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium md:text-base text-sm">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary px-3 py-2 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium md:text-base text-sm">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary p-3 outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="feedback">General Feedback</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium md:text-base text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary p-3 outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-primary focus:ring-primary mt-1 mr-2 cursor-pointer"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer select-none">
                        I agree to the <Link to={"/privacy-policy"} className="text-primary hover:underline">Privacy Policy</Link> and consent to processing my data for the purpose of handling my inquiry.
                      </label>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn-primary">Send Message</button>
                  </div>
                </form>
              )}
            </div>
          </div>
          {/* Map */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="font-heading font-bold text-2xl md:text-3xl md:mb-6 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 md:mb-8 mb-4">
              Our flagship store is conveniently located in the heart of Green Hills. Come visit us to see our full range of premium tech gadgets and electronics.
            </p>
            <div className="flex-grow rounded-lg overflow-hidden shadow-md bg-gray-200 lg:min-h-[500px] h-60">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709469938!2d72.73988499695301!3d21.15934029856861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747819723259!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
