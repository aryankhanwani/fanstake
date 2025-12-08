"use client";

import { useState } from "react";

export default function HeroCTA() {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
        setShowEmail(false);
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        console.error("Error submitting email:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full animate-fade-in-up animation-delay-500">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-[3000ms] ease-in-out">
          {showEmail && (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="w-full sm:w-64 md:w-72 px-3 sm:px-4 py-2.5 rounded-xl border-2 border-[#1E3A8A]/20 bg-white text-sm sm:text-base text-[#1E3A8A] placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-all duration-[3000ms] ease-in-out animate-fade-in-left disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ animationDuration: "1.2s" }}
              autoFocus
            />
          )}
          <button
            type={showEmail ? "submit" : "button"}
            onClick={() => !showEmail && setShowEmail(true)}
            disabled={isSubmitting}
            className={`bg-[#FF6B35] text-white rounded-xl font-semibold hover:bg-[#E55A2B] transition-all duration-[3000ms] ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
              showEmail
                ? "px-6 sm:px-7 md:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base"
                : "px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Join the Waitlist"}
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="p-2 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 text-xs sm:text-sm text-center animate-fade-in">
            ✓ Successfully joined! Check your Telegram for confirmation.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-2 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-xs sm:text-sm text-center animate-fade-in">
            ✗ This email is already registered. You are already on the waitlist!
          </div>
        )}
      </form>

      <p className="mt-2 text-xs sm:text-sm md:text-base text-[#4B5563]">
        Be the first to access new sports deals.
      </p>
    </div>
  );
}

