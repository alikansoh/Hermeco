"use client";
import React from "react";
import { Cookie } from "lucide-react";

const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 px-6 py-3 rounded-full shadow-sm mb-8">
            <Cookie className="w-6 h-6 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-lg">
              Cookies Policy
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our Use of Cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We use cookies to enhance your browsing experience and provide
            relevant services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device to store data
              that helps us improve your experience on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside">
              <li><strong>Essential:</strong> Needed for the site to work properly.</li>
              <li><strong>Analytics:</strong> Help us understand how visitors use our site.</li>
              <li><strong>Functional:</strong> Remember your preferences and settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Managing Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser settings,
              but some features may not function properly without them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
