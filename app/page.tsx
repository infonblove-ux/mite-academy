"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
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

    // FAQ Accordion Logic
    const faqToggles = document.querySelectorAll(".faq-toggle");
    const handleFaqClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const currentContent = btn.nextElementSibling as HTMLElement;
      const currentChevron = btn.querySelector(".faq-chevron") as HTMLElement;
      const isAlreadyOpen = !currentContent.classList.contains("hidden");

      document.querySelectorAll(".faq-content").forEach((item) => item.classList.add("hidden"));
      document.querySelectorAll(".faq-chevron").forEach((icon) => ((icon as HTMLElement).style.transform = "rotate(0deg)"));

      if (!isAlreadyOpen) {
        currentContent.classList.remove("hidden");
        currentChevron.style.transform = "rotate(180deg)";
      }
    };

    faqToggles.forEach((btn) => btn.addEventListener("click", handleFaqClick));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      faqToggles.forEach((btn) => btn.removeEventListener("click", handleFaqClick));
    };
  }, []);

  return (
    <>
      {/* Interactive Dual Cursor Elements */}
      <div id="cursorDot"></div>
      <div id="cursorRing"></div>

      {/* Dynamic Blurred Glow Orbs (Fixed) */}
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
      ></div>

      <main className="relative z-10">

        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-box text-xs md:text-sm font-medium mb-8 border border-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ebff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ebff00]"></span>
            </span>
            <span className="text-white/90">অ্যাডমিশন ওপেন • লাইভ ও ক্যারিয়ার-ফোকাসড ব্যাচ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.25] max-w-5xl mx-auto mb-6">
            ডিজিটাল স্কিলস গুলো শিখুন <br className="hidden sm:inline" />
            সেরা প্ল্যাটফর্ম থেকে। <span className="text-electric-yellow font-extrabold">MITE Academy.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed mb-6 font-normal">
            <strong className="text-white font-semibold">Artificial Intelligence (AI), Design AI, Canva, Photoshop</strong> ও 
            <strong className="text-white font-semibold">Social Media Management</strong> শিখুন হাতে-কলমে ও বাস্তব মার্কেটভিত্তিক প্রশিক্ষণের মাধ্যমে।
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Student, Housewife, Business Owner, Side Hustler কিংবা Freelancer—আপনার লক্ষ্য অনুযায়ী ডিজিটাল দক্ষতা তৈরি করুন MITE-এর সাথে।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <a href="#courses" className="btn-electric w-full sm:w-auto px-9 py-4 rounded-xl text-lg flex items-center justify-center gap-3">
              <i data-lucide="book-open" className="w-5 h-5 text-black"></i>
              আমাদের কোর্সসমূহ
            </a>
            <a href="https://wa.me/917478442655?text=Hello%20MITE%20Academy,%20I%20want%20to%20know%20more%20about%20courses" target="_blank" className="btn-glass w-full sm:w-auto px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3">
              <i data-lucide="message-circle" className="w-5 h-5 text-[#ebff00]"></i>
              সরাসরি কথা বলুন
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 max-w-4xl mx-auto mb-14">
            <div className="flex items-center gap-2">
              <i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i>
              <span>সহজ কিস্তির সুবিধা</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i>
              <span>১০০% প্র্যাকটিক্যাল লার্নিং</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i>
              <span>কোর্স শেষে ভেরিফায়েড সার্টিফিকেট</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i>
              <span>তৎক্ষণাৎ লাইভ সাপোর্ট</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-left">
            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#ebff00] shrink-0">
                <i data-lucide="laptop" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">অনলাইন/অফলাইন কোর্স</h3>
                <p className="text-sm text-white/70">আধুনিক ও নিয়মিত আপডেটেড কারিকুলাম ভিত্তিক ক্লাস।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#ebff00] shrink-0">
                <i data-lucide="credit-card" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">সহজ কিস্তির সুবিধা</h3>
                <p className="text-sm text-white/70">আর্থিক চাপ ছাড়াই অ্যাডমিশনে কিস্তির মাধ্যমে পেমেন্ট।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#ebff00] shrink-0">
                <i data-lucide="award" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">অভিজ্ঞ শিক্ষক-শিক্ষিকা</h3>
                <p className="text-sm text-white/70">ইন্ডাস্ট্রি এক্সপার্ট মেন্টরদের সার্বক্ষণিক গাইডেন্স।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#ebff00] shrink-0">
                <i data-lucide="badge-check" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">স্বীকৃত সার্টিফিকেট</h3>
                <p className="text-sm text-white/70">ভারত সরকার দ্বারা স্বীকৃত পেশাদার ভ্যালুয়েবল সার্টিফিকেট।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Identification Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              ডিজিটাল স্কিল শিখতে গিয়ে আপনি কি এই সমস্যার মুখে পড়ছেন?
            </h2>
            <p className="text-white/70">ইউটিউবে হাজারো টিউটোরিয়াল দেখেও কাজের বাস্তব প্রয়োগ এবং ক্লায়েন্ট পাওয়ার কৌশল অজানা থেকে যায়。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-box p-7 rounded-2xl border-l-4 border-l-[#ff00a8]">
              <div className="text-[#ff00a8] mb-4">
                <i data-lucide="alert-triangle" className="w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">সঠিক দিকনির্দেশনার অভাব</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                কোথা থেকে শুরু করবেন, কীভাবে বাস্তব প্রজেক্ট তৈরি করবেন আর কীভাবে ক্লায়েন্টের কাজ হ্যান্ডেল করবেন—তা বোঝানোর কেউ থাকে না।
              </p>
            </div>

            <div className="glass-box p-7 rounded-2xl border-l-4 border-l-[#ebff00]">
              <div className="text-[#ebff00] mb-4">
                <i data-lucide="help-circle" className="w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">সমস্যায় পড়লে সাপোর্টের অভাব</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                রেকর্ডেড ভিডিও দেখে প্র্যাকটিস করার সময় কোথাও আটকে গেলে তাৎক্ষণিক সমাধান বা প্রশ্নের সরাসরি উত্তর মেলে না।
              </p>
            </div>

            <div className="glass-box p-7 rounded-2xl border-l-4 border-l-[#9a00a7]">
              <div className="text-[#9a00a7] mb-4">
                <i data-lucide="trending-down" className="w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">টুল জানা থাকলেও ইনকাম হচ্ছে না</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                টুলস ব্যবহার শিখলেও প্রফেশনাল পোর্টফোলিও তৈরি এবং মার্কেটপ্লেসে সঠিক ক্লায়েন্ট রিচআউট করার সঠিক ব্লুপ্রিন্ট পান না।
              </p>
            </div>
          </div>
        </section>

        {/* Section-2: Why MITE Academy? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Our Core Pillars</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
              কেনো শিখবেন MITE Academy থেকে?
            </h2>
            <p className="text-xl text-[#ebff00] font-semibold mb-4">
              শুধু কোর্স নয়, দক্ষতা থেকে বাস্তব সুযোগ তৈরির সম্পূর্ণ গাইডলাইন।
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              ডিজিটাল স্কিল শেখার পাশাপাশি সঠিক গাইডলাইন, আপডেটেড রিসোর্স এবং নিয়মিত সাপোর্ট—একজন শিক্ষার্থীর সফলতার জন্য সবকিছুই গুরুত্বপূর্ণ। 
              MITE Academy আপনাকে দিচ্ছে শেখার জন্য একটি পূর্ণাঙ্গ ও Practical Learning Experience।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ebff00] shrink-0">
                <i data-lucide="user-check" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">অভিজ্ঞ মেন্টর</h3>
                <p className="text-sm text-white/70">বাস্তব ইন্ডাস্ট্রির অভিজ্ঞ ট্রেইনারদের সরাসরি তত্ত্বাবধানে হাতে-কলমে শিক্ষা।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ff00a8] shrink-0">
                <i data-lucide="layers" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">মডার্ন ও আপডেটেড স্টাডি ম্যাটেরিয়াল</h3>
                <p className="text-sm text-white/70">লেটেস্ট এআই টুলস, প্রজেক্ট ফাইল এবং কমপ্লিট টেমপ্লেট লাইব্রেরি সুবিধা।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ebff00] shrink-0">
                <i data-lucide="wallet" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">ভর্তিতে কিস্তির সুবিধা</h3>
                <p className="text-sm text-white/70">কোনো আর্থিক চাপ ছাড়া স্বল্প ও সহজ কিস্তিতে ফি পরিশোধের সুযোগ।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ebff00] shrink-0">
                <i data-lucide="compass" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">১০০% Income Blueprint</h3>
                <p className="text-sm text-white/70">মার্কেটপ্লেস ও লোকাল ক্লায়েন্ট থেকে আয় শুরুর স্টেপ-বাই-স্টেপ রোডম্যাপ।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ff00a8] shrink-0">
                <i data-lucide="play-circle" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">ক্লাস রেকর্ডিং সুবিধা</h3>
                <p className="text-sm text-white/70">ক্লাস মিস হলে বা রিভিশনের জন্য প্রতিটি সেশনের হাই-কোয়ালিটি ভিডিও রেকর্ডিং।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ebff00] shrink-0">
                <i data-lucide="award" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">কোর্স শেষে সার্টিফিকেট</h3>
                <p className="text-sm text-white/70">ক্যারিয়ার ও সিভিতে যুক্ত করার মতো ভেরিফায়েড প্রাতিষ্ঠানিক সনদ।</p>
              </div>
            </div>

            <div className="glass-box p-6 rounded-2xl flex items-start gap-4 sm:col-span-2 lg:col-span-3 max-w-xl mx-auto w-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ebff00] shrink-0">
                <i data-lucide="headphones" className="w-6 h-6"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">তৎক্ষণাৎ সাপোর্ট</h3>
                <p className="text-sm text-white/70">কোর্স চলাকালীন যেকোনো টেকনিক্যাল ও প্র্যাকটিস বিষয়ক সমস্যার দ্রুত লাইভ সমাধান।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section-3: Featured Courses */}
        <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Skill Specialization</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">আমাদের বাছাইকৃত কোর্স সমূহ</h2>
            <p className="text-white/70 text-base md:text-lg">বাস্তব অভিজ্ঞতা, এআই ইনটিগ্রেশন ও ক্যারিয়ার ভিত্তিক শীর্ষ তিনটি কোর্স।</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Course 1 */}
            <div className="glass-box rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15">
              <div>
                <div className="h-56 bg-gradient-to-tr from-[#3a0045] via-[#750080] to-[#ff00a8] relative flex items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="p-3 rounded-2xl bg-white/20 mb-3 text-[#ebff00]">
                      <i data-lucide="image" className="w-8 h-8"></i>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#ebff00] font-bold">Ai Powered Practical Track</span>
                    <h3 className="text-2xl font-black text-white mt-1">Fearless Photoshop</h3>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff00a8]/30 text-white border border-[#ff00a8]/40">Adobe Photoshop + AI</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">বেসিক থেকে প্রো</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Fearless Photoshop হলো MITE Academy-এর একটি Ai Powered প্র্যাকটিক্যাল ও ক্যারিয়ার-ফোকাসড Adobe Photoshop Course, যেখানে একদম বেসিক থেকে প্রফেশনাল লেভেল পর্যন্ত Photoshop শেখানো হবে। এই কোর্সটি এমনভাবে সাজানো হয়েছে, যাতে শুধু Photoshop-এর টুল শেখা নয়—বরং বাস্তব প্রজেক্টে কাজ করা, Creative Design তৈরি করা, ডিজাইনের জন্য ক্লাইন্ট খোঁজা এবং Freelancing-এর জন্য প্রয়োজনীয় দক্ষতা অর্জন করা যায়।
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a href="#admission" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                    বিস্তারিত দেখুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Course 2 */}
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
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#9a00a7]/40 text-white border border-[#9a00a7]/60">Social Media Management</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">স্টাডি ম্যাটেরিয়াল সহ</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Social Media Management Course হলো MITE Academy-এর একটি Ai Powered প্র্যাকটিক্যাল ও ক্যারিয়ার-ফোকাসড কোর্স, যেখানে আপনি শিখবেন কীভাবে একটি ব্র্যান্ড বা ব্যবসার Social Media Presence পরিকল্পনা, পরিচালনা ও গ্রো করাতে হয়। পাবেন সমস্থ স্টাডি ম্যাটেরিয়াল। এই কোর্সে শুধু পোস্ট তৈরি নয়—Content Planning, Social Media Strategy, Page Management, Client Handling এবং বাস্তব কাজের জন্য প্রয়োজনীয় দক্ষতা হাতে-কলমে শেখানো হবে।
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a href="#admission" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                    বিস্তারিত দেখুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="glass-box rounded-3xl overflow-hidden flex flex-col justify-between border border-white/15">
              <div>
                <div className="h-56 bg-gradient-to-tr from-[#3a0045] via-[#ff00a8] to-[#9a00a7] relative flex items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="p-3 rounded-2xl bg-white/20 mb-3 text-[#ebff00]">
                      <i data-lucide="palette" className="w-8 h-8"></i>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#ebff00] font-bold">Fast-Track Design AI</span>
                    <h3 className="text-2xl font-black text-white mt-1">Ai Powered Canva Cortex</h3>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff00a8]/30 text-white border border-[#ff00a8]/40">Canva + GenAI</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30">ব্র্যান্ডিং ও ডিজাইন</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Graphic Design with Canva হলো MITE Academy-এর Ai Powered একটি প্র্যাকটিক্যাল ও ক্যারিয়ার-ফোকাসড কোর্স, যেখানে Canva ব্যবহার করে প্রফেশনাল মানের Graphic Design তৈরি করার সম্পূর্ণ প্রক্রিয়া শেখানো হবে। এই কোর্সে শুধু Canva-এর বিভিন্ন টুল ব্যবহার নয়—বরং Design Fundamentals, Creative Thinking, Social Media Design, Branding এবং বাস্তব ক্লায়েন্টের কাজের উপযোগী ডিজাইন তৈরি করার দক্ষতা গড়ে তোলা হবে।
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a href="#admission" className="btn-electric w-full py-3 px-5 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                    বিস্তারিত দেখুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section-4: Student Success Stories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Proof of Success</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">কিছু ছাত্রছাত্রীর সফলতার গল্প</h2>
            <p className="text-white/70 text-base md:text-lg">দেখুন কীভাবে আমাদের শিক্ষার্থীরা শূন্য থেকে স্কিল তৈরি করে বাস্তব সুযোগের দিকে এগিয়ে গেছে।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-box rounded-2xl overflow-hidden group">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#2e0037] via-[#520061] to-[#120017] relative flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 text-[11px] font-bold text-[#ebff00] border border-white/10">Student Story 01</span>
                  <i data-lucide="youtube" className="w-5 h-5 text-red-500"></i>
                </div>
                <div className="flex flex-col items-center justify-center my-auto">
                  <a href="#admission" className="w-14 h-14 rounded-full bg-[#ebff00] text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <i data-lucide="play" className="w-6 h-6 fill-black ml-1"></i>
                  </a>
                  <span className="text-xs text-white/80 mt-3 font-semibold">ভিডিও প্লে করুন</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">হাউসওয়াইফ থেকে ডিজিটাল ডিজাইনার</h4>
                  <p className="text-xs text-white/60">Canva ও AI দিয়ে লোকাল ক্লায়েন্টের কাজ</p>
                </div>
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden group">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#2e0037] via-[#520061] to-[#120017] relative flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 text-[11px] font-bold text-[#ebff00] border border-white/10">Student Story 02</span>
                  <i data-lucide="youtube" className="w-5 h-5 text-red-500"></i>
                </div>
                <div className="flex flex-col items-center justify-center my-auto">
                  <a href="#admission" className="w-14 h-14 rounded-full bg-[#ebff00] text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <i data-lucide="play" className="w-6 h-6 fill-black ml-1"></i>
                  </a>
                  <span className="text-xs text-white/80 mt-3 font-semibold">ভিডিও প্লে করুন</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">কলেজ শিক্ষার্থীর সাইড ইনকাম</h4>
                  <p className="text-xs text-white/60">সোশ্যাল মিডিয়া ম্যানেজমেন্ট পেজ গ্রোথ</p>
                </div>
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden group">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#2e0037] via-[#520061] to-[#120017] relative flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 text-[11px] font-bold text-[#ebff00] border border-white/10">Student Story 03</span>
                  <i data-lucide="youtube" className="w-5 h-5 text-red-500"></i>
                </div>
                <div className="flex flex-col items-center justify-center my-auto">
                  <a href="#admission" className="w-14 h-14 rounded-full bg-[#ebff00] text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <i data-lucide="play" className="w-6 h-6 fill-black ml-1"></i>
                  </a>
                  <span className="text-xs text-white/80 mt-3 font-semibold">ভিডিও প্লে করুন</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">বেসিক থেকে ফটোশপ প্রো</h4>
                  <p className="text-xs text-white/60">প্রথম ফ্রিল্যান্স প্রজেক্ট ডেলিভারি অভিজ্ঞতা</p>
                </div>
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden group">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#2e0037] via-[#520061] to-[#120017] relative flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/60 text-[11px] font-bold text-[#ebff00] border border-white/10">Student Story 04</span>
                  <i data-lucide="youtube" className="w-5 h-5 text-red-500"></i>
                </div>
                <div className="flex flex-col items-center justify-center my-auto">
                  <a href="#admission" className="w-14 h-14 rounded-full bg-[#ebff00] text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <i data-lucide="play" className="w-6 h-6 fill-black ml-1"></i>
                  </a>
                  <span className="text-xs text-white/80 mt-3 font-semibold">ভিডিও প্লে করুন</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">স্মল বিজনেসের ব্র্যান্ডিং রূপান্তর</h4>
                  <p className="text-xs text-white/60">নিজের ব্যবসা পরিচালনার ডিজাইন স্কিল</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Pricing & Flexible Installment Section */}
        <section id="admission" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Admission & Investment</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">অ্যাডমিশন ও সহজ কিস্তির সুবিধা</h2>
            <p className="text-white/70 text-base md:text-lg">এককালীন ফি চাপ নয়—স্বল্প অ্যাডভান্স কনফার্মেশন ফি দিয়ে আপনার সিট বুক করুন এবং বাকিটা কিস্তিতে দিন।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-box p-8 rounded-3xl relative flex flex-col justify-between border border-white/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/70">One-Time Complete</span>
                  <span className="px-3 py-1 rounded-full bg-[#ebff00]/15 text-[#ebff00] text-xs font-semibold">Upto RS 500 ছাড়
