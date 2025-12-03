"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useEmailModal } from "./EmailModalProvider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useEmailModal();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-transparent">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 relative shadow-[0_8px_16px_-4px_rgba(0,0,0,0.15),0_4px_8px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.08),inset_0_2px_4px_0_rgba(255,255,255,0.8),inset_0_-1px_0_0_rgba(0,0,0,0.05)] before:absolute before:inset-0 before:rounded-xl sm:before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none border border-gray-200/60 transform transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                FANSTAKE
              </Link>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <Link 
                  href="/how-it-works" 
                  className={`text-gray-800 hover:text-gray-900 text-sm lg:text-base font-semibold tracking-wide uppercase transition-all px-4 lg:px-5 py-2 lg:py-3 rounded-xl hover:bg-gray-50 border-2 ${
                    isActive("/how-it-works") 
                      ? "border-gray-200 bg-gray-50" 
                      : "border-transparent hover:border-gray-200"
                  } animation-delay-200 animate-fade-in`}
                >
                  How it works
                </Link>
                <Link 
                  href="/faq" 
                  className={`text-gray-800 hover:text-gray-900 text-sm lg:text-base font-semibold tracking-wide uppercase transition-all px-4 lg:px-5 py-2 lg:py-3 rounded-xl hover:bg-gray-50 border-2 ${
                    isActive("/faq") 
                      ? "border-gray-200 bg-gray-50" 
                      : "border-transparent hover:border-gray-200"
                  } animation-delay-300 animate-fade-in`}
                >
                  FAQ
                </Link>
                <button 
                  onClick={openModal}
                  className="bg-gray-900 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-xl font-bold text-sm lg:text-base tracking-wide uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-md animation-delay-400 animate-fade-in"
                >
                  Join waitlist
                </button>
              </div>
              
              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden bg-gray-900 text-white p-2.5 rounded-xl font-bold transition-all"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <span 
                    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span 
                    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span 
                    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-96 opacity-100 mt-4 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-3 pt-2 pb-2">
                <Link 
                  href="/how-it-works" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-800 hover:text-gray-900 text-base font-semibold tracking-wide uppercase transition-all px-5 py-3 rounded-xl hover:bg-gray-50 border-2 ${
                    isActive("/how-it-works") 
                      ? "border-gray-200 bg-gray-50" 
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  How it works
                </Link>
                <Link 
                  href="/faq" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-800 hover:text-gray-900 text-base font-semibold tracking-wide uppercase transition-all px-5 py-3 rounded-xl hover:bg-gray-50 border-2 ${
                    isActive("/faq") 
                      ? "border-gray-200 bg-gray-50" 
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  FAQ
                </Link>
                <button 
                  onClick={() => {
                    openModal();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold text-base tracking-wide uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-md w-full text-left"
                >
                  Join waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* Spacer to prevent content from going under fixed navbar */}
    <div className="h-[80px] sm:h-[88px] md:h-[96px] lg:h-[104px]"></div>
    </>
  );
}
