"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CanvaCortex() {
  const [openModules, setOpenModules] = useState<number[]>([]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.lucide) {
        // @ts-ignore
        window.lucide.createIcons();
      }
    }, 50);
    return () => clearTimeout(timer);
  });

  const toggleModule = (index: number) => {
    setOpenModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => (prev.includes(index) ? [] : [index]));
  };

  const expandAllModules = () => setOpenModules([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const collapseAllModules = () => setOpenModules([]);

  const courseModules = [
    { m: "01", icon: "shapes", title: "Design Knowledge", topics: ["Balance", "Hierarchy", "White Space", "KISS Principle", "Rule of Thirds", "Golden Ratio", "Contrast"] },
    { m: "02", icon: "type", title: "Typography", topics: ["Typography Knowledge", "Font Family", "Font Sizing Guide", "Font Pairing", "Font Resources"] },
    { m: "03", icon: "palette", title: "Colour Psychology", topics: ["Understanding Colour Wheel", "Meaning of Colours", "Colour Selection Method", "Types of Colours"] },
    { m: "04", icon: "wand", title: "AI Usages in Design", topics: ["Understanding Different AI Models", "Suitable AI Models for Design", "Image Generation", "Background Generation", "Character Generation", "Scene Generation"] },
    { m: "05", icon: "grid", title: "Layouts & Grids", topics: ["Ruler & Margin Guide", "Print Bleed", "Grid Systems", "Adding Guides", "Creating Different Layouts"] },
    { m: "06", icon: "layout-template", title: "Types of Graphic Design", topics: ["Advertising & Corporate Graphic Design", "Illustration & Publication Graphic Design", "Environmental & Stationery Design", "Book Cover Mockup Design"] },
    { m: "07", icon: "megaphone", title: "Create Ads Design", topics: ["Social Media and Ad Size Guide", "Graphics Rules for Ad Design & Psychology", "Visual Hierarchy & Colour Schemes", "AI Ad Creative Generation", "Niche-Specific Ad Design"] },
    { m: "08", icon: "share-2", title: "Social Media Post Design", topics: ["Post Size Guide & Types of Posts", "Typography, Font Pairing & Colour", "AI Image Generation & Grids", "Design Principles & Hierarchy"] },
    { m: "09", icon: "clapperboard", title: "Canva Animation", topics: ["Types of Animation & Motion Design", "Typography and Font Motion", "AI-Generated Asset Animation", "Social Media Ad Animation Timeline"] },
    { m: "10", icon: "image", title: "Banner Design", topics: ["Six Types of Banner Design", "Creating Your First Banner & Mockup", "AI Asset Generation", "Layouts, Grids & Margins"] },
    { m: "11", icon: "panel-top", title: "Poster Design", topics: ["Seven Types of Poster Design", "AI Image & Scene Generation", "Typography & Print Bleed Margins", "Mockup Presentation"] },
    { m: "12", icon: "file-text", title: "Flyer Design", topics: ["Ten Types of Flyer Design", "Mockup & Flyer Presentation", "Typography, Colour & Print Bleed", "AI Generation integration"] },
    { m: "13", icon: "book-marked", title: "Brochure Design", topics: ["Eight Types of Brochure", "Brochure Design Do's and Don'ts", "Mockup Presentations", "AI Generation & Print Standards"] },
    { m: "14", icon: "video", title: "Thumbnail Design", topics: ["Thumbnail Psychology & High CTR", "AI Thumbnail Generation", "Colour Effects & Contrast", "Typography and Font Pairing"] },
    { m: "15", icon: "package", title: "Product Design", topics: ["Types of Product Design & Rules", "Product Design Do's and Don'ts", "AI Enhancement & Mockups", "Typography, Colour & Grids"] },
    { m: "16", icon: "briefcase", title: "Client Hunting & Freelancing Strategy", topics: ["Portfolio Creation Guide", "20–26 Client Hunting Methods", "Cold Message and Cold Email Strategy", "Freelancing, Job & Paid Internship Help", "Professional Client Management", "First ₹10,000 Income Strategy"] }
  ];

  const faqData = [
    { q: "প্রশ্ন ১: Canva Cortex কোর্সে কী শেখানো হয়?", a: "এই কোর্সে Design Principles, Typography, Colour Psychology, AI Tools in Design, Social Media Design, Advertisement, Banner, Poster, Flyer, Brochure, Thumbnail, Product Design, Animation এবং Client Hunting সম্পর্কে শেখানো হয়।" },
    { q: "প্রশ্ন ২: এই কোর্সে কি AI ব্যবহার করে ডিজাইন শেখানো হয়?", a: "হ্যাঁ। সিলেবাসে বিভিন্ন AI Model, Image Generation, Background Generation, Character Generation, Scene Generation এবং AI-Assisted Creative Design অন্তর্ভুক্ত রয়েছে।" },
    { q: "প্রশ্ন ৩: কোর্সে কি ফ্রিল্যান্সিং সম্পর্কে শেখানো হয়?", a: "হ্যাঁ। সিলেবাসে Portfolio Creation, Client Hunting, Cold Message/Email, Client Management এবং First ₹10,000 Income Strategy অন্তর্ভুক্ত রয়েছে।" },
    { q: "প্রশ্ন ৪: কোর্স শেষে কি সার্টিফিকেট পাওয়া যাবে?", a: "নির্ধারিত বাধ্যতামূলক পরীক্ষায় অংশগ্রহণ করে প্রয়োজনীয় Qualifying Marks অর্জন করলে Course Completion Certificate দেওয়া হবে। এটি Canva-এর Official Certification নয়।" },
    { q: "প্রশ্ন ৫: কোর্সের মোট ফি কত?", a: "প্রদত্ত ফি অনুযায়ী, মোট কোর্স ফি ৫,৪৯৯ INR/BDT। ভারতীয় শিক্ষার্থীদের জন্য INR এবং বাংলাদেশের শিক্ষার্থীদের জন্য BDT প্রযোজ্য।" },
    { q: "প্রশ্ন ৬: কোর্সের সিলেবাস কি পরিবর্তন হতে পারে?", a: "হ্যাঁ। প্রদত্ত সিলেবাসটি Tentative Plan। পরিস্থিতি অনুযায়ী সিলেবাস এবং কোর্সের সময়সীমা সমন্বয় বা পরিবর্তন হতে পারে।" },
  ];

  return (
    <>
      <div className="animate-glow-pulse" style={{ position: "fixed", top: "5%", right: "10%", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(255, 0, 168, 0.35) 0%, rgba(154, 0, 167, 0.15) 50%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }}></div>
      <div className="animate-glow-pulse" style={{ position: "fixed", bottom: "10%", left: "5%", width: "580px", height: "580px", background: "radial-gradient(circle, rgba(154, 0, 167, 0.4) 0%, rgba(235, 255, 0, 0.08) 45%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none", zIndex: 0, animationDelay: "1.5s" }}></div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ebff00] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ebff00]"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Canva Cortex — AI Powered Graphic Design Course
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] max-w-5xl mx-auto font-bangla">
              AI Powered <br />
              <span className="text-electric-yellow font-bangla">প্রফেশনাল গ্রাফিক ডিজাইন কোর্স </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-pink-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              শুধু ডিজাইন তৈরি নয়, শিখুন ডিজাইনের সঠিক নিয়ম, AI টুলের ব্যবহার এবং নিজের ডিজাইন স্কিলকে ফ্রিল্যান্সিংয়ের কাজে লাগানোর পদ্ধতি। শিখুন AI কে কাজে লাগিয়ে দিজাইন শিখে কিভাবে ইনকামের রাস্তা বানাবেন।
            </p>

            <p className="mt-3 text-sm sm:text-base text-pink-200/80 max-w-2xl mx-auto">
              Design Principles, Typography, Colour Psychology, AI Image Generation থেকে শুরু করে Social Media Design, Advertising Creative এবং Client Hunting—সবকিছু এক কোর্সে!
            </p>

            <div className="mt-10 max-w-xl mx-auto p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-3">
              <a href="https://wa.me/917478442655?text=আমি%20Canva%20Cortex%20কোর্সে%20ভর্তি%20হতে%20আগ্রহী।" target="_blank" className="btn-electric w-full sm:w-auto flex-1 py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2.5 group font-bangla">
                <i data-lucide="zap" className="w-5 h-5 fill-black group-hover:rotate-12 transition-transform"></i>
                <span>কোর্সে ভর্তি হন</span>
              </a>
              <a href="#curriculum" className="btn-glass w-full sm:w-auto py-4 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 font-bangla">
                <i data-lucide="book-open" className="w-4 h-4"></i>
                <span>সম্পূর্ণ সিলেবাস দেখুন</span>
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-pink-200">
              <span className="flex items-center gap-1.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> ৪টি সহজ কিস্তির সুযোগ</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> ১ বছরের Canva Pro ফ্রি</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> বাংলা PDF নোটস</span>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto text-left">
              <div className="glass-box p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 flex items-center justify-center shrink-0">
                  <i data-lucide="bot" className="w-5 h-5"></i>
                </div>
                <div className="text-xs font-bold text-white leading-tight">AI-চালিত গ্রাফিক ডিজাইন শেখার সুযোগ</div>
              </div>
              <div className="glass-box p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 flex items-center justify-center shrink-0">
                  <i data-lucide="layers" className="w-5 h-5"></i>
                </div>
                <div className="text-xs font-bold text-white leading-tight">Canva-ভিত্তিক বিভিন্ন ডিজাইন প্রজেক্ট</div>
              </div>
              <div className="glass-box p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 flex items-center justify-center shrink-0">
                  <i data-lucide="file-text" className="w-5 h-5"></i>
                </div>
                <div className="text-xs font-bold text-white leading-tight">বাংলা ক্লাস মেটেরিয়াল প্রিমিয়াম PDF</div>
              </div>
              <div className="glass-box p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 flex items-center justify-center shrink-0">
                  <i data-lucide="video" className="w-5 h-5"></i>
                </div>
                <div className="text-xs font-bold text-white leading-tight">প্র্যাকটিক্যাল শিট ও ক্লাস রেকর্ডিং</div>
              </div>
              <div className="glass-box p-4 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 flex items-center justify-center shrink-0">
                  <i data-lucide="briefcase" className="w-5 h-5"></i>
                </div>
                <div className="text-xs font-bold text-white leading-tight">ফ্রিল্যান্সিং ও ক্লায়েন্ট হান্টিং গাইড</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section id="about" className="my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-14 relative border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">Course Overview</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-bangla">
                  ডিজাইন শিখুন, নিজের <br /><span className="text-electric-yellow font-bangla">দক্ষতা তৈরি করুন</span>
                </h2>
                <p className="text-pink-100/90 leading-relaxed text-base">বর্তমানে গ্রাফিক ডিজাইন শুধু সুন্দর ছবি বা পোস্টার তৈরি করার মধ্যে সীমাবদ্ধ নয়। একটি ভালো ডিজাইনের জন্য প্রয়োজন সঠিক <strong>Typography, Colour Combination, Layout, Visual Hierarchy</strong> এবং ডিজাইনের উদ্দেশ্য বোঝার গভীর ক্ষমতা。</p>
                <p className="text-pink-100/80 leading-relaxed text-base"><strong>Canva Cortex</strong> কোর্সে আপনি ডিজাইনের মৌলিক বিষয়গুলির পাশাপাশি AI ব্যবহার করে কীভাবে বিভিন্ন ধরনের Creative Design তৈরি করা যায়, তা হাতে-কলমে শিখবেন।</p>
                <p className="text-pink-100/80 leading-relaxed text-base">Social Media Post, Advertisement, Banner, Poster, Flyer, Brochure, Thumbnail এবং Product Design-এর মতো বাস্তব কাজের উপযোগী ডিজাইন নিয়ে প্রজেক্টভিত্তিক শেখার সুযোগ থাকবে। সাথে নিজের Portfolio তৈরি ও Freelancing প্রস্তুতি।</p>
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-box p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 flex items-center justify-center mb-4">
                    <i data-lucide="compass" className="w-6 h-6"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">ডিজাইন ফান্ডামেন্টালস</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">রং, ফন্ট সাইজিং ও গোল্ডেন রেশিও মেনে মানসম্মত ডিজাইন গঠন করার সঠিক ফ্রেমওয়ার্ক।</p>
                </div>
                <div className="glass-box p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 flex items-center justify-center mb-4">
                    <i data-lucide="wand" className="w-6 h-6"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">AI মডেল ও জেনারেশন</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">উপযুক্ত AI মডেলের সাহায্যে ব্যাকগ্রাউন্ড, ইউনিক ক্যারেক্টার ও সিন ক্রিয়েশন।</p>
                </div>
                <div className="glass-box p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 flex items-center justify-center mb-4">
                    <i data-lucide="megaphone" className="w-6 h-6"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">বাস্তব বিজ্ঞাপনী প্রজেক্ট</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">সোশ্যাল মিডিয়া ক্যাম্পেইন, থাম্বনেইল, ব্যানার ও ব্রোশিওর তৈরির রিয়েল-ওয়ার্ল্ড প্র্যাকটিস।</p>
                </div>
                <div className="glass-box p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 flex items-center justify-center mb-4">
                    <i data-lucide="dollar-sign" className="w-6 h-6"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">ক্লায়েন্ট হান্টিং</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">কোল্ড মেসেজিং, পোর্টফোলিও সেটআপ ও ক্লায়েন্ট কমিউনিকেশনে স্বাবলম্বী হওয়ার উপায়।</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section id="learning" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="layers" className="w-4 h-4"></i><span>Core Curriculum Pillars</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">ডিজাইনের ভিত্তি থেকে ফ্রিল্যান্সিং প্রস্তুতি</h2>
              <p className="mt-3 text-pink-200 text-sm sm:text-base">৬টি গভীর বিষয়ের সমন্বয়ে সাজানো সম্পূর্ণ সিলেবাস</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-[#ff00a8]/20 text-[#ebff00] border border-pink-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="layout" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Design Fundamentals</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">Balance, Hierarchy, White Space, Contrast, Rule of Thirds এবং Golden Ratio-এর মতো গুরুত্বপূর্ণ Design Principles শিখুন।</p>
              </div>
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-[#9a00a7]/30 text-[#ebff00] border border-purple-400/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="palette" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Typography & Colour Psychology</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">Font Family, Font Pairing, Font Sizing, Colour Wheel, Colour Selection এবং বিভিন্ন রঙের মনস্তাত্ত্বিক প্রভাব সম্পর্কে জানুন।</p>
              </div>
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-[#ff00a8]/20 text-[#ebff00] border border-pink-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="cpu" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">AI-Powered Design</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">বিভিন্ন AI Model বোঝা, উপযুক্ত AI Model নির্বাচন এবং Image, Background, Character ও Scene Generation-এর ব্যবহার শিখুন।</p>
              </div>
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-[#ff00a8]/20 text-[#ebff00] border border-pink-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="image" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Professional Design Projects</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">Social Media Post, Advertisement, Banner, Poster, Flyer, Brochure, Thumbnail এবং Product Design নিয়ে কাজ শিখুন।</p>
              </div>
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-[#9a00a7]/30 text-[#ebff00] border border-purple-400/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="monitor-play" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Animation & Creative Presentation</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">Canva Animation, Motion Design, Text Animation, AI-Generated Asset Animation এবং Mockup Presentation সম্পর্কে জানুন।</p>
              </div>
              <div className="glass-box p-7 rounded-2xl relative overflow-hidden group border-pink-400/40">
                <div className="w-12 h-12 rounded-xl bg-[#ff00a8]/20 text-[#ebff00] border border-pink-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><i data-lucide="briefcase" className="w-6 h-6"></i></div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Freelancing & Client Hunting</h3>
                <p className="text-pink-100/80 text-sm leading-relaxed">Portfolio Creation, Client Hunting Methods, Cold Message/Email, Client Management এবং Freelancing-এর প্রাথমিক কৌশল শিখুন।</p>
              </div>
            </div>
          </div>
        </section>

        {/* REACT ACCORDION Course Curriculum (16 Modules) */}
        <section id="curriculum" className="py-20 md:py-28 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="book-open-check" className="w-4 h-4"></i><span>Module Breakdown</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">সম্পূর্ণ Course Curriculum</h2>
              <p className="mt-2 text-pink-200 text-sm">প্রতিটি মডিউলের বিস্তারিত দেখতে ক্লিক করুন</p>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={expandAllModules} className="btn-glass text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5">
                  <i data-lucide="chevrons-down" className="w-4 h-4"></i> সবগুলো খুলুন
                </button>
                <button onClick={collapseAllModules} className="btn-glass text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5">
                  <i data-lucide="chevrons-up" className="w-4 h-4"></i> সবগুলো বন্ধ করুন
                </button>
              </div>
            </div>

            <div className="space-y-3.5">
              {courseModules.map((mod, i) => (
                <div key={i} className="glass-box rounded-2xl overflow-hidden transition-all">
                  <button 
                    onClick={() => toggleModule(i)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base focus:outline-none"
                  >
                    <span className="flex items-center gap-3 font-sans">
                      <span className="w-8 h-8 rounded-lg bg-[#ebff00]/20 text-[#ebff00] text-xs font-black flex items-center justify-center font-sans">
                        <i data-lucide={mod.icon} className="w-4 h-4"></i>
                      </span>
                      Module {mod.m} — {mod.title}
                    </span>
                    <i data-lucide="chevron-down" className={`w-5 h-5 transition-transform duration-300 ${openModules.includes(i) ? "rotate-180" : "rotate-0"} text-pink-300`}></i>
                  </button>
                  <div className={`px-5 pb-5 pt-1 border-t border-white/10 text-sm text-pink-100 ${openModules.includes(i) ? "block" : "hidden"}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-3">
                      {mod.topics.map((t, j) => (
                        <span key={j} className="flex items-center gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-[#ebff00] shrink-0"></i> {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-center text-pink-200/60 italic">নোট: উপরের মডিউল ও বিষয়গুলি প্রদত্ত সিলেবাস অনুসারে সাজানো হয়েছে। সিলেবাসটি Tentative; প্রয়োজনে শিক্ষার্থীদের মঙ্গলের স্বার্থে কোর্সের বিষয়বস্তু পরিবর্তন হতে পারে।</p>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="users-2" className="w-4 h-4"></i><span>Who is this for?</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">কাদের জন্য এই কোর্স?</h2>
              <p className="mt-3 text-pink-200 text-sm">Canva Cortex তাদের জন্য উপযোগী, যারা গ্রাফিক ডিজাইন শিখে নিজের দক্ষতাকে ক্যারিয়ারে রূপ দিতে চান</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 shrink-0"><i data-lucide="graduation-cap" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">নতুন শিক্ষার্থী</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">যারা কোনো পূর্ব অভিজ্ঞতা ছাড়াই শুরু থেকে আন্তর্জাতিক মানের গ্রাফিক ডিজাইন শিখতে চান।</p>
                </div>
              </div>
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 shrink-0"><i data-lucide="book-open" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">ছাত্রছাত্রী</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">কলেজ-বিশ্ববিদ্যালয়ের পড়াশোনার পাশাপাশি একটি নির্ভরযোগ্য ইন-ডিমান্ড হাই-পেয়িং স্কিল গড়তে চান।</p>
                </div>
              </div>
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 shrink-0"><i data-lucide="briefcase" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">নতুন ফ্রিল্যান্সার</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">ডিজাইন সার্ভিস দিয়ে দেশীয় ও আন্তর্জাতিক মার্কেটপ্লেসে নিয়মিত কাজ করার প্রস্তুতি নিচ্ছেন।</p>
                </div>
              </div>
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 shrink-0"><i data-lucide="video" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">Content Creator</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">সোশ্যাল মিডিয়া পোস্ট, হাই-সিটিআর থাম্বনেইল ও ব্র্যান্ডেড প্রেজেন্টেশন ডিজাইন করতে চান।</p>
                </div>
              </div>
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/20 text-[#ebff00] border border-pink-400/30 shrink-0"><i data-lucide="store" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">ছোট ব্যবসার মালিক</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">এজেন্সির বিপুল খরচ বাঁচিয়ে নিজের প্রোডাক্ট ও সার্ভিসের আকর্ষণীয় বিজ্ঞাপন নিজেই তৈরি করতে চান।</p>
                </div>
              </div>
              <div className="glass-box p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20 text-[#ebff00] border border-purple-400/30 shrink-0"><i data-lucide="sparkles" className="w-6 h-6"></i></div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">বর্তমান ডিজাইনার</h3>
                  <p className="text-xs text-pink-200/80 leading-relaxed">AI-ভিত্তিক আধুনিক টুল ও অটোমেটেড ডিজাইন ওয়ার্কফ্লো শিখে কাজের গতি ১০ গুণ বাড়াতে চান।</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverable Mastery */}
        <section className="py-20 md:py-28 bg-black/25 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="award" className="w-4 h-4"></i><span>Deliverable Mastery</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">কোর্স শেষে অর্জিত দক্ষতা</h2>
              <p className="mt-2 text-pink-200 text-sm">এই আউটপুটগুলো সরাসরি ক্লায়েন্টকে সার্ভিস হিসেবে অফার করতে পারবেন</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
              {[
                { icon: "share-2", label: "Social Media Post" },
                { icon: "megaphone", label: "Ad Creatives" },
                { icon: "image", label: "Banner & Poster" },
                { icon: "file", label: "Flyer & Brochure" },
                { icon: "play", label: "YouTube Thumbnail" },
                { icon: "package", label: "Product Creatives" },
                { icon: "clapperboard", label: "Canva Animation" },
                { icon: "wand", label: "AI Image Assets" },
                { icon: "folder-check", label: "Design Portfolio" },
                { icon: "users", label: "Client Hunting" },
              ].map((item, i) => (
                <div key={i} className="glass-box p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2">
                  <i data-lucide={item.icon} className="w-6 h-6 text-[#ebff00]"></i>
                  <span className="text-xs font-bold text-white">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-10 p-5 rounded-2xl bg-black/40 border border-white/10 text-center">
              <p className="text-xs text-pink-200/90 leading-relaxed"><strong className="text-[#ebff00]">বাস্তবসম্মত দিকনির্দেশনা:</strong> এই দক্ষতাগুলি কাজে লাগিয়ে Freelancing বা অন্যান্য ডিজাইন-সম্পর্কিত কাজের চেষ্টা করা সম্ভব। তবে কাজ পাওয়া, ক্লায়েন্ট পাওয়া বা নির্দিষ্ট পরিমাণ আয়ের কোনো অবাস্তব গ্যারান্টি দেওয়া হয় না; সম্পূর্ণ ফলাফল আপনার নিজস্ব চর্চা, মেধা ও ডেডিকেশনের ওপর নির্ভর করবে।</p>
            </div>
          </div>
        </section>

        {/* Student Benefits */}
        <section id="features" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="gift" className="w-4 h-4"></i><span>Student Benefits</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">শেখার পাশাপাশি প্র্যাকটিস ও সাপোর্ট</h2>
              <p className="mt-3 text-pink-200 text-sm">আপনার স্কিল ডেভেলপমেন্ট যাত্রাকে মসৃণ করতে আমাদের সুনির্দিষ্ট সুবিধাসমূহ</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { n: "1", t: "৪টি সহজ কিস্তির সুবিধা", d: "ভর্তির সময় সম্পূর্ণ ফি একসাথে দেওয়ার চাপ নেই; ৪টি ধাপে ফি পরিশোধের সুযোগ।" },
                { n: "2", t: "1-to-1 Live Class Support", d: "যেকোনো সমস্যা ও প্রশ্নের তাৎক্ষণিক সমাধান পেতে সরাসরি ওয়ান-অন-ওয়ান সাপোর্ট।" },
                { n: "3", t: "১ বছরের Canva Pro ফ্রি", d: "প্র্যাকটিসের সুবিধার্থে সম্পূর্ণ ১ বছরের জন্য অফিশিয়াল Canva Pro সাবস্ক্রিপশন।", b: true },
                { n: "4", t: "Daily Practical Sheet", d: "প্রতিদিনের ক্লাসের বিষয়বস্তুর ওপর প্র্যাকটিস অ্যাসাইনমেন্ট ও রিভিউ শিট।" },
                { n: "5", t: "১ বছরের Class Recording", d: "ক্লাস রিভিশন বা মিস হওয়া সেশনগুলো দেখতে পুরো ১ বছর রেকর্ডিং অ্যাক্সেস।" },
                { n: "6", t: "বাংলা ক্লাস মেটেরিয়াল PDF", d: "ডিজাইন টার্ম ও টেকনিক সহজে বোঝার জন্য সহজ বাংলায় তৈরি প্রিমিয়াম নোটস।" },
                { n: "7", t: "Premium Community Access", d: "অন্যান্য ডিজাইনার ও মেন্টরের সঙ্গে সারাবছর কানেক্টেড থাকার প্রাইভেট কমিউনিটি।" },
                { n: "8", t: "Job, Internship & Freelance Help", d: "ক্লায়েন্ট পাওয়া, পেইড ইন্টার্নশিপ ও চাকরি সম্পর্কিত যেকোনো প্রয়োজনে সার্বিক সাহায্য।" },
                { n: "9", t: "Top Freelancer Award & Certificate", d: "সেরা পারফর্মারদের জন্য এক্সক্লুসিভ অ্যাওয়ার্ড এবং উত্তীর্ণদের জন্য কোর্স সার্টিফিকেট।" },
              ].map((b, i) => (
                <div key={i} className={`glass-box p-6 rounded-2xl flex items-start gap-4 ${b.b ? 'border-[#ebff00]/40' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-[#ebff00] text-black font-black flex items-center justify-center shrink-0 font-sans">{b.n}</div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{b.t}</h3>
                    <p className="text-xs text-pink-200/80">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Profile */}
        <section id="mentor" className="py-20 md:py-28 bg-black/25 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-box rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/20">
              <div className="md:col-span-5 text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-3xl bg-gradient-to-tr from-[#ff00a8] via-purple-600 to-[#ebff00] p-1 shadow-2xl shadow-pink-500/30">
                  <div className="w-full h-full bg-[#1b0024] rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
                    <span className="text-5xl font-black text-[#ebff00] font-sans">SH</span>
                    <span className="text-xs uppercase tracking-widest text-pink-300 font-bold mt-2 font-sans">Lead Mentor</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">Course Mentor</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Sahed Hassan</h2>
                <div className="inline-block text-sm font-bold text-[#ebff00] bg-[#ebff00]/10 border border-[#ebff00]/30 px-3 py-1 rounded-lg">৫ বছরের Mentorship Experience | ৭০০+ শিক্ষার্থী</div>
                <p className="text-pink-100/90 text-sm leading-relaxed">Canva Cortex কোর্সের মেন্টর Sahed Hassan। দীর্ঘ ৫ বছরের মেন্টরশিপ ক্যারিয়ারে তিনি ৭০০-রও বেশি শিক্ষার্থীকে প্রফেশনাল ডিজাইনার ও ফ্রিল্যান্সার হিসেবে সফলভাবে গড়ে তুলেছেন।</p>
                <p className="text-pink-100/80 text-sm leading-relaxed">এই কোর্সে শুধুমাত্র টুলস শেখানো হয় না; বরং কীভাবে আন্তর্জাতিক স্ট্যান্ডার্ডে Portfolio তৈরি করতে হয়, কোল্ড মেসেজে ক্লায়েন্ট কনভার্ট করতে হয় এবং ডিজাইনে AI কাজে লাগাতে হয়—তার বাস্তব অভিজ্ঞতা শেয়ার করা হয়।</p>
                <div className="pt-2 flex flex-wrap gap-2.5 justify-center md:justify-start">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5"><i data-lucide="check" className="w-3.5 h-3.5 text-[#ebff00]"></i> প্র্যাকটিক্যাল গাইডেন্স</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5"><i data-lucide="check" className="w-3.5 h-3.5 text-[#ebff00]"></i> ক্লায়েন্ট হান্টিং ফ্রেমওয়ার্ক</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="credit-card" className="w-4 h-4"></i><span>Transparent Pricing</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">কোর্স ফি ও পেমেন্ট পদ্ধতি</h2>
              <p className="mt-3 text-pink-200 text-sm">আপনার সুবিধার্থে ৪টি সহজ কিস্তির সুযোগ ও আন্তর্জাতিক পেমেন্ট সাপোর্ট</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 glass-box rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border-2 border-[#ebff00]/60 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest bg-[#ebff00] text-black px-3 py-1 rounded-full font-sans">ALL-INCLUSIVE PLAN</span>
                    <span className="text-xs text-pink-200 font-semibold">INR & BDT সমমূল্যে</span>
                  </div>
                  <div>
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tight font-sans">৫,৪৯৯</span>
                    <span className="text-xl font-bold text-[#ebff00] ml-2 font-sans">INR / BDT</span>
                  </div>
                  <p className="text-xs text-pink-200/90 leading-relaxed">ভারতীয় শিক্ষার্থীদের জন্য INR এবং বাংলাদেশি শিক্ষার্থীদের জন্য BDT প্রযোজ্য। সাথে রয়েছে International Payment Support।</p>
                  <div className="pt-4 border-t border-white/15 space-y-3 text-sm text-pink-100">
                    <div className="flex items-center gap-2.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00] shrink-0"></i><span>১ বছরের Canva Pro সাবস্ক্রিপশন ফ্রি</span></div>
                    <div className="flex items-center gap-2.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00] shrink-0"></i><span>১ বছরের ক্লাস রেকর্ডিং অ্যাক্সেস</span></div>
                    <div className="flex items-center gap-2.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00] shrink-0"></i><span>বাংলা ক্লাস মেটেরিয়াল প্রিমিয়াম PDF</span></div>
                    <div className="flex items-center gap-2.5"><i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00] shrink-0"></i><span>1-to-1 লাইভ ক্লাস সাপোর্ট & কমিউনিটি</span></div>
                  </div>
                </div>
                <div className="pt-8">
                  <a href="https://wa.me/917478442655?text=আমি%20Canva%20Cortex%20কোর্সে%20এডমিশন%20নিতে%20চাই।%20পেমেন্ট%20ডিটেইলস%20দিন।" target="_blank" className="btn-electric block w-full text-center py-4 rounded-xl text-base font-extrabold shadow-xl">ভর্তির জন্য যোগাযোগ করুন</a>
                  <p className="text-[11px] text-center text-pink-200/60 mt-3">* কোর্সের ফি ও কিস্তির সমস্ত অর্থ Non-Refundable।</p>
                </div>
              </div>
              <div className="lg:col-span-6 glass-box rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">৪টি সহজ কিস্তির হিসাব</h3>
                  <p className="text-xs text-pink-200/80 mb-6">এককালীন চাপ ছাড়াই প্রতি মাসে সহজে পরিশোধ করুন:</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { n: "১", l: "Admission Fee", a: "২,০০০" },
                      { n: "২", l: "১ম মাসের কিস্তি", a: "১,৪৯৯" },
                      { n: "৩", l: "২য় মাসের কিস্তি", a: "১,০০০" },
                      { n: "৪", l: "৩য় মাসের কিস্তি", a: "১,০০০" },
                    ].map((inst, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-[#ebff00] text-black text-xs font-black flex items-center justify-center font-sans">{inst.n}</span>
                          <span className="font-bold text-white">{inst.l}</span>
                        </div>
                        <span className="font-black text-[#ebff00] font-sans">{inst.a}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between font-black text-sm">
                    <span className="text-white">সর্বমোট ফি:</span>
                    <span className="text-[#ebff00] font-sans text-base">৫,৪৯৯ INR / BDT</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-pink-200">
                  <span className="flex items-center gap-1.5"><i data-lucide="shield-check" className="w-4 h-4 text-[#ebff00]"></i> নিরাপদ পেমেন্ট সুবিধা</span>
                  <span className="flex items-center gap-1.5"><i data-lucide="globe" className="w-4 h-4 text-[#ebff00]"></i> ভারত ও বাংলাদেশ থেকে পেমেন্ট</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Info */}
        <section className="py-12 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <div className="inline-flex p-3 rounded-2xl bg-[#ebff00]/15 text-[#ebff00] border border-[#ebff00]/30 mb-2">
              <i data-lucide="award" className="w-8 h-8"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Certificate সম্পর্কে গুরুত্বপূর্ণ তথ্য</h2>
            <p className="text-sm text-pink-200/90 max-w-2xl mx-auto leading-relaxed">কোর্সটি Canva-এর Official Certified Course নয়। কোর্স সম্পন্ন করার পর নির্ধারিত বাধ্যতামূলক পরীক্ষায় অংশগ্রহণ করতে হবে এবং প্রয়োজনীয় Qualifying Marks অর্জন করতে হবে। নির্ধারিত নম্বর অর্জন না করলে Course Completion Certificate দেওয়া হবে না।</p>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="help-circle" className="w-4 h-4"></i><span>Clarifications</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3.5">
              {faqData.map((faq, i) => (
                <div key={i} className="glass-box rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <i data-lucide="chevron-down" className={`w-5 h-5 text-pink-300 transition-transform duration-300 ${openFaqs.includes(i) ? "rotate-180" : "rotate-0"}`}></i>
                  </button>
                  <div className={`px-5 pb-5 pt-1 border-t border-white/10 text-sm text-pink-100 leading-relaxed ${openFaqs.includes(i) ? "block" : "hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 relative border-t border-white/10 bg-black/25">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-box rounded-3xl p-8 sm:p-14 text-center border-2 border-white/20 bg-gradient-to-b from-[#ff00a8]/30 via-[#750080]/40 to-black/80 relative overflow-hidden shadow-2xl">
              <span className="inline-block bg-[#ebff00] text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest font-sans mb-4">ADMISSION OPEN NOW</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight font-bangla">
                নিজের ডিজাইন স্কিল তৈরির যাত্রা <br /><span className="text-electric-yellow font-bangla">শুরু করুন আজই!</span>
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/917478442655?text=Hello,%20I%20want%20to%20enroll%20in%20Canva%20Cortex%20today." target="_blank" className="btn-electric w-full sm:w-auto px-9 py-4 rounded-xl text-base font-black flex items-center justify-center gap-2">
                  <i data-lucide="zap" className="w-5 h-5 fill-black"></i><span>এখনই ভর্তি হন</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}