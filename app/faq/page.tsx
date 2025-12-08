"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEmailModal } from "../components/EmailModalProvider";

export default function FAQ() {
  const { openModal } = useEmailModal();
  const faqs = [
    {
      question: "Is this equity in a club?",
      answer: "No. You invest in opportunities tied to specific sports assets or revenue streams."
    },
    {
      question: "Can anyone invest?",
      answer: "It depends on regional rules. We show what applies when you sign up."
    },
    {
      question: "What is the minimum investment?",
      answer: "Each deal has its own minimum ticket size. Some start from very small amounts."
    },
    {
      question: "How do I earn returns?",
      answer: "If the sports asset generates payouts, you receive your share based on the deal terms."
    },
    {
      question: "Can I sell my investment later?",
      answer: "Some deals may offer liquidity options in the future. Others may be hold-to-end only."
    },
    {
      question: "Do I need crypto?",
      answer: "No. Regular payment methods work. The blockchain layer stays invisible."
    },
    {
      question: "How are deals selected?",
      answer: "Our team evaluates financials, feasibility, and transparency. Only vetted deals go live."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] overflow-x-hidden">
      <Navbar />

      {/* SECTION 01 — HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden animate-scale-in animation-delay-200">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A8A] leading-tight animate-fade-in-up animation-delay-300">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4B5563] leading-relaxed animate-fade-in-up animation-delay-400">
                Short answers to help you understand FANSTAKE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — FAQ LIST */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 border-2 border-[#1E3A8A]/10 hover:border-[#FF6B35]/30 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-3 sm:mb-4">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FINAL CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl" data-scroll>
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -mr-24 sm:-mr-32 md:-mr-40 lg:-mr-48 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -ml-24 sm:-ml-32 md:-ml-40 lg:-ml-48 -mb-24 sm:-mb-32 md:-mb-40 lg:-mb-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 text-center">
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in-up">
                  Still curious?
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                  Join the waitlist and be among the first to access exclusive sports investment opportunities when we launch.
                </p>
                <div className="pt-4 sm:pt-6 md:pt-8 animate-fade-in-up animation-delay-300">
                  <button 
                    onClick={openModal}
                    className="bg-[#FF6B35] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl tracking-wide uppercase hover:bg-[#E55A2B] transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
                  >
                    Join the Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

