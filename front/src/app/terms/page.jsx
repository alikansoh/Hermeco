"use client";
import React from "react";
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 px-6 py-3 rounded-full shadow-sm mb-8">
            <FileText className="w-6 h-6 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-lg">
              Terms & Conditions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our Agreement With You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These Terms & Conditions outline the rules for using our website and
            services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Use of Our Services
            </h2>
            <p>
              By using our services, you agree to follow our guidelines and not
              misuse our website or materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Payments & Quotes
            </h2>
            <p>
              All payments and quotes are agreed upon before starting any work.
              Late payments may lead to additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Liability
            </h2>
            <p>
              We take care in delivering high-quality work, but we are not
              liable for indirect losses outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions from time to time. Please
              review them regularly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
