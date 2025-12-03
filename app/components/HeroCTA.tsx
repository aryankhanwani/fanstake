"use client";

import { useState } from "react";

export default function HeroCTA() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="w-full animate-fade-in-up animation-delay-500">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-[3000ms] ease-in-out">
        {showEmail && (
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 md:w-72 px-3 sm:px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-[3000ms] ease-in-out animate-fade-in-left"
            style={{ animationDuration: "1.2s" }}
            autoFocus
          />
        )}
        <button
          type="button"
          onClick={() => !showEmail && setShowEmail(true)}
          className={`bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-[3000ms] ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto text-center ${
            showEmail
              ? "px-6 sm:px-7 md:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base"
              : "px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg"
          }`}
        >
          Join the Waitlist
        </button>
      </div>

      <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500">
        Be the first to access new sports deals.
      </p>
    </div>
  );
}