</span>
                </div>
                <h3 className="text-2xl font-black mb-2">ফুল পেমেন্ট প্ল্যান</h3>
                <p className="text-white/70 text-sm mb-6">এককালীন পরিশোধে পাচ্ছেন বিশেষ ছাড় ও অতিরিক্ত প্রিমিয়াম স্টাডি প্যাক।</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold text-[#ebff00]">ইনস্ট্যান্ট অ্যাক্সেস</span>
                  <p className="text-xs text-white/60 mt-1">কোর্সের সম্পূর্ণ রিসোর্স লাইব্রেরি প্রথম দিনেই উন্মুক্ত</p>
                </div>

                <ul className="space-y-3 text-sm text-white/80 mb-8">
                  <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ফুল লাইভ ক্লাস ও রেকর্ডিং সুবিধা</li>
                  <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ভেরিফায়েড সার্টিফিকেট</li>
                  <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> অল বোনাস রিসোর্স বান্ডেল ফ্রি</li>
                  <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ২৪/৭ প্রায়োরিটি লাইভ সাপোর্ট</li>
                </ul>
              </div>

              <a href="https://wa.me/917478442655?text=I%20want%20to%20enroll%20with%20Full%20Payment%20Plan" target="_blank" className="btn-electric w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                অ্যাডমিশন কনফার্ম করুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
              </a>
            </div>

            <div className="glass-box p-8 rounded-3xl relative flex flex-col justify-between border-2 border-[#ebff00] shadow-[0_0_30px_rgba(235,255,0,0.25)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ebff00]">Student Friendly</span>
                  <span className="px-3 py-1 rounded-full bg-[#ebff00] text-black text-xs font-black">সহজ কিস্তি</span>
                </div>
                <h3 className="text-2xl font-black mb-2">ইনস্টলমেন্ট কিস্তি প্ল্যান</h3>
                <p className="text-white/70 text-sm mb-6">অ্যাডভান্স সিট কনফার্মেশন ফি দিয়ে শুরু করুন, বাকি ফি ধাপে ধাপে পরিশোধ করুন।</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold text-white">সহজ কিস্তি সুবিধা</span>
                  <p className="text-xs text-white/60 mt-1">Advance Seat Confirmation + Monthly Easy Installment</p>
                </div>

                <ul className="space-y-3 text-sm text-white/80 mb-8">
                  <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> স্বল্প অ্যাডভান্স ফি দিয়ে সিট কনফার্মেশন</li>
                  <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> কোর্স চলাকালীন সুবিধাজনক কিস্তি পরিশোধ</li>
                  <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> নিয়মিত লাইভ ক্লাস ও রেকর্ডিং সাপোর্ট</li>
                  <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> কোর্স সম্পন্ন শেষে স্বীকৃত সার্টিফিকেট</li>
                </ul>
              </div>

              <a href="https://wa.me/917478442655?text=I%20want%20to%20know%20Installment%20Details" target="_blank" className="btn-electric w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                কিস্তির বিস্তারিত জানুন <i data-lucide="arrow-right" className="w-4 h-4 text-black"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Section-5: FAQ Accordion */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Clear Your Doubts</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">কিছু সাধারন প্রশ্নের উত্তর</h2>
            <p className="text-white/70 text-base md:text-lg">ভর্তি বা কোর্স সংক্রান্ত সাধারণ প্রশ্ন ও সমাধান নিচে দেখে নিন।</p>
          </div>

          <div className="space-y-4" id="faqAccordion">
            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">MITE Academy-তে কী কী কোর্স করানো হয়?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                বর্তমানে MITE Academy-তে Design AI, Canva, Photoshop এবং Social Media Management-এর মতো প্রয়োজনীয় ডিজিটাল স্কিল শেখানো হয়। এছাড়াও, খুব শীঘ্রই Government of India-certified Offline Graphic Design Course চালু করার পরিকল্পনা রয়েছে।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্সগুলি কি Live নাকি Recorded?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                MITE Academy-তে Live এবং Recorded—দুই ধরনের কোর্সের সুযোগ রয়েছে। আপনার প্রয়োজন, সময় এবং শেখার পছন্দ অনুযায়ী উপযুক্ত কোর্স বেছে নিতে পারবেন।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">আগে থেকে কোনো অভিজ্ঞতা না থাকলে কি কোর্স করতে পারব?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                অবশ্যই। একেবারে নতুন শিক্ষার্থীদের কথা মাথায় রেখেও শেখার ব্যবস্থা করা হয়। নিয়মিত প্র্যাকটিস, ক্লাসের নির্দেশনা এবং প্রয়োজনীয় সাপোর্টের মাধ্যমে ধাপে ধাপে নিজের দক্ষতা তৈরি করতে পারবেন।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
                <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কারা MITE Academy-তে কোর্স করতে পারবেন?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                ছাত্রছাত্রী, গৃহিণী, ছোট ব্যবসার মালিক, Side Hustler, Freelancer কিংবা যাঁরা নতুন কোনো ডিজিটাল স্কিল শিখতে চান—সকলেই নিজেদের প্রয়োজন অনুযায়ী কোর্স বেছে নিতে পারেন।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্স করার জন্য কি আগে থেকে কোনো Software বা Technical Skill জানা প্রয়োজন?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                বেশিরভাগ Beginner-level কোর্স শুরু করার জন্য পূর্ব অভিজ্ঞতা প্রয়োজন হয় না।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্সের ক্লাস মিস হয়ে গেলে কী হবে?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                কোর্সে Class Recording-এর সুবিধা থাকলে মিস হওয়া ক্লাস পরে দেখে নিতে পারবেন। পাশাপাশি প্রয়োজন অনুযায়ী গুরুত্বপূর্ণ বিষয়গুলি পুনরায় অনুশীলন করতে পারবেন। Recording access-এর সময়সীমা সংশ্লিষ্ট কোর্সের নিয়ম অনুযায়ী প্রযোজ্য হবে।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্স ফি কি একসঙ্গে দিতে হবে?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                না, নির্দিষ্ট কোর্সে ভর্তির ক্ষেত্রে Installment বা কিস্তিতে পেমেন্টের সুবিধা রয়েছে। One Time Payment এ upto 500 টাকা ছাড় আছে।
 কিস্তির পরিমাণ, সময়সীমা এবং অন্যান্য শর্ত জানতে সংশ্লিষ্ট কোর্সের Admission Details দেখে নিন।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্স করার পর কি Freelancing বা Online Income শুরু করতে পারব?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                কোর্সে শেখা দক্ষতা কাজে লাগিয়ে Freelancing, Client Projects, Digital Services কিংবা নিজের Business-এর মাধ্যমে আয়ের সুযোগ তৈরি করতে পারেন। তবে আয় নির্ভর করে আপনার দক্ষতা, নিয়মিত অনুশীলন, Portfolio, Client Communication এবং মার্কেটের চাহিদার ওপর।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">MITE Academy থেকে কি Certificate পাওয়া যায়?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                হ্যাঁ দেওয়া হয়। Certificate-এর সুবিধা সংশ্লিষ্ট কোর্সের ধরন ও নিয়মের ওপর নির্ভর করে।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">কোর্স চলাকালীন কোনো সমস্যায় পড়লে কি Support পাওয়া যাবে?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                হ্যাঁ, কোর্সের নির্ধারিত Live Support System-এর মাধ্যমে আপনার শেখার সময় প্রয়োজনীয় প্রশ্ন ও সমস্যার বিষয়ে সাহায্য চাইতে পারবেন। Support-এর মাধ্যম ও সময় সংশ্লিষ্ট কোর্স অনুযায়ী নির্ধারিত হবে।
              </div>
            </div>

            <div className="glass-box rounded-2xl overflow-hidden">
              <button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span className="font-bold text-base sm:text-lg text-white">MITE Academy-তে কীভাবে ভর্তি হব?</span>
                <i data-lucide="chevron-down" className="faq-chevron w-5 h-5 text-[#ebff00] transition-transform duration-300"></i>
              </button>
              <div className="faq-content hidden px-6 pb-6 text-sm text-white/80 border-t border-white/10 pt-4 leading-relaxed">
                আপনার পছন্দের কোর্সটি বেছে নিন, কোর্সের বিস্তারিত তথ্য ও ফি জেনে নিন এবং Advance Seat Confirmation Fees সম্পন্ন করুন। আপনার সিট কনফার্ম করা হবে, ব্যাচ শুরু হবার আগে আপনাকে জানানো হবে। ভর্তি সংক্রান্ত সাহায্যের জন্য MITE Academy-র সঙ্গে যোগাযোগ করতে পারেন। যেকোনো ধরনের সমস্যায় +91 747 844 2655 নম্বরে কল করতে পারেন।
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final Call To Action Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="glass-box rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden border-2 border-white/20 shadow-[0_20px_60px_rgba(255,0,168,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-3 block">Start Your Journey Today</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                আজই আপনার পছন্দের স্কিল সিলেক্ট করুন এবং নিজের ক্যারিয়ার গড়ুন
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-10 leading-relaxed">
                আপনার পছন্দের কোর্সটি বেছে নিয়ে Advance Seat Confirmation সম্পন্ন করুন। যেকোনো জিজ্ঞাসা বা ভর্তির সহায়তার জন্য সরাসরি যোগাযোগ করুন।
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
                <a href="tel:+917478442655" className="btn-electric w-full sm:w-auto px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3">
                  <i data-lucide="phone-call" className="w-5 h-5 text-black"></i>
                  কল করুন: +91 747 844 2655
                </a>
                <a href="https://wa.me/917478442655?text=Hello%20MITE%20Academy,%20I%20am%20ready%20to%20enroll" target="_blank" className="btn-glass w-full sm:w-auto px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3">
                  <i data-lucide="message-circle" className="w-5 h-5 text-[#ebff00]"></i>
                  হোয়াটসঅ্যাপে চ্যাট করুন
                </a>
              </div>

              <p className="text-xs sm:text-sm text-white/60">
                MITE Academy • বাস্তবমুখী ডিজিটাল দক্ষতা ও ক্যারিয়ার ব্লুপ্রিন্ট
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}