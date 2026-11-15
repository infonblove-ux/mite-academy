"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // যে পেজগুলোতে হেডার শো করবে না, তাদের লিস্ট
  const hiddenPaths = [
    "/canva-cortex",
    "/fearless-photoshop",
    "/smart-smm"
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.lucide) window.lucide.createIcons();
    }, 50);
    return () => clearTimeout(timer);
  }, [isMobileMenuOpen, pathname]);

  // ল্যান্ডিং পেজে হেডার লুকানোর লজিক
  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // সম্পূর্ণ হেডারটিকে একটি Sticky Wrapper-এ রাখা হয়েছে
    <div className="sticky top-0 z-[100] w-full shadow-2xl">
      
      {/* 1. Top Announcement Bar (Premium Academy Notice Style) */}
      <div className="marquee-container overflow-hidden whitespace-nowrap py-2.5 bg-gradient-to-r from-[#ff00a8] via-[#9a00a7] to-[#ff00a8] flex text-xs md:text-sm font-bold tracking-wide text-white border-b border-white/20 shadow-md">
        <div className="marquee-track flex animate-marquee shrink-0 items-center gap-12">
          <span className="inline-flex items-center gap-2"><i data-lucide="sparkles" className="w-4 h-4 text-[#ebff00]"></i> নতুন ব্যাচে অ্যাডমিশন চলছে! সীমিত আসন অবশিষ্ট।</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="shield-check" className="w-4 h-4 text-[#ebff00]"></i> ভারত সরকার দ্বারা স্বীকৃত সার্টিফিকেট সুবিধা</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="credit-card" className="w-4 h-4 text-[#ebff00]"></i> অ্যাডমিশনে সহজ কিস্তির সুযোগ</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="phone-call" className="w-4 h-4 text-[#ebff00]"></i> অ্যাডমিশন হেল্পলাইন: +91 747 844 2655</span>
        </div>
        <div className="marquee-track flex animate-marquee shrink-0 items-center gap-12 ml-12" aria-hidden="true">
          <span className="inline-flex items-center gap-2"><i data-lucide="sparkles" className="w-4 h-4 text-[#ebff00]"></i> নতুন ব্যাচে অ্যাডমিশন চলছে! সীমিত আসন অবশিষ্ট।</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="shield-check" className="w-4 h-4 text-[#ebff00]"></i> ভারত সরকার দ্বারা স্বীকৃত সার্টিফিকেট সুবিধা</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="credit-card" className="w-4 h-4 text-[#ebff00]"></i> অ্যাডমিশনে সহজ কিস্তির সুযোগ</span>
          <span className="inline-flex items-center gap-2"><i data-lucide="phone-call" className="w-4 h-4 text-[#ebff00]"></i> অ্যাডমিশন হেল্পলাইন: +91 747 844 2655</span>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Modern Ed-Tech Style) */}
      <header className="border-b border-white/10 bg-[#0d0012]/85 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff00a8] to-[#ebff00] flex items-center justify-center text-black font-black text-2xl shadow-[0_0_15px_rgba(235,255,0,0.4)] group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-wide group-hover:text-[#ebff00] transition-colors leading-none">
                  MITE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-pink-300 leading-none mt-1">
                  Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Centered) */}
            <nav className="hidden md:flex items-center justify-center gap-2 flex-grow">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? "bg-[#ebff00]/15 text-[#ebff00] border border-[#ebff00]/30" 
                        : "text-white/80 hover:bg-white/10 hover:text-white border border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Support / Admission Button */}
            <div className="flex items-center gap-4 shrink-0">
              <a href="https://wa.me/917478442655" target="_blank" className="hidden lg:flex btn-electric px-6 py-2.5 rounded-full text-sm font-black items-center gap-2 shadow-[0_0_20px_rgba(235,255,0,0.3)]">
                <i data-lucide="headset" className="w-4 h-4"></i> Admission Support
              </a>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#ebff00] focus:outline-none transition-colors bg-white/5 rounded-lg border border-white/10"
              >
                <i data-lucide={isMobileMenuOpen ? "x" : "menu"} className="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0012]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
            <nav className="flex flex-col px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className={`block px-5 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                      isActive 
                        ? "bg-[#ebff00]/15 text-[#ebff00] border border-[#ebff00]/30" 
                        : "text-white/80 hover:bg-white/10 hover:text-white border border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a href="https://wa.me/917478442655" target="_blank" className="flex items-center justify-center gap-2 w-full mt-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#ebff00] to-[#ff00a8] text-black text-sm font-black shadow-lg">
                  <i data-lucide="headset" className="w-4 h-4"></i> Admission Support
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}