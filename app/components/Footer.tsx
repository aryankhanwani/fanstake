"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 pb-0 sm:pb-0 lg:pb-0 relative overflow-hidden flex flex-col min-h-[600px]" data-scroll>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-4">FANSTAKE</div>
              <p className="text-[#4B5563] mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                Opening doors for fans and investors to access real sports investment opportunities — simple, transparent, and built for everyone.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h3 className="font-semibold mb-4 uppercase tracking-wide text-[#1E3A8A]">Product</h3>
              <ul className="space-y-3 text-[#4B5563]">
                <li>
                  <Link href="/how-it-works" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#what-we-are" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#why-choose-us" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="font-semibold mb-4 uppercase tracking-wide text-[#1E3A8A]">Company</h3>
              <ul className="space-y-3 text-[#4B5563]">
                <li>
                  <Link href="/faq" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B35] transition-colors text-sm sm:text-base">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1E3A8A]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4B5563] text-sm">
              © {new Date().getFullYear()} FANSTAKE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#4B5563] hover:text-[#FF6B35] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#4B5563] hover:text-[#FF6B35] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* FANSTAKE Brand Name with Light Gradient */}
          <div className="relative pt-4 pb-0 w-full mt-auto -mb-4 sm:-mb-6 lg:-mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F0]/20 via-transparent to-transparent pointer-events-none z-0"></div>
            <div className="relative w-full z-10">
              <div className="w-full flex justify-center text-center">
                <div className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-bold text-[#1E3A8A]/20 tracking-tight leading-none">
                  FANSTAKE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

