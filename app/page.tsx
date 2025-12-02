import Image from "next/image";
import Link from "next/link";
import SplitText from "./components/SplitText";
import { ContainerTextFlip } from "./components/ui/container-text-flip";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Zap, Shield, Users } from "lucide-react";
import { Spotlight } from "@/components/motion-primitives/spotlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Content Box with Mockup Inside */}
      <section id="hero" className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Main Hero Content Box */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 relative z-10 overflow-hidden animate-scale-in animation-delay-200">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8 order-1">
                  {/* Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-300">
                    <div className="block">Own a piece of</div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      the{" "}
                      <ContainerTextFlip
                        words={["game", "sport", "action", "future"]}
                        interval={2500}
                        animationDuration={600}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
                        textClassName="text-white"
                      />
                    </div>
                  </h1>
                  
                  {/* Subheading */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
                    FANSTAKE lets fans and investors access real sports investment opportunities — simple, transparent, and built for everyone.
                  </p>
                  
                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up animation-delay-500">
                    <button className="bg-gray-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                      Join the Waitlist
                    </button>
                    
                    {/* Microcopy */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-500">
                      Be the first to access new sports deals.
                    </p>
                  </div>
                </div>

                {/* Right Content - Mockup Image Inside Box */}
                <div className="relative flex justify-center lg:justify-end animate-fade-in-right animation-delay-400 order-2">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px]">
                    {/* Mockup Image */}
                    <div className="relative lg:top-20 transform hover:scale-105 lg:hover:scale-115 transition-transform duration-300">
                      <Image
                        src="/mockup.png"
                        alt="Fanstake mobile app mockup"
                        width={350}
                        height={700}
                        className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gray-200 rounded-3xl opacity-20 blur-3xl -z-0 animate-fade-in animation-delay-500"></div>
            <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-300 rounded-3xl opacity-10 blur-3xl -z-0 animate-fade-in animation-delay-600"></div>
          </div>
        </div>
      </section>

      {/* Section 02 - What We Are */}
      <section id="what-we-are" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 relative min-h-[400px] sm:min-h-[500px] flex flex-col" data-scroll>
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 flex-1 flex flex-col">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  A new way to invest in sports
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  <p>
                    Sports is one of the world's biggest industries, yet real investment access has always been limited to billionaires and private groups.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    FANSTAKE changes that.
                  </p>
                  <p>
                    We open the doors for fans and investors to access curated sports deals — with small ticket sizes and transparent terms.
                  </p>
                </div>
              </div>
              {/* Brand Name Visual - Sticked to Bottom */}
              <div className="mt-auto pt-6 sm:pt-8">
                <SplitText
                  text="FANSTAKE"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[10rem] font-bold text-gray-900 tracking-tight leading-none"
                  delay={70}
                  duration={3}
                  ease="elastic.out(1, 0.3)"
                  splitType="chars"
                  from={{ opacity: 0, y: 60 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Why People Love This */}
      <section id="why-choose-us" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24" data-scroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why fans and investors choose us
            </h2>
          </div>
          
          {/* Creative Grid Layout - All 3 Cards in One Row */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 - Fans */}
            <div className="group relative" data-scroll-card>
              <div className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 relative overflow-hidden bg-white">
                <Spotlight
                  className="bg-gray-300 blur-2xl"
                  size={200}
                  springOptions={{
                    bounce: 0.3,
                    duration: 0.1,
                  }}
                />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl">
                        01
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Fans</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-blue-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Move from watching to owning exposure</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-blue-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Small ticket sizes</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-blue-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Feel connected to your favourite teams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Investors */}
            <div className="group relative" data-scroll-card>
              <div className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 relative overflow-hidden bg-white">
                <Spotlight
                  className="bg-gray-300 blur-2xl"
                  size={200}
                  springOptions={{
                    bounce: 0.3,
                    duration: 0.1,
                  }}
                />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl">
                        02
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Investors</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-green-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Access sports as an asset class</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-green-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Diversify beyond stocks & crypto</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-green-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Clear, curated opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Everyone */}
            <div className="group relative sm:col-span-1 md:col-span-2 lg:col-span-1" data-scroll-card>
              <div className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 relative overflow-hidden bg-white">
                <Spotlight
                  className="bg-gray-300 blur-2xl"
                  size={200}
                  springOptions={{
                    bounce: 0.3,
                    duration: 0.1,
                  }}
                />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl">
                        03
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Everyone</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-purple-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Simple onboarding</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-purple-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Transparent economics</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg bg-purple-600"></div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">Modern, secure infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - How It Works */}
      <section id="how-it-works" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-scroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
          </div>
          
          {/* Main Content: Mockup Left, Steps Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start lg:items-center">
            {/* Left Side - Mac-like Landscape Screen */}
            <div className="step-item flex justify-center lg:justify-start order-1 lg:order-1" data-step="0">
              <div className="relative w-full max-w-full">
                {/* Mac-like frame */}
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  {/* Mac screen frame */}
                  <div className="bg-gray-800 rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2 shadow-2xl">
                    {/* Screen bezel */}
                    <div className="bg-black rounded-t-lg sm:rounded-t-xl overflow-hidden">
                      {/* Screen content area */}
                      <div className="bg-gray-100 aspect-video w-full">
                        <Image
                          src="/sec-51.png"
                          alt="Fanstake dashboard"
                          width={800}
                          height={450}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                    {/* Mac base */}
                    <div className="h-1.5 sm:h-2 bg-gray-800"></div>
                    <div className="h-0.5 sm:h-1 bg-gray-700 rounded-b-xl sm:rounded-b-2xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 order-2 lg:order-2">
              {/* Step 1 */}
              <div className="step-item flex items-start gap-4 sm:gap-6 relative" data-step="1">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 step-number">1</span>
                  </div>
                  {/* Dotted line connector - extends to next step */}
                  <svg 
                    className="absolute top-12 sm:top-14 md:top-16 left-1/2 transform -translate-x-1/2 block lg:hidden" 
                    width="2" 
                    height="48" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="48" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <svg 
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden lg:block" 
                    width="2" 
                    height="80" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="80" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Sign Up</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create your account in minutes with a simple, secure onboarding process. Get started with no hassle.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item flex items-start gap-4 sm:gap-6 relative" data-step="2">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 step-number">2</span>
                  </div>
                  {/* Dotted line connector - extends to next step */}
                  <svg 
                    className="absolute top-12 sm:top-14 md:top-16 left-1/2 transform -translate-x-1/2 block lg:hidden" 
                    width="2" 
                    height="48" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="48" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <svg 
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden lg:block" 
                    width="2" 
                    height="80" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="80" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Discover Deals</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Browse curated sports investment opportunities with transparent details. Find deals that match your interests.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item flex items-start gap-4 sm:gap-6 relative" data-step="3">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 step-number">3</span>
                  </div>
                  {/* Dotted line connector - extends to next step */}
                  <svg 
                    className="absolute top-12 sm:top-14 md:top-16 left-1/2 transform -translate-x-1/2 block lg:hidden" 
                    width="2" 
                    height="48" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="48" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <svg 
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden lg:block" 
                    width="2" 
                    height="80" 
                    style={{ marginLeft: '-1px' }}
                  >
                    <line 
                      x1="1" 
                      y1="0" 
                      x2="1" 
                      y2="80" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Invest Fractionally</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Start with small ticket sizes and invest in your favorite teams or opportunities. No large capital required.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-item flex items-start gap-4 sm:gap-6" data-step="4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 step-number">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Track Everything</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Monitor your investments with real-time updates and comprehensive analytics. Stay informed about your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-12" data-scroll>
            <Link 
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg group"
            >
              See full process
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 05 - Built For This Generation */}
      <section id="built-for-generation" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" data-scroll>
            Simple. Transparent. Accessible.
          </h2>

          <div className="relative">
            <div className="relative z-10 space-y-4 sm:space-y-5 md:w-1/2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                No jargon. No gated access. <span className="font-semibold text-gray-900">Just clean sports investment opportunities</span> designed for modern fans and investors.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                We open the doors for fans and investors to access curated sports deals — with small ticket sizes and transparent terms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 sm:pt-8 sm:gap-6">
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-50">
                      <Zap className="size-3 sm:size-4 text-blue-600" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Simple</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">No jargon. No gated access. Just clean sports investment opportunities.</p>
                </div>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1.5 rounded-lg bg-green-50">
                      <Shield className="size-3 sm:size-4 text-green-600" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Transparent</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Clear, curated opportunities with transparent terms and economics.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 h-fit md:absolute md:right-0 md:top-0 md:mt-0 md:w-1/2 md:pl-6 lg:pl-8">
              <div className="border-gray-300/60 relative rounded-xl sm:rounded-2xl border border-dashed p-1.5 sm:p-2 bg-gray-50/50">
                <Image
                  src="/sec-51.png"
                  className="rounded-lg sm:rounded-[12px] shadow-lg w-full h-auto"
                  alt="Portfolio growth and investment categories"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Final CTA */}
      <section id="final-cta" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl" data-scroll>
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl -mr-24 sm:-mr-32 md:-mr-40 lg:-mr-48 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl -ml-24 sm:-ml-32 md:-ml-40 lg:-ml-48 -mb-24 sm:-mb-32 md:-mb-40 lg:-mb-48"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 text-center">
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  The future of sports investing starts here
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Join thousands of fans and investors who are already part of the revolution.
                </p>
                <div className="pt-4 sm:pt-6">
                  <button className="bg-white text-gray-900 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl tracking-wide uppercase hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto">
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
