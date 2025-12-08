"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Shield, Zap, DollarSign, TrendingUp, Lock, Globe, BarChart3 } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEmailModal } from "../components/EmailModalProvider";

export default function HowItWorks() {
  const { openModal } = useEmailModal();
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const activeStepRef = useRef(1);

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your profile and complete quick verification.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      image: "/sec-51.png",
    },
    {
      id: 2,
      title: "Discover Sports Deals",
      description: "Browse opportunities linked to real sports assets. Clear terms. Simple language.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      image: "/sec-51.png",
    },
    {
      id: 3,
      title: "Invest Fractionally",
      description: "Choose your ticket size and invest directly through the platform.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      image: "/sec-51.png",
    },
    {
      id: 4,
      title: "Track Your Portfolio",
      description: "See how your investments perform. If the deal pays out, you receive your share.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      image: "/sec-51.png",
    },
  ];

  // Update ref when activeStep changes
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  // Auto-advance steps with progress bar
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset progress when step changes
    setProgress(0);

    const stepDuration = 5000; // 5 seconds per step
    const progressInterval = 50; // Update progress every 50ms for smooth animation
    const progressIncrement = 100 / (stepDuration / progressInterval);
    let currentProgress = 0;

    intervalRef.current = setInterval(() => {
      currentProgress += progressIncrement;
      
      if (currentProgress >= 100) {
        currentProgress = 0;
        setProgress(0);
        
        // Use ref to get current step value to avoid stale closure
        const currentStep = activeStepRef.current;
        const nextStep = currentStep >= steps.length ? 1 : currentStep + 1;
        setActiveStep(nextStep);
      } else {
        setProgress(currentProgress);
      }
    }, progressInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeStep, steps.length]);
  return (
    <div className="min-h-screen bg-[#FFF8F0] overflow-x-hidden">
      <Navbar />

      {/* SECTION 01 — HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden animate-scale-in animation-delay-200">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A8A] leading-tight animate-fade-in-up animation-delay-300">
                How it works
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4B5563] leading-relaxed animate-fade-in-up animation-delay-400">
                A simple flow that lets you invest in sports with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — STEP BY STEP */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-scroll>
            <p className="text-xs sm:text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-2">STEP BY STEP</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
              How it works
            </h2>
          </div>
          
          {/* Steps with Progress Bar */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16" data-scroll>
            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {steps.map((step, index) => {
                const isActive = activeStep === step.id;
                const isCompleted = activeStep > step.id;
                
                return (
                  <div
                    key={step.id}
                    onClick={() => {
                      setActiveStep(step.id);
                      setProgress(0);
                    }}
                    className="relative"
                  >
                    {/* Step Card - All same size */}
                    <div
                      className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 cursor-pointer relative h-full min-h-[180px] sm:min-h-[200px] flex flex-col overflow-hidden ${
                        isActive 
                          ? 'shadow-xl scale-[1.02] sm:scale-105' 
                          : isCompleted
                          ? 'shadow-md'
                          : 'hover:shadow-md'
                      }`}
                    >
                        {/* Number Badge */}
                        <div className="relative mb-3 sm:mb-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive 
                              ? 'bg-[#FF6B35] text-white scale-110 shadow-lg'
                              : isCompleted
                              ? 'bg-[#FF6B35]/60 text-white'
                              : 'bg-[#FFF8F0] text-[#4B5563] border-2 border-[#FF6B35]/20'
                          }`}>
                            <span className="text-lg sm:text-xl font-bold">{step.id}</span>
                          </div>
                          
                          {/* Progress indicator on active step */}
                          {isActive && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#FF6B35] rounded-full animate-pulse"></div>
                          )}
                        </div>

                        <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-[#1E3A8A]' : isCompleted ? 'text-[#1E3A8A]/80' : 'text-[#1E3A8A]/70'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 flex-grow ${
                          isActive ? 'text-[#4B5563]' : 'text-[#4B5563]/70'
                        }`}>
                          {step.description}
                        </p>

                        {/* Animated bottom border as progress indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5">
                          {/* Background border line */}
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                            isCompleted ? 'bg-[#FF6B35]/60' : 'bg-[#FF6B35]/10'
                          }`}></div>
                          {/* Animated progress border */}
                          {isActive && (
                            <div 
                              className="absolute bottom-0 left-0 h-0.5 bg-[#FF6B35] transition-all duration-100 ease-linear"
                              style={{ width: `${progress}%` }}
                            ></div>
                          )}
                        </div>
                      </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video/Content Display */}
          <div className="mt-6 sm:mt-8 lg:mt-12" data-scroll>
            <div className="relative w-full">
              <div className="relative transform hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl">
                  <div className="bg-black rounded-lg sm:rounded-xl overflow-hidden">
                    <div className="bg-gray-900 aspect-video w-full relative">
                      <video
                        key={activeStep}
                        src={steps.find(s => s.id === activeStep)?.videoUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      {/* Fallback image overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30">
                        <Image
                          src={steps.find(s => s.id === activeStep)?.image || "/sec-51.png"}
                          alt={`Step ${activeStep} demonstration`}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover opacity-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step Indicator */}
              <div className="mt-3 text-center">
                <p className="text-xs sm:text-sm text-[#4B5563]">
                  Step {activeStep} of {steps.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — BENTO GRID */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12" data-scroll>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-2">
              Everything you need to know
            </h2>
            <p className="text-[#4B5563] text-xs sm:text-sm md:text-base">
              Understanding how sports investing works with FANSTAKE
            </p>
          </div>
          
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-5" data-scroll>
            {/* Card 1 - What You Actually Own (Large) */}
            <Card className="group overflow-hidden bg-white shadow-lg sm:col-span-5 lg:col-span-3 rounded-xl border-2 border-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all flex flex-col">
              <CardHeader className="p-4 sm:p-5 md:p-6 pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1E3A8A] mb-2">
                  You're not buying a team. You're accessing its economics.
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-xs sm:text-sm max-w-lg mb-2">
                  Your investment gives you exposure to specific sports-related income or assets — clearly described in each deal.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#FF6B35]">
                  No ownership. No voting rights. Just economic access.
                </p>
              </CardHeader>
              <div className="relative h-fit pl-4 sm:pl-5 md:pl-6 pb-4 sm:pb-5 md:pb-6 mt-auto">
                <div className="absolute -inset-2 sm:-inset-3 [background:radial-gradient(75%_95%_at_50%_0%,transparent,rgba(255,255,255,0.8)_100%)]"></div>
                <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FF6B35]/10 overflow-hidden rounded-lg border-2 border-[#FF6B35]/20 p-1 sm:p-1.5">
                  <Image
                    src="/sec-5.png"
                    alt="Sports investment economics"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover max-h-40 sm:max-h-48"
                  />
                </div>
              </div>
            </Card>

            {/* Card 2 - Tech Layer (Medium) */}
            <Card className="group overflow-hidden bg-white shadow-lg sm:col-span-5 lg:col-span-2 rounded-xl border-2 border-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all flex flex-col">
              <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#1E3A8A] mb-2">
                  Tech that feels invisible
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-xs sm:text-sm mb-4 flex-grow">
                  We use blockchain infrastructure to keep records secure and transparent — without requiring crypto knowledge.
                </p>
                <div className="mt-auto">
                  <div className="relative">
                    <div className="absolute -inset-1 sm:-inset-2 [background:radial-gradient(50%_75%_at_75%_50%,transparent,rgba(255,255,255,0.8)_100%)]"></div>
                    <div className="aspect-video overflow-hidden rounded-lg border-2 border-[#FF6B35]/20 bg-[#FFF8F0] relative max-h-20 sm:max-h-24">
                      <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 3 - Fees (Small) */}
            <Card className="group p-4 sm:p-5 md:p-6 bg-white shadow-lg sm:col-span-5 lg:col-span-2 rounded-xl border-2 border-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all flex flex-col">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1E3A8A] mb-3">
                Simple, upfront fees
              </h3>
              <div className="space-y-2 sm:space-y-2.5 flex-grow">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></div>
                  </div>
                  <span className="text-[#4B5563] leading-relaxed text-xs sm:text-sm">Small platform fee per investment</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></div>
                  </div>
                  <span className="text-[#4B5563] leading-relaxed text-xs sm:text-sm">Transaction fee for certain features (if secondary markets launch)</span>
                </div>
              </div>
            </Card>

            {/* Card 4 - Additional Feature (Large) */}
            <Card className="group relative bg-white shadow-lg sm:col-span-5 lg:col-span-3 rounded-xl border-2 border-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all flex flex-col">
              <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1E3A8A] mb-2">
                  Real-time Portfolio Tracking
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-xs sm:text-sm mb-4 flex-grow">
                  Monitor your investments with comprehensive analytics and real-time updates.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs text-[#4B5563]">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                    <span>Live updates</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                    <span>Analytics</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl" data-scroll>
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -mr-24 sm:-mr-32 md:-mr-40 lg:-mr-48 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -ml-24 sm:-ml-32 md:-ml-40 lg:-ml-48 -mb-24 sm:-mb-32 md:-mb-40 lg:-mb-48"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 text-center">
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    Ready to explore sports investing?
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Join thousands of fans and investors who are already part of the revolution.
                  </p>
                </div>
                <div className="pt-2 sm:pt-4">
                  <button 
                    onClick={openModal}
                    className="bg-[#FF6B35] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl tracking-wide uppercase hover:bg-[#E55A2B] transition-all transform hover:scale-105 shadow-2xl relative overflow-hidden group w-full sm:w-auto"
                  >
                    <span className="relative z-10">Join the Waitlist</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E55A2B] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

