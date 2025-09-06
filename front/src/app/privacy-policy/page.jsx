"use client";
import React from "react";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 px-6 py-3 rounded-full shadow-sm mb-8">
            <Shield className="w-6 h-6 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-lg">
              Privacy Policy
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We respect your privacy and are committed to protecting your personal
            information. This policy explains how we handle your data.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect your name, email, phone number, and any other
              details you provide when contacting us or using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p>
              Your information helps us provide and improve our services,
              communicate with you, and comply with legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Data Protection
            </h2>
            <p>
              We use secure systems and follow best practices to keep your
              information safe and private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us anytime to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
