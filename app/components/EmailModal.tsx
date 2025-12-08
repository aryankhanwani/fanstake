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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "duplicate">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setErrorMessage("");
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        // Check if it's a duplicate email (409 Conflict)
        if (response.status === 409) {
          setSubmitStatus("duplicate");
          setErrorMessage(data.error || "This email is already registered.");
        } else {
          setSubmitStatus("error");
          setErrorMessage(data.error || "This email is already registered. You are already on the waitlist!");
        }
        console.error("Error submitting email:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("This email is already registered. You are already on the waitlist!");
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#374151] mb-2">
                Join the Waitlist
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Be the first to access new sports deals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-[#374151] mb-2">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#374151]/20 bg-white text-base text-[#374151] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-[#FF5722] transition-all"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 text-sm text-center">
                  ✓ Successfully joined! Check your Telegram for confirmation.
                </div>
              )}
              {submitStatus === "duplicate" && (
                <div className="p-3 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-yellow-700 text-sm text-center">
                  ℹ {errorMessage || "This email is already registered. You are already on the waitlist!"}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm text-center">
                  ✗ {errorMessage || "This email is already registered. You are already on the waitlist!"}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF5722] text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-[#E64A19] transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Submitting..." : "Join the Waitlist"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

