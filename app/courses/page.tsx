"use client";

import { useEffect } from "react";
import Link from "next/link"; // Next.js Link ইম্পোর্ট করা হয়েছে

export default function Courses() {
  useEffect(() => {
    // Initialize Lucide Icons
    const initIcons = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.lucide) {
        // @ts-ignore
        window.lucide.createIcons();
      } else {
        setTimeout(initIcons, 100);
      }
    };
    initIcons();

    // Cursor Animation Logic
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    const ease = 0.16;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    function renderCursor() {
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      animationFrameId = requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactiveTargets = document.querySelectorAll("a, button, .glass-box, input");
    interactiveTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Elements */}
      <div id="cursorDot" aria-hidden="true"></div>
      <div id="cursorRing" aria-hidden="true"></div>

      {/* Background Glow */}
      <div
        className="animate-glow-pulse"
        style={{
          position: "fixed",
          top: "10%",
          left: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(154, 0, 167, 0.3) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>

      <main className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-[#ebff00] hover:text-white transition-colors text-sm font-bold mb-6">
            <i data-lucide="arrow-left" className="w-4 h-4"></i> হোমে ফিরে যান
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">
            আমাদের <span className="text-electric-yellow">স্কিল ডেভেলপমেন্ট</span> কোর্সসমূহ
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            আপনার ক্যারিয়ারের লক্ষ্য অনুযায়ী সঠিক কোর্সটি বেছে নিন এবং আজই শেখা শুরু করুন। 
            প্রতিটি কোর্স বাস্তব প্রজেক্ট ও মার্কেটপ্লেসের চাহিদার ওপর ভিত্তি করে তৈরি।
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Course 1: Fearless Photoshop */}
          <div className="glass-box rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15">
            <div>
              <div className="h-56 bg-gradient-to-tr from-[#3a0045] via-[#750080] to-[#ff00a8] relative flex items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="p-3 rounded-2xl bg-white/20 mb-3 text-[#ebff00]">
                    <i data-lucide="image" className="w-8 h-8"></i>
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#ebff00] font-bold">Ai Powered Track</span>
                  <h3 className="text-2xl font-black text-white mt-1">Fearless Photoshop</h3>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff00a8]/30 text-white border border-[#ff00a8]/40">Adobe Photoshop + AI</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">বেসিক থেকে প্রো</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  একদম বেসিক থেকে প্রফেশনাল লেভেল পর্যন্ত Photoshop শেখানো হবে। এই কোর্সটি এমনভাবে সাজানো হয়েছে, যাতে শুধু টুল শেখা নয়—বরং বাস্তব প্রজেক্টে কাজ করা ও Freelancing-এর জন্য প্রয়োজনীয় দক্ষতা অর্জন করা যায়।
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ৩ মাসের প্র্যাকটিক্যাল লাইভ ক্লাস</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> রিয়েল লাইফ ক্লায়েন্ট প্রজেক্ট</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ফ্রিল্যান্সিং গাইডলাইন</li>
                </ul>
              </div>
            </div>

            <div className="p-7 pt-0 border-t border-white/10 mt-4">
              {/* আপডেট করা লিংক */}
              <Link href="/fearless-photoshop" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 mt-4">
                বিস্তারিত জানুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
              </Link>
            </div>
          </div>

          {/* Course 2: Smart SMM */}
          <div className="glass-box rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15">
            <div>
              <div className="h-56 bg-gradient-to-tr from-[#1f0026] via-[#9a00a7] to-[#ebff00] relative flex items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="p-3 rounded-2xl bg-white/20 mb-3 text-[#ebff00]">
                    <i data-lucide="share-2" className="w-8 h-8"></i>
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#ebff00] font-bold">Growth & Marketing</span>
                  <h3 className="text-2xl font-black text-white mt-1">Smart SMM by Antara</h3>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#9a00a7]/40 text-white border border-[#9a00a7]/60">Social Media</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">স্টাডি ম্যাটেরিয়াল সহ</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  শিখবেন কীভাবে একটি ব্র্যান্ড বা ব্যবসার Social Media Presence পরিকল্পনা, পরিচালনা ও গ্রো করাতে হয়। Content Planning, Page Management এবং Client Handling হাতে-কলমে শেখানো হবে।
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ফেসবুক ও ইন্সটাগ্রাম মার্কেটিং</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> কন্টেন্ট ক্যালেন্ডার তৈরি</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> অর্গানিক গ্রোথ হ্যাকস</li>
                </ul>
              </div>
            </div>

            <div className="p-7 pt-0 border-t border-white/10 mt-4">
              {/* আপডেট করা লিংক */}
              <Link href="/smart-smm" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 mt-4">
                বিস্তারিত জানুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
              </Link>
            </div>
          </div>

          {/* Course 3: Canva Cortex */}
          <div className="glass-box rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15">
            <div>
              <div className="h-56 bg-gradient-to-tr from-[#3a0045] via-[#ff00a8] to-[#9a00a7] relative flex items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="p-3 rounded-2xl bg-white/20 mb-3 text-[#ebff00]">
                    <i data-lucide="palette" className="w-8 h-8"></i>
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#ebff00] font-bold">Fast-Track Design AI</span>
                  <h3 className="text-2xl font-black text-white mt-1">Canva Cortex</h3>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff00a8]/30 text-white border border-[#ff00a8]/40">Canva + GenAI</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">ব্র্যান্ডিং ও ডিজাইন</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Canva ব্যবহার করে প্রফেশনাল মানের Graphic Design তৈরি করার সম্পূর্ণ প্রক্রিয়া। Design Fundamentals, Creative Thinking, Social Media Design, Branding শেখানো হবে।
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> AI টুলস ইন্টিগ্রেশন</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> সোশ্যাল মিডিয়া পোস্ট ডিজাইন</li>
                  <li className="flex items-center gap-2"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> পোর্টফোলিও বিল্ডিং</li>
                </ul>
              </div>
            </div>

            <div className="p-7 pt-0 border-t border-white/10 mt-4">
              {/* আপডেট করা লিংক */}
              <Link href="/canva-cortex" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 mt-4">
                বিস্তারিত জানুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
              </Link>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}