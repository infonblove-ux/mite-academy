"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Canva Cortex",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
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

    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
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

    const interactiveTargets = document.querySelectorAll("a, button, .glass-box, input, textarea, select");
    interactiveTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Sheets Submit Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // আপনার জেনারেট করা URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbw7VW8Of8qBk4vkXGz2jBgiGNn58Ayl9xb14dW0kPt1mVo6sYm7v_vXG9m4deutfK72/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("ধন্যবাদ! আপনার ইনফরমেশন আমাদের কাছে সফলভাবে পৌঁছেছে। আমাদের সাপোর্ট টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।");
      
      // ফর্মটি রিসেট করে দেওয়া
      setFormData({ name: "", phone: "", interest: "Canva Cortex", message: "" });
    } catch (error) {
      alert("দুঃখিত, কোনো সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন বা সরাসরি আমাদের নম্বরে কল করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div id="cursorDot" aria-hidden="true"></div>
      <div id="cursorRing" aria-hidden="true"></div>

      <div className="animate-glow-pulse" style={{ position: "fixed", top: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255, 0, 168, 0.25) 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none", zIndex: 0 }} aria-hidden="true"></div>
      <div className="animate-glow-pulse" style={{ position: "fixed", bottom: "10%", right: "5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(235, 255, 0, 0.15) 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none", zIndex: 0, animationDelay: "2s" }} aria-hidden="true"></div>

      <main className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3 block w-max mx-auto">
            <i data-lucide="headset" className="w-4 h-4"></i>
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            আমাদের সাথে <span className="text-electric-yellow">যোগাযোগ করুন</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            কোর্সে অ্যাডমিশন, পেমেন্ট প্ল্যান বা যেকোনো জিজ্ঞাসার জন্য সরাসরি যোগাযোগ করুন। আমাদের টিম দ্রুত আপনার প্রশ্নের উত্তর দেবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-box p-8 rounded-3xl border border-white/15 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Information</h2>
              
              <div className="space-y-8">
                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ebff00]/20 text-[#ebff00] border border-[#ebff00]/30 flex items-center justify-center shrink-0">
                    <i data-lucide="phone-call" className="w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-1">Helpline / WhatsApp</h3>
                    <a href="tel:+917478442655" className="text-lg sm:text-xl font-black text-white hover:text-[#ebff00] transition-colors">
                      +91 747 844 2655
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff00a8]/20 text-[#ff00a8] border border-[#ff00a8]/30 flex items-center justify-center shrink-0">
                    <i data-lucide="mail" className="w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-1">Email Support</h3>
                    <a href="mailto:officialmitemail@gmail.com" className="text-lg font-bold text-white hover:text-[#ff00a8] transition-colors">
                      officialmitemail@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9a00a7]/30 text-[#e985f0] border border-[#9a00a7]/50 flex items-center justify-center shrink-0">
                    <i data-lucide="map-pin" className="w-6 h-6"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-1">Office Location</h3>
                    <p className="text-base text-white/90 font-medium leading-relaxed">
                      MITE Academy, <br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-box p-8 sm:p-10 md:p-12 rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl font-bold text-white mb-2 relative z-10">আপনার মেসেজ পাঠান</h2>
              <p className="text-sm text-white/60 mb-8 relative z-10">ফর্মটি পূরণ করুন, আমরা আপনার সাথে যোগাযোগ করে নেবো।</p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-white/80 uppercase tracking-wider ml-1">আপনার নাম</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Das"
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ebff00] focus:ring-1 focus:ring-[#ebff00] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-white/80 uppercase tracking-wider ml-1">ফোন / WhatsApp নম্বর</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ebff00] focus:ring-1 focus:ring-[#ebff00] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-xs font-bold text-white/80 uppercase tracking-wider ml-1">আগ্রহী কোর্স</label>
                  <select 
                    id="interest" 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-[#ebff00] focus:ring-1 focus:ring-[#ebff00] transition-all cursor-pointer"
                  >
                    <option value="Canva Cortex" className="bg-[#120017] text-white">Ai Powered Canva Cortex</option>
                    <option value="Fearless Photoshop" className="bg-[#120017] text-white">Fearless Photoshop</option>
                    <option value="Smart SMM" className="bg-[#120017] text-white">Smart SMM</option>
                    <option value="অন্যান্য / সাধারণ জিজ্ঞাসা" className="bg-[#120017] text-white">অন্যান্য / সাধারণ জিজ্ঞাসা</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-white/80 uppercase tracking-wider ml-1">আপনার মেসেজ বা প্রশ্ন</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার কি জানার আছে এখানে লিখুন..."
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ebff00] focus:ring-1 focus:ring-[#ebff00] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-electric w-full py-4 rounded-xl text-center text-base font-extrabold flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><i data-lucide="loader-2" className="w-5 h-5 animate-spin text-black"></i> সেন্ডিং...</>
                  ) : (
                    <><i data-lucide="send" className="w-5 h-5 text-black"></i> সাবমিট করুন</>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}