"use client"
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay (500ms) when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaim = () => {
    // Add your logic here (e.g., navigate to contact form, open booking)
    console.log('Offer claimed!');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/20 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32" />
        
        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-yellow-400 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full animate-pulse">
            🎊 End of Year Special 🎊
          </div>

          {/* Discount */}
          <div className="mb-4 relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-yellow-400 to-amber-500 opacity-30"></div>
            <div className="inline-block relative">
              <span className="text-8xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                40%
              </span>
              <span className="block text-3xl font-black text-white -mt-3 drop-shadow-lg">
                OFF
              </span>
              <div className="absolute -top-2 -right-8 rotate-12">
                <span className="text-4xl animate-bounce">🎉</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            🎄 Year-End Celebration! 🎄
          </h2>
          <p className="text-yellow-400 text-lg font-semibold mb-3">
            Thank You for an Amazing Year!
          </p>

          {/* Description */}
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            As we close out 2025, we're celebrating with our <span className="text-yellow-400 font-bold">biggest discount ever</span>! Whether you're a new or returning client, enjoy 40% off all projects and services.
          </p>

          {/* Features */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6 text-left">
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All renovation projects
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Maintenance services included
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed professionals
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleClaim}
              className="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 rounded-xl hover:from-yellow-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transform hover:scale-105"
            >
              Claim Your 40% Off
            </button>
            
            <button
              onClick={handleClose}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Maybe later
            </button>
          </div>

          {/* Urgency text */}
          <p className="text-sm text-yellow-400 font-semibold mt-4 animate-pulse">
            ⏰ Ends December 31st, 2025 - Book Now!
          </p>
        </div>
      </div>
    </div>
  );
}