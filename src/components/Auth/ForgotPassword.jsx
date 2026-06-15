import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center lg:mb-8 mb-6">
            <h2 className="font-bold text-2xl lg:text-3xl mb-3">Forgot Your Password?</h2>
            <p className="text-gray-600">Enter your email to receive a password reset link.</p>
          </div>

          {/* Email Form */}
          <div className="bg-gray-50 border md:p-8 p-4 rounded-lg shadow-sm">
            {isSubmitted ? (
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l8-4.719a2 2 0 012.22 0l8 4.72A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Check Your Email</h3>
                <p className="text-sm text-gray-600">
                  If an account exists for <strong className="text-gray-800">{email}</strong>, we have sent password reset instructions.
                </p>
                <div className="pt-4">
                  <Link to="/login" className="btn-primary inline-block text-center w-full">
                    Back to login
                  </Link>
                </div>
              </div>
            ) : (
              <form className="md:space-y-6 space-y-4" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium md:text-base text-sm">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full">
                  Reset Password
                </button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Remember your password?{' '}
                    <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                      Back to login
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
