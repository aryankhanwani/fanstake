"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && mounted) {
      // Focus the input when modal opens
      const input = document.getElementById("email-input");
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, [isOpen, mounted]);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    // You can add your API call here
    setEmail("");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-[201] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 transform transition-all duration-300 ease-in-out ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#FFF8F0] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#4B5563]" />
          </button>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-2">
                Join the Waitlist
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Be the first to access new sports deals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#1E3A8A]/20 bg-white text-base text-[#1E3A8A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B35] text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-[#E55A2B] transition-all transform hover:scale-105 shadow-lg"
              >
                Join the Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

