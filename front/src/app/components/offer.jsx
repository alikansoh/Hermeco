"use client"
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Show after 10 seconds
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleClaim = () => {
    // Track conversion event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'modal_conversion', value: 40 });
    }
    console.log('Lead captured - redirecting to booking');
    setIsOpen(false);
    setShowNotification(true);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <>
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-[60] max-w-sm">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-white/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-xl font-black">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">🎉 Offer Claimed!</h3>
                <p className="text-sm text-white/90">
                  Mention this offer when you call us or fill out the form to receive your 40% discount.
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
            aria-hidden="true"
          />
          
          <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-2 border-yellow-400/30 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-3xl opacity-20 -translate-y-48" />
            
            <div className="relative p-8 text-center">
              {/* Discount */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-40"></div>
                <div className="relative inline-block p-6 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-3xl shadow-2xl">
                  <span className="block text-6xl font-black text-white drop-shadow-2xl">
                    40%
                  </span>
                  <span className="block text-xl font-black text-white -mt-2">
                    OFF
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-black text-white mb-3 leading-tight">
                🎄 Year-End Special 🎉
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Save thousands on your renovation project 🎁
              </p>

              {/* Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-6 text-left">
                <ul className="space-y-2">
                  {[
                    'All renovation projects',
                    'Maintenance services included',
                    'FREE design consultation',
                    'Priority scheduling'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-black">✓</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={handleClaim}
                className="w-full px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl hover:from-yellow-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🎊 Claim Your Discount 🎊
              </button>
              
              <p className="text-sm text-yellow-400 font-semibold mt-4">
                ⏰ Offer ends December 31st, 2025 ✨
              </p>
              
              <button
                onClick={handleClose}
                className="text-sm text-gray-400 hover:text-gray-300 transition-colors mt-3"
              >
                No thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}