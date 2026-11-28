"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function About() {
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

      {/* Glow Orbs in background */}
      <div
        className="animate-glow-pulse"
        style={{
          position: "fixed",
          top: "5%",
          right: "10%",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(255, 0, 168, 0.35) 0%, rgba(154, 0, 167, 0.15) 50%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>
      <div
        className="animate-glow-pulse"
        style={{
          position: "fixed",
          bottom: "10%",
          left: "5%",
          width: "580px",
          height: "580px",
          background: "radial-gradient(circle, rgba(154, 0, 167, 0.4) 0%, rgba(235, 255, 0, 0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>

      {/* Navigation / Back Button (Optional) */}
     

      {/* MAIN WRAPPER */}
      <main className="relative z-10 py-6 md:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* HERO & FOUNDER BIO CARD */}
        <article className="glass-box rounded-3xl p-6 sm:p-10 md:p-12 mb-10 relative overflow-hidden">
          {/* Top Decorative Accent */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brandPink animate-ping"></span>
              <span className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">MITE Academy</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Digital Skills & Freelancing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Image Insert Placeholder */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[280px]">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#ff00a8] via-[#ebff00] to-[#9a00a7] rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative w-full aspect-[4/5] rounded-2xl border-2 border-dashed border-white/40 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#ebff00] mb-4 border border-white/20">
                    <i data-lucide="image" className="w-8 h-8"></i>
                  </div>
                  <p className="text-[#ebff00] font-bold text-base sm:text-lg tracking-wide">[Image insert placeholder]</p>
                  <p className="text-xs text-purple-200/80 mt-1">অন্তরা মাইতি (Antara Maity)</p>
                </div>
              </div>
            </div>

            {/* Founder Bio & Story */}
            <div className="md:col-span-7 space-y-5 text-purple-100 leading-relaxed text-base sm:text-lg">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                আমি <span className="text-electric-yellow">অন্তরা মাইতি (Antara Maity)</span>, 
                <span className="block text-lg sm:text-xl font-normal text-purple-200 mt-1">
                  B.Tech in Electronics & Tele-communication, Bengal Institute of Technology and Management (BITM)-এর প্রাক্তন ছাত্রী।
                </span>
              </h1>

              <p>
                একসময় তথাকথিত নিরাপদ সরকারি চাকরির পথ ছেড়ে ২০২১ সালে আমি শুরু করি <strong className="text-white font-semibold">Freelancing ও Digital Skills-এর যাত্রা</strong>। এই যাত্রায় কাজ করতে হয়েছে অনেক ধরনের মানুষের সাথে, কাজ করতে করতে খুব কাছ থেকে উপলব্ধি করি—বর্তমান সময়ে ডিজিটাল দক্ষতা শুধু একটি অতিরিক্ত যোগ্যতা নয়, বরং নিজের ক্যারিয়ার ও আয়ের সুযোগ তৈরি করার একটি শক্তিশালী মাধ্যম।
              </p>

              <p>
                বিশেষ করে আমাদের পশ্চিমবঙ্গের যুবক-যুবতী ও ছাত্রছাত্রীদের মধ্যে অসাধারণ প্রতিভা থাকা সত্ত্বেও <span className="text-[#ebff00] font-semibold">Digital Skills, Freelancing এবং Online Career</span>-এর সুযোগ সম্পর্কে এখনও অনেকের পর্যাপ্ত ধারণা ও সঠিক দিকনির্দেশনার অভাব রয়েছে।
              </p>
            </div>
          </div>

          {/* Extended Story & Value Proposition */}
          <div className="mt-8 pt-8 border-t border-white/10 space-y-5 text-purple-100 leading-relaxed text-base sm:text-lg">
            <p>
              সেই উপলব্ধি থেকেই আমাদের এই ছোট্ট উদ্যোগ—<strong className="text-electric-yellow font-bold">MITE Academy</strong>। আমাদের লক্ষ্য শুধু আপনাকে কোনো একটি সফটওয়্যার শেখানো নয়। আমরা চাই, আপনি এমন <span className="text-white font-semibold underline decoration-[#ff00a8] decoration-2 underline-offset-4">Practical Digital Skills</span> অর্জন করুন যা বাস্তব কাজ, freelancing এবং career growth-এর ক্ষেত্রে কাজে লাগাতে পারবেন।
            </p>

            <p>
              আমার নিজের শেখা, কাজ করা এবং freelancing-এর অভিজ্ঞতা থেকে যা কিছু অর্জন করেছি, সেই বাস্তব অভিজ্ঞতা ও জ্ঞান আপনাদের সঙ্গে ভাগ করে দেওয়াই আমাদের প্রধান উদ্দেশ্য।
            </p>

            {/* Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brandPink/20 text-brandPink flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="users-check" className="w-5 h-5"></i>
                </div>
                <p className="text-sm sm:text-base text-white">
                  আপনাকে শেখানোর জন্য আপনাদের পাশে পাবেন রিয়েল মার্কেটে কাজ করা অভিজ্ঞ শিক্ষক, শিক্ষিকা। যারা আপনাকে হাত ধরে শেখাবে সমস্থ স্কিলস। যে কোনো সমস্যায় পাশে থাকবেন।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ebff00]/20 text-[#ebff00] flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="award" className="w-5 h-5"></i>
                </div>
                <p className="text-sm sm:text-base text-white">
                  বর্তমান বাজারের কম্পিটিশনে টিকে থাকবার জন্য পাবেন কোর্স শেষে <strong className="text-electric-yellow">Certificate</strong>.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* MISSION SECTION (আমাদের লক্ষ্যঃ) */}
        <section className="glass-box rounded-3xl p-6 sm:p-10 md:p-12 mb-10 relative overflow-hidden">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebff00]/15 border border-[#ebff00]/30 text-[#ebff00] font-bold text-sm">
              <i data-lucide="target" className="w-4 h-4"></i>
              আমাদের লক্ষ্যঃ
            </div>

            <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
              আমরা এমন একটি <span className="text-electric-yellow">Digital Skilled West Bengal</span> তৈরি করতে চাই, যেখানে একজন ছাত্রছাত্রী, চাকরিপ্রার্থী বা তরুণ-তরুণী শুধুমাত্র সরকারি বা বেসরকারি চাকরির ওপর নির্ভরশীল থাকবে না।
            </p>

            <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
              বরং তার নিজের হাতে থাকবে এমন কিছু <strong className="text-white font-semibold">Digital Skills ও Freelancing Skills</strong>, যার মাধ্যমে সে নিজের যোগ্যতা, প্রতিভা ও সম্ভাবনাকে কাজে লাগিয়ে নিজের ক্যারিয়ার ও আয়ের নতুন পথ তৈরি করতে পারবে।
            </p>

            <p className="text-purple-100 text-base sm:text-lg leading-relaxed">
              আমাদের বিশ্বাস, <span className="text-[#ebff00] font-semibold">Digital Skills</span> গভীরে শুধু একটি পেশাগত দক্ষতা নয়—এটি আত্মনির্ভরশীল হওয়ার একটি শক্তিশালী মাধ্যম। সঠিক জ্ঞান, সঠিক দিকনির্দেশনা এবং নিয়মিত অনুশীলনের মাধ্যমে একজন মানুষ নিজের সম্ভাবনাকে অনেক দূর পর্যন্ত নিয়ে যেতে পারে।
            </p>
          </div>
        </section>

        {/* INSPIRATIONAL QUOTE BLOCK */}
        <div className="glass-box rounded-3xl p-8 sm:p-12 text-center mb-10 border-2 border-brandPink/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brandPink/15 via-transparent to-[#ebff00]/10 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <i data-lucide="quote" className="w-10 h-10 text-[#ebff00] mx-auto opacity-80"></i>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
              “চাকরি একটি সুযোগ হতে পারে, কিন্তু <span className="text-electric-yellow">দক্ষতা আপনাকে নিজের সুযোগ তৈরি করতে</span> শেখায়।”
            </blockquote>
          </div>
        </div>

        {/* CLOSING CALL TO ACTION & BELIEF */}
        <section className="glass-box rounded-3xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden border border-white/20">
          <div className="max-w-3xl mx-auto space-y-6 text-purple-100 leading-relaxed text-base sm:text-lg">
            <p>
              এই বিশ্বাস থেকেই <strong className="text-white font-semibold">MITE Academy-এর পথচলা</strong>। আমরা শুধু শেখাতে চাই না, আমরা চাই আপনাকে এমনভাবে প্রস্তুত করতে, যাতে আপনি শেখা দক্ষতাকে বাস্তব জীবনে কাজে লাগাতে পারেন এবং নিজের জন্য একটি শক্তিশালী ভবিষ্যৎ তৈরি করতে পারেন।
            </p>

            <p>
              আজ হয়তো আপনি একজন শিক্ষার্থী, চাকরিপ্রার্থী কিংবা একেবারে নতুন একজন learner। কিন্তু সঠিক Digital Skills এবং ধারাবাহিক প্রচেষ্টার মাধ্যমে আপনিও একদিন নিজের পরিচয়, নিজের কাজ এবং নিজের income opportunity তৈরি করতে পারেন।
            </p>

            <p className="text-lg sm:text-xl font-bold text-white pt-2">
              MITE Academy-এর মাধ্যমে আমরা সেই দক্ষতার পথচলায় আপনার পাশে থাকতে চাই।
            </p>

            {/* Signature Closing Line */}
            <div className="pt-6">
              <div className="inline-block p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-brandPink/20 via-white/5 to-[#ebff00]/20 border border-[#ebff00]/30 shadow-lg">
                <p className="text-xl sm:text-3xl font-black text-electric-yellow tracking-wide">
                  শিখুন। দক্ষ হোন। নিজের সুযোগ নিজেই তৈরি করুন।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
