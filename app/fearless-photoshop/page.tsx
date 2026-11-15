"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function FearlessPhotoshop() {
  useEffect(() => {
    const initIcons = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.lucide) window.lucide.createIcons();
      else setTimeout(initIcons, 100);
    };
    initIcons();

    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let ringX = mouseX, ringY = mouseY;
    const ease = 0.16;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (dot) { dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; }
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    function renderCursor() {
      ringX += (mouseX - ringX) * ease; ringY += (mouseY - ringY) * ease;
      if (ring) { ring.style.left = `${ringX}px`; ring.style.top = `${ringY}px`; }
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
      <div id="cursorDot" aria-hidden="true"></div>
      <div id="cursorRing" aria-hidden="true"></div>

      <div className="animate-glow-pulse" style={{ position: "fixed", top: "10%", left: "5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255, 0, 168, 0.25) 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none", zIndex: 0 }} aria-hidden="true"></div>

      <main className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        

        {/* Hero Section */}
        <section className="glass-box rounded-3xl p-8 sm:p-12 md:p-16 mb-16 relative overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff00a8]/40 to-transparent blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff00a8]/20 border border-[#ff00a8]/40 text-white font-bold text-xs mb-6 uppercase tracking-wider">
                <i data-lucide="sparkles" className="w-4 h-4 text-[#ebff00]"></i> Ai Powered Practical Track
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.15]">
                Fearless <span className="text-electric-yellow">Photoshop</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                একদম বেসিক থেকে প্রফেশনাল লেভেল পর্যন্ত Photoshop শিখুন। শুধু টুলস নয়—বাস্তব প্রজেক্টে কাজ করা, Creative Design তৈরি করা এবং Freelancing-এর জন্য প্রয়োজনীয় দক্ষতা অর্জন করুন।
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#pricing" className="btn-electric px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2">
                  অ্যাডমিশন নিন <i data-lucide="arrow-right" className="w-5 h-5 text-black"></i>
                </a>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(255,0,168,0.2)] group bg-[#15001a] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3a0045] via-[#ff00a8]/20 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#ebff00] text-black flex items-center justify-center shadow-lg mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <i data-lucide="play" className="w-8 h-8 ml-1"></i>
                </div>
                <p className="text-white font-bold tracking-wide">কোর্সের ইন্ট্রো ভিডিও দেখুন</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-electric-yellow font-bold text-sm tracking-wider uppercase mb-2 block">Course Modules</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">এই কোর্সে যা যা শিখবেন</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "mouse-pointer-2", title: "Photoshop Basics", desc: "ফটোশপের ইন্টারফেস, টুলস, লেয়ার ম্যানেজমেন্ট এবং বেসিক শর্টকাট।" },
              { icon: "crop", title: "Masking & Selection", desc: "অ্যাডভান্সড হেয়ার মাস্কিং, ব্যাকগ্রাউন্ড রিমুভ এবং সাবজেক্ট সিলেকশন।" },
              { icon: "image", title: "Photo Manipulation", desc: "রিয়েলিস্টিক শ্যাডো, কালার গ্রেডিং এবং একাধিক ছবির সমন্বয়ে ম্যানিপুলেশন।" },
              { icon: "sparkles", title: "Generative AI", desc: "Photoshop AI (Firefly) ব্যবহার করে ম্যাজিক রিমুভ ও অবজেক্ট জেনারেশন।" },
              { icon: "layout", title: "Print & Social Media", desc: "সোশ্যাল মিডিয়া ব্যানার, পোস্টার এবং প্রিন্ট রেডি ম্যাটেরিয়াল ডিজাইন।" },
              { icon: "briefcase", title: "Freelancing Guide", desc: "পোর্টফোলিও তৈরি এবং ফ্রিল্যান্সিং মার্কেটপ্লেসে কাজ পাওয়ার গাইডলাইন।" }
            ].map((module, idx) => (
              <div key={idx} className="glass-box p-6 rounded-2xl border border-white/10 hover:border-[#ff00a8]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#ebff00] flex items-center justify-center mb-4">
                  <i data-lucide={module.icon} className="w-6 h-6"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">অ্যাডমিশন ও পেমেন্ট প্ল্যান</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-box p-8 rounded-3xl relative border border-white/20">
              <h3 className="text-2xl font-black mb-2">ফুল পেমেন্ট প্ল্যান</h3>
              <p className="text-white/70 text-sm mb-6">এককালীন পরিশোধে পাচ্ছেন বিশেষ ছাড় ও অতিরিক্ত স্টাডি প্যাক।</p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ৩ মাসের ফুল লাইভ ক্লাস</li>
                <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> প্রজেক্ট রিসোর্স লাইব্রেরি</li>
                <li className="flex items-center gap-3"><i data-lucide="check" className="w-4 h-4 text-[#ebff00]"></i> ভেরিফায়েড সার্টিফিকেট</li>
              </ul>
              <a href="https://wa.me/917478442655?text=I%20want%20to%20enroll%20in%20Fearless%20Photoshop%20(Full%20Payment)" target="_blank" className="btn-electric w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                অ্যাডমিশন কনফার্ম করুন
              </a>
            </div>
            <div className="glass-box p-8 rounded-3xl relative border-2 border-[#ebff00] shadow-[0_0_30px_rgba(235,255,0,0.15)]">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ebff00] text-black text-xs font-black">সহজ কিস্তি</span>
              </div>
              <h3 className="text-2xl font-black mb-2">কিস্তি প্ল্যান</h3>
              <p className="text-white/70 text-sm mb-6">অ্যাডভান্স সিট বুকিং ফি দিয়ে শুরু করুন, বাকিটা কোর্সের মাঝে দিন।</p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> স্বল্প অ্যাডভান্স ফি দিয়ে সিট বুকিং</li>
                <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> সুবিধাজনক মাসিক কিস্তি</li>
                <li className="flex items-center gap-3"><i data-lucide="check-circle-2" className="w-4 h-4 text-[#ebff00]"></i> নিয়মিত সাপোর্ট</li>
              </ul>
              <a href="https://wa.me/917478442655?text=I%20want%20to%20know%20Installment%20Details%20for%20Fearless%20Photoshop" target="_blank" className="btn-electric w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                কিস্তির বিস্তারিত জানুন
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}