"use client";

import { useEffect, useState } from "react";

interface SyllabusClass {
  num: string;
  title: string;
  topics: string[];
  isVip?: boolean;
}

const SYLLABUS_CLASSES: SyllabusClass[] = [
  {
    num: "01",
    title: "ক্লাস ১ – Introduction",
    topics: [
      "Adobe Photoshop পরিচিতি",
      "Photoshop ডাউনলোড",
      "Working Area পরিচিতি",
      "Photoshop Toolbar",
      "Options Bar ও অন্যান্য Panels",
      "Undo Actions",
      "Workspace Customization",
      "Tools Panel Overview",
    ],
  },
  {
    num: "02",
    title: "ক্লাস ২ – Creating Image",
    topics: [
      "Raster vs. Vector",
      "নতুন Image তৈরি",
      "Print-এর জন্য File Save",
      "Web ও Screen-এর জন্য File Save",
      "Image Cropping",
    ],
  },
  {
    num: "03",
    title: "ক্লাস ৩ – Selection Process",
    topics: [
      "Selection ও Selection Tools",
      "Quick Selection Tool",
      "Lasso ও Magnetic Lasso Tool",
      "Magic Wand Tool",
      "Selection Move ও Manipulation",
      "Selection Rotate",
      "Selection-এর Edge Refine",
      "Selection-এর মধ্যে Crop ও Erasing",
    ],
  },
  {
    num: "04",
    title: "ক্লাস ৪ – Layers",
    topics: [
      "Layers পরিচিতি",
      "Layers Panel ব্যবহার",
      "Layer Rearranging",
      "Layer Blending Mode",
      "Layer Locking Options",
      "Fill ও Opacity",
      "Layer Mask",
    ],
  },
  {
    num: "05",
    title: "ক্লাস ৫ – Photoshop Tools 1",
    topics: ["Crop Tool", "Brush Tool", "Clone Stamp Tool", "Healing Tool"],
  },
  {
    num: "06",
    title: "ক্লাস ৬ – Photoshop Tools 2",
    topics: [
      "Content Aware Fill",
      "Move Tool",
      "Eraser Tools",
      "Blur Tool",
      "Sharpen Tool",
      "Smudge Tool",
      "History Panel",
      "History Brush",
    ],
  },
  {
    num: "07",
    title: "ক্লাস ৭ – Photoshop Tools 3",
    topics: [
      "Pen Tool ও Path",
      "Vector Shapes",
      "Vector Smart Objects",
      "Raster Smart Objects",
      "Clipping Mask",
    ],
  },
  {
    num: "08",
    title: "ক্লাস ৮ – Photoshop Tools 4",
    topics: [
      "Dodge Tool & Burn Tool",
      "Sponge Tool",
      "Gradients",
      "Patterns & Seamless Texture",
      "Vanishing Point Filter",
    ],
  },
  {
    num: "09",
    title: "ক্লাস ৯ – Photoshop Tools 5",
    topics: [
      "Face Aware Liquify",
      "Puppet Warp",
      "Perspective Warp",
      "Remove Matte from Layer",
      "Camera Raw Filter",
    ],
  },
  {
    num: "10",
    title: "ক্লাস ১০ – Adjustment Layer",
    topics: [
      "Adjustment Layers",
      "Brightness",
      "Contrast",
      "Hue/Saturation",
      "Levels",
      "Curves",
    ],
  },
  {
    num: "11",
    title: "ক্লাস ১১ – Basic Photo Retouching",
    topics: [
      "Brightness ও Contrast",
      "Hue/Saturation, Levels ও Curves",
      "Clone Stamp & Healing Brush",
      "Patch Tool & Practical Retouching",
    ],
  },
  {
    num: "12",
    title: "ক্লাস ১২ – Double Exposure Effect",
    topics: [
      "Working with Masks",
      "Clipping Masks",
      "Blending Modes",
      "Creative Effects-এর জন্য Opacity",
      "Practical Project",
    ],
  },
  {
    num: "13",
    title: "ক্লাস ১৩ – Photo Color Correction",
    topics: [
      "Filters ও Smart Filters",
      "Camera Raw Basics",
      "Photo Enhancement",
      "Skin Retouching & Practical",
    ],
  },
  {
    num: "14",
    title: "ক্লাস ১৪ – Product Photo Retouching",
    topics: [
      "Product পরিচিতি",
      "Background Removal",
      "Content-Aware Fill",
      "Object Removal & Practical Project",
    ],
  },
  {
    num: "15",
    title: "ক্লাস ১৫ – Stroke and Glow Effect",
    topics: [
      "Understanding Layers",
      "Masking Layer",
      "Shadow",
      "Glow",
      "Practical Application",
    ],
  },
  {
    num: "16",
    title: "ক্লাস ১৬ – Typography",
    topics: [
      "Font Collection",
      "Font Pairing",
      "Font Download Websites",
      "Font ও Paragraph Settings",
    ],
  },
  {
    num: "17",
    title: "ক্লাস ১৭ – Social Media Post Design (Service)",
    topics: [
      "Concept Development",
      "Elements Selection",
      "Content Generation",
      "Design Creation",
      "Mockup Usage & Practical",
    ],
  },
  {
    num: "18",
    title: "ক্লাস ১৮ – Social Media Post Design (Product)",
    topics: [
      "Concept Development",
      "Elements Selection",
      "Content Generation",
      "Design Creation",
      "Mockup Usage & Practical",
    ],
  },
  {
    num: "19",
    title: "ক্লাস ১৯ – Poster Design",
    topics: [
      "Concept Development",
      "Elements Selection",
      "Content Generation",
      "Poster Creation",
      "Mockup Usage & Practical",
    ],
  },
  {
    num: "20",
    title: "ক্লাস ২০ – Thumbnail Design",
    topics: [
      "Thumbnail Breakdown",
      "Thumbnail Typography Effects",
      "Thumbnail Creation",
      "Practical Project",
    ],
  },
  {
    num: "21",
    title: "ক্লাস ২১ – Carousels Design",
    topics: [
      "Carousel Content Generation",
      "Carousel Design Concept",
      "Carousel Design Elements",
      "Carousel Design Creation",
      "Mockup Usage & Practical",
    ],
  },
  {
    num: "22",
    title: "ক্লাস ২২ – Website Banner",
    topics: [
      "বিভিন্ন ধরনের Website Banner",
      "Banner Size Guide",
      "Banner Creation",
      "Practical Project",
    ],
  },
  {
    num: "23",
    title: "ক্লাস ২৩ – Facebook Banner ও Client Communication",
    isVip: true,
    topics: [
      "Banner Design ও Size Guide",
      "Client Communication Techniques",
      "Buyer-এর সঙ্গে Deal করা",
      "Client-কে Convince করার উপায়",
      "Budget Technique",
      "Custom Offer তৈরি",
      "Final File Delivery Standards",
    ],
  },
];

const PAIN_POINTS = [
  { icon: "help-circle", text: "ফটোশপের ইন্টারফেস দেখে জটিল মনে হয়?" },
  { icon: "wrench", text: "অনেক টুলস চেনেন, কিন্তু সঠিকভাবে ব্যবহার করতে পারেন না?" },
  { icon: "camera", text: "প্রফেশনাল ফটো এডিটিং ও রিটাচিং করতে সমস্যা হয়?" },
  { icon: "layout", text: "সুন্দর সোশ্যাল মিডিয়া ডিজাইন তৈরি করতে পারেন না?" },
  { icon: "compass", text: "গ্রাফিক ডিজাইনার হতে চান, কিন্তু সঠিক গাইডলাইন পাচ্ছেন না?" },
  { icon: "briefcase", text: "ফ্রিল্যান্সিং শুরু করতে চান, কিন্তু প্রয়োজনীয় ডিজাইন স্কিল তৈরি হয়নি?" },
];

const DELIVERABLES = [
  { icon: "camera", label: "Professional Photo Retouching" },
  { icon: "package", label: "Product Photo Editing" },
  { icon: "share-2", label: "Social Media Post Design" },
  { icon: "image", label: "Poster Design" },
  { icon: "youtube", label: "YouTube Thumbnail Design" },
  { icon: "layers", label: "Instagram Carousel Design" },
  { icon: "monitor", label: "Website Banner Design" },
  { icon: "layout-template", label: "Facebook Banner Design" },
];

const BONUSES = [
  {
    code: "BONUS 01",
    title: "8,700+ Font Collection",
    desc: "ক্যাটাগরি অনুযায়ী সাজানো ৮,৭০০-এর বেশি প্রিমিয়াম ফন্ট কালেকশন।",
    footer: "ফ্রি লাইফটাইম অ্যাক্সেস",
    highlight: true,
  },
  {
    code: "BONUS 02",
    title: "470+ 3D LUTs",
    desc: "আপনার ডিজাইনে চমৎকার কালার ইফেক্ট ও কালার লুক তৈরি করার জন্য ৪৭০-এর বেশি 3D LUTs।",
    footer: "প্রফেশনাল কালার গ্রেডিং",
    highlight: false,
  },
  {
    code: "BONUS 03",
    title: "50 Camera Raw Presets",
    desc: "ফটো এডিটিং ও কালার কারেকশনের জন্য ৫০টি প্রস্তুত Camera Raw Presets।",
    footer: "এক ক্লিকে ফটো এনহ্যান্সমেন্ট",
    highlight: false,
  },
  {
    code: "BONUS 04",
    title: "Texture Collection",
    desc: "বিভিন্ন ধরনের আধুনিক ডিজাইন কাজে ব্যবহার করার জন্য প্রিমিয়াম Texture Collection।",
    footer: "হাই রেজোলিউশন টেক্সচার",
    highlight: false,
  },
  {
    code: "BONUS 05",
    title: "Overlay Collection",
    desc: "আপনার ডিজাইনকে আরও আকর্ষণীয় ও সিনেমাটিক করতে হাই কোয়ালিটি Overlay Collection।",
    footer: "লাইট ও শ্যাডো এফেক্টস",
    highlight: false,
  },
  {
    code: "BONUS 06",
    title: "1,000+ Gradient Backgrounds",
    desc: "বিভিন্ন ডিজাইন প্রজেক্ট ও সোশ্যাল মিডিয়ার জন্য ১,০০০-এর বেশি ট্রেন্ডি Gradient Backgrounds।",
    footer: "রেডি টু ইউজ ব্যাকগ্রাউন্ড",
    highlight: true,
  },
];

const FAQS = [
  {
    q: "প্রশ্ন ১: আমি একদম নতুন। এই কোর্সটি কি আমার জন্য?",
    a: "অবশ্যই। কোর্সটি বিগিনারদের জন্য তৈরি। একদম বেসিক থেকে Photoshop শেখানো শুরু হবে।",
  },
  {
    q: "প্রশ্ন ২: আগে থেকে কি গ্রাফিক ডিজাইন জানা প্রয়োজন?",
    a: "না। আগে থেকে গ্রাফিক ডিজাইন জানা বাধ্যতামূলক নয়।",
  },
  {
    q: "প্রশ্ন ৩: এই কোর্সে কী কী শেখানো হবে?",
    a: "Photoshop Tools, Image Editing, Photo Retouching, Color Correction, Product Editing, Typography, Social Media Design, Poster, Thumbnail, Carousel ও Banner Design সহ বিভিন্ন বিষয় শেখানো হবে।",
  },
  {
    q: "প্রশ্ন ৪: কোর্সে কি প্র্যাকটিক্যাল কাজ থাকবে?",
    a: "হ্যাঁ। সিলেবাসে বিভিন্ন বিষয়ে প্র্যাকটিক্যাল ডিজাইন তৈরির অন্তর্ভুক্তি রয়েছে।",
  },
  {
    q: "প্রশ্ন ৫: কোর্সের সঙ্গে কি কোনো বোনাস রিসোর্স পাব?",
    a: "হ্যাঁ। ৮,৭০০+ ফন্ট, ৪৭০+ LUTs, ৫০টি Camera Raw Presets, Texture, Overlay এবং ১,০০০+ Gradient Backgrounds পাবেন।",
  },
  {
    q: "প্রশ্ন ৬: কোর্স ফি কত?",
    a: "ভারতীয় শিক্ষার্থীদের জন্য ₹৬,৯৯৯ এবং বাংলাদেশি শিক্ষার্থীদের জন্য ৳৯,৬৪৯।",
  },
  {
    q: "প্রশ্ন ৭: কীভাবে ভর্তি হব?",
    a: "ভর্তি সংক্রান্ত তথ্যের জন্য সরাসরি যোগাযোগ করুন: +91 747 844 2655 অথবা WhatsApp-এ মেসেজ পাঠান।",
  },
];

export default function FearlessPhotoshop() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Re-initialize Lucide icons whenever accordions expand/collapse
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
  }, [openModules, openFaqIndex]);

  // Custom Smooth Follower Cursor
  useEffect(() => {
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

    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");

    const interactiveTargets = document.querySelectorAll("a, button, .glass-box, input");
    interactiveTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  const toggleModule = (num: string) => {
    setOpenModules((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const expandAllModules = () => {
    const allOpen: Record<string, boolean> = {};
    SYLLABUS_CLASSES.forEach((c) => {
      allOpen[c.num] = true;
    });
    setOpenModules(allOpen);
  };

  const collapseAllModules = () => {
    setOpenModules({});
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <div id="cursorDot" aria-hidden="true"></div>
      <div id="cursorRing" aria-hidden="true"></div>

      {/* Ambient Glow Orbs */}
      <div
        className="animate-glow-pulse"
        style={{
          position: "fixed",
          top: "5%",
          right: "10%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(255, 0, 168, 0.35) 0%, rgba(154, 0, 167, 0.15) 50%, transparent 70%)",
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
          background:
            "radial-gradient(circle, rgba(154, 0, 167, 0.4) 0%, rgba(235, 255, 0, 0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          animationDelay: "1.5s",
        }}
        aria-hidden="true"
      ></div>

      {/* Scoped local keyframes & helper styles so global CSS stays untouched */}
      <style jsx>{`
        @keyframes psMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ps-ticker-wrapper {
          display: flex;
          width: max-content;
          animation: psMarqueeScroll 25s linear infinite;
        }
        .ps-ticker-wrapper:hover {
          animation-play-state: paused;
        }
        .ps-btn-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #ffffff;
          transition: all 0.25s ease;
        }
        .ps-btn-glass:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: #ebff00;
          color: #ebff00;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Announcement Bar Ticker */}
      <div className="relative z-40 bg-black/60 backdrop-blur-md border-b border-white/10 py-2.5 overflow-hidden select-none">
        <div className="ps-ticker-wrapper flex items-center gap-12 whitespace-nowrap text-xs sm:text-sm font-medium">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2">
                <span className="bg-[#ebff00] text-black text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  NEW BATCH
                </span>
                <span className="text-white/95">
                  FEARLESS PHOTOSHOP FOR BEGINNERS — AI POWERED GRAPHIC DESIGN COURSE! দ্রুত এডমিশন নিন।
                </span>
              </span>
              <span className="text-[#ebff00]">•</span>
              <span className="text-pink-200">সপ্তাহে ৩ দিন লাইভ অনলাইন ক্লাস</span>
              <span className="text-[#ebff00]">•</span>
              <span className="text-pink-200">৬টি এক্সক্লুসিভ বোনাস রিসোর্স কালেকশন</span>
              <span className="text-[#ebff00]">•</span>
              <span className="text-pink-200">সহজ কিস্তির সুবিধা</span>
              <span className="text-[#ebff00]">•</span>
              <a
                href="https://wa.me/917478442655?text=Hi,%20I%20want%20to%20enroll%20in%20Fearless%20Photoshop%20Course."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#ebff00] font-bold hover:underline"
              >
                ভর্তি হতে ক্লিক করুন <i data-lucide="arrow-right" className="w-3.5 h-3.5"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ebff00] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ebff00]"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                FEARLESS PHOTOSHOP FOR BEGINNERS — AI POWERED GRAPHIC DESIGN COURSE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] max-w-5xl mx-auto">
              শূন্য থেকে শুরু করে শিখুন <br />
              <span className="text-electric-yellow">প্রফেশনাল ফটোশপ ডিজাইন!</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-pink-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              এবার ফটোশপ শেখা হবে আরও সহজ, আরও স্মার্ট এবং আরও কার্যকর! আপনার কি গ্রাফিক ডিজাইন শেখার ইচ্ছা আছে? কিন্তু Adobe Photoshop কোথা থেকে শুরু করবেন বুঝতে পারছেন না? তাহলে আপনার জন্যই Fearless Photoshop for Beginners।
            </p>

            <p className="mt-3 text-sm sm:text-base text-pink-200/80 max-w-2xl mx-auto">
              একদম বেসিক থেকে শুরু করে ধাপে ধাপে শিখুন ফটো এডিটিং, রিটাচিং, প্রোডাক্ট এডিটিং, সোশ্যাল মিডিয়া ডিজাইন, পোস্টার, থাম্বনেইল এবং আরও অনেক কিছু।
            </p>

            {/* CTA Area */}
            <div className="mt-10 max-w-xl mx-auto p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/917478442655?text=আমি%20Fearless%20Photoshop%20কোর্সে%20ভর্তি%20হতে%20আগ্রহী।"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric w-full sm:w-auto flex-1 py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2.5 group"
              >
                <i data-lucide="zap" className="w-5 h-5 fill-black group-hover:rotate-12 transition-transform"></i>
                <span>এখনই ভর্তি হোন</span>
              </a>
              <a
                href="#curriculum"
                className="ps-btn-glass w-full sm:w-auto py-4 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <i data-lucide="book-open" className="w-4 h-4"></i>
                <span>সিলেবাস দেখুন</span>
              </a>
            </div>

            {/* Micro Proof */}
            <div className="mt-4 flex items-center justify-center flex-wrap gap-4 text-xs text-pink-200">
              <span className="flex items-center gap-1.5">
                <i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> সপ্তাহে ৩ দিন লাইভ অনলাইন ক্লাস
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> সহজ কিস্তির সুযোগ
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <i data-lucide="check-circle" className="w-4 h-4 text-[#ebff00]"></i> ৬টি বোনাস রিসোর্স কালেকশন
              </span>
            </div>

            {/* Key Highlights Grid Strip */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto text-left">
              {[
                { icon: "video", bg: "bg-pink-500/20 border-pink-400/30", label: "সপ্তাহে ৩ দিন লাইভ অনলাইন ক্লাস" },
                { icon: "sparkles", bg: "bg-purple-500/20 border-purple-400/30", label: "বিগিনারদের জন্য সহজ ও সাজানো পদ্ধতি" },
                { icon: "layers", bg: "bg-pink-500/20 border-pink-400/30", label: "২৩টি ক্লাসের সাজানো সিলেবাস" },
                { icon: "wrench", bg: "bg-purple-500/20 border-purple-400/30", label: "গুরুত্বপূর্ণ টুলস ও টেকনিক" },
                { icon: "cpu", bg: "bg-pink-500/20 border-pink-400/30", label: "AI Powered Learning Approach" },
                { icon: "gift", bg: "bg-purple-500/20 border-purple-400/30", label: "৬টি এক্সক্লুসিভ বোনাস কালেকশন" },
              ].map((item, idx) => (
                <div key={idx} className="glass-box p-4 rounded-2xl flex flex-col items-start gap-2.5">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} text-[#ebff00] border flex items-center justify-center shrink-0`}>
                    <i data-lucide={item.icon} className="w-5 h-5"></i>
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-14 relative border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Pain Points & Roadblocks
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  ফটোশপ শিখতে চান, <br />
                  <span className="text-electric-yellow">কিন্তু কোথা থেকে শুরু করবেন বুঝতে পারছেন না?</span>
                </h2>
                <p className="text-pink-100/90 leading-relaxed text-base">
                  আপনার এই সমস্যাগুলোর সমাধানের জন্য প্রয়োজন একটি সঠিক লার্নিং রোডম্যাপ।
                </p>
                <p className="text-pink-100/80 leading-relaxed text-base font-semibold">
                  এবার এলোমেলোভাবে শেখা বন্ধ করুন। শুরু করুন একটি সাজানো পদ্ধতিতে।
                </p>
                <div className="pt-2">
                  <a href="#about" className="btn-electric inline-flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-black">
                    <span>আমাদের সমাধান দেখুন</span>
                    <i data-lucide="arrow-down" className="w-4 h-4"></i>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PAIN_POINTS.map((item, idx) => (
                  <div key={idx} className="glass-box p-5 rounded-2xl flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl ${
                        idx % 2 === 0
                          ? "bg-pink-500/20 border-pink-400/30"
                          : "bg-purple-500/20 border-purple-400/30"
                      } text-[#ebff00] border flex items-center justify-center shrink-0`}
                    >
                      <i data-lucide={item.icon} className="w-5 h-5"></i>
                    </div>
                    <p className="text-xs sm:text-sm text-pink-100 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. COURSE OVERVIEW */}
        <section id="about" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-box rounded-3xl p-8 sm:p-14 border border-white/20 relative overflow-hidden bg-gradient-to-br from-pink-900/30 via-purple-900/40 to-black/60 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    Course Introduction
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                    পরিচিত হোন <span className="text-electric-yellow">Fearless Photoshop for Beginners</span>-এর সঙ্গে!
                  </h2>
                  <p className="text-base sm:text-lg text-pink-100 leading-relaxed">
                    আপনার ক্রিয়েটিভ জার্নির প্রথম ধাপ শুরু হোক এখান থেকেই। <strong>Fearless Photoshop</strong> একটি বিগিনার-ফ্রেন্ডলি কোর্স, যেখানে একদম বেসিক থেকে <strong>Adobe Photoshop</strong> শেখানো হবে।
                  </p>
                  <p className="text-sm sm:text-base text-pink-200/90 leading-relaxed">
                    Photoshop Workspace পরিচিতি থেকে শুরু করে Photo Retouching, Color Correction, Product Editing, Typography, Social Media Design, Poster Design, Thumbnail Design এবং Client Communication পর্যন্ত রয়েছে সাজানো লার্নিং মডিউল।
                  </p>
                  <p className="text-sm sm:text-base text-[#ebff00] font-semibold leading-relaxed">
                    শুধু টুলস শেখা নয়, বরং সেই টুলস ব্যবহার করে বাস্তব ডিজাইন তৈরি করার দক্ষতা গড়ে তোলাই এই কোর্সের লক্ষ্য।
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/917478442655?text=আমি%20Fearless%20Photoshop%20কোর্সে%20ভর্তি%20হতে%20চাই।"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-electric inline-flex items-center gap-2.5 py-4 px-8 rounded-xl text-base font-black"
                    >
                      <i data-lucide="zap" className="w-5 h-5 fill-black"></i>
                      <span>আমি ভর্তি হতে চাই</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="glass-box p-5 rounded-2xl border-l-4 border-[#ebff00]">
                    <h4 className="font-bold text-white text-base mb-1">Zero to Pro</h4>
                    <p className="text-xs text-pink-200/80">টুলসের ব্যবহার থেকে পূর্ণাঙ্গ প্রজেক্টের সৃষ্টি পর্যন্ত ধাপে ধাপে অগ্রগতি।</p>
                  </div>
                  <div className="glass-box p-5 rounded-2xl border-l-4 border-pink-500">
                    <h4 className="font-bold text-white text-base mb-1">Hands-on Practice</h4>
                    <p className="text-xs text-pink-200/80">প্রতিটি ক্লাসের সাথে বাস্তবভিত্তিক প্রজেক্ট এসাইনমেন্ট ও গাইডেন্স।</p>
                  </div>
                  <div className="glass-box p-5 rounded-2xl border-l-4 border-purple-400">
                    <h4 className="font-bold text-white text-base mb-1">Marketplace Ready</h4>
                    <p className="text-xs text-pink-200/80">সোশ্যাল মিডিয়া, থাম্বনেইল ও ক্লায়েন্ট কমিউনিকেশনে স্বাবলম্বী হওয়ার প্রস্তুতি।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DETAILED 23 CLASSES CURRICULUM */}
        <section id="curriculum" className="py-20 md:py-28 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="book-open-check" className="w-4 h-4"></i>
                <span>23 Practical Classes</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">সম্পূর্ণ কোর্স সিলেবাস</h2>
              <p className="mt-2 text-pink-200 text-sm">
                এক কোর্সেই শিখুন Photoshop-এর গুরুত্বপূর্ণ বিষয়গুলো! প্রতিটি ক্লাসের বিস্তারিত দেখতে ক্লিক করুন
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={expandAllModules}
                  className="ps-btn-glass text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
                >
                  <i data-lucide="chevrons-down" className="w-4 h-4"></i> সবগুলো খুলুন
                </button>
                <button
                  type="button"
                  onClick={collapseAllModules}
                  className="ps-btn-glass text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
                >
                  <i data-lucide="chevrons-up" className="w-4 h-4"></i> সবগুলো বন্ধ করুন
                </button>
              </div>
            </div>

            <div className="space-y-3.5">
              {SYLLABUS_CLASSES.map((cls) => {
                const isOpen = !!openModules[cls.num];
                return (
                  <div
                    key={cls.num}
                    className={`glass-box rounded-2xl overflow-hidden ${
                      cls.isVip
                        ? "border-[#ebff00]/60 bg-gradient-to-r from-pink-900/30 via-purple-900/40 to-black/60 shadow-xl"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleModule(cls.num)}
                      className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-lg text-xs font-black flex items-center justify-center ${
                            cls.isVip ? "bg-[#ebff00] text-black" : "bg-[#ebff00]/20 text-[#ebff00]"
                          }`}
                        >
                          {cls.num}
                        </span>
                        <span className={cls.isVip ? "text-[#ebff00]" : ""}>{cls.title}</span>
                      </span>
                      <i
                        data-lucide="chevron-down"
                        className={`w-5 h-5 transition-transform ${
                          cls.isVip ? "text-[#ebff00]" : "text-pink-300"
                        } ${isOpen ? "rotate-180" : ""}`}
                      ></i>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-white/10 text-sm text-pink-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                          {cls.topics.map((topic, tIdx) => {
                            const isLastVip = cls.isVip && tIdx === cls.topics.length - 1;
                            const iconName = cls.isVip ? (isLastVip ? "zap" : "star") : "check";
                            return (
                              <span
                                key={tIdx}
                                className={`flex items-center gap-2 ${isLastVip ? "font-bold text-[#ebff00]" : ""}`}
                              >
                                <i data-lucide={iconName} className="w-4 h-4 text-[#ebff00] shrink-0"></i>
                                {topic}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. PRACTICAL DELIVERABLES */}
        <section className="py-20 md:py-28 bg-black/25 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="award" className="w-4 h-4"></i>
                <span>Practical Deliverables</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">বাস্তব ডিজাইন প্রজেক্ট</h2>
              <p className="mt-2 text-pink-200 text-sm">
                শুধু শেখা নয়, তৈরি করুন নিজের ডিজাইন! এই কোর্সে শেখা বিভিন্ন টেকনিক ব্যবহার করে তৈরি করতে পারবেন:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {DELIVERABLES.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-box p-5 rounded-2xl text-center flex flex-col items-center justify-center gap-2.5"
                >
                  <i data-lucide={item.icon} className="w-7 h-7 text-[#ebff00]"></i>
                  <span className="text-sm font-bold text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-10 p-5 rounded-2xl bg-black/40 border border-white/10 text-center">
              <p className="text-xs sm:text-sm text-pink-200/90 leading-relaxed">
                <strong className="text-[#ebff00]">দক্ষতা অর্জনের সুযোগ:</strong> প্রতিটি ডিজাইন প্র্যাকটিসের মাধ্যমে নিজের ক্রিয়েটিভিটি এবং ডিজাইন স্কিল উন্নত করার সুযোগ তৈরি করুন।
              </p>
            </div>
          </div>
        </section>

        {/* 6. BONUS RESOURCES */}
        <section id="bonuses" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="gift" className="w-4 h-4"></i>
                <span>Exclusive Assets</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">এক্সক্লুসিভ বোনাস রিসোর্স</h2>
              <p className="mt-3 text-pink-200 text-sm">
                কোর্সের সঙ্গে পাচ্ছেন ৬টি মূল্যবান ডিজাইন রিসোর্স! আপনার ডিজাইনিংয়ের কাজকে আরও সহজ ও কার্যকর করতে বিশেষ উপহার:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BONUSES.map((bonus) => (
                <div
                  key={bonus.code}
                  className={`glass-box p-6 rounded-2xl flex flex-col justify-between ${
                    bonus.highlight ? "border-[#ebff00]/40" : ""
                  }`}
                >
                  <div>
                    <span className="text-xs font-black text-[#ebff00] uppercase tracking-wider block mb-2">
                      {bonus.code}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                    <p className="text-xs sm:text-sm text-pink-200/80 leading-relaxed">{bonus.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#ebff00]">
                    <i data-lucide="check" className="w-4 h-4"></i> {bonus.footer}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/917478442655?text=আমি%20Fearless%20Photoshop%20কোর্সে%20ভর্তি%20হয়ে%20বোনাস%20রিসোর্সগুলো%20পেতে%20চাই।"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric inline-flex items-center gap-2 py-4 px-8 rounded-xl text-base font-black"
              >
                <i data-lucide="download" className="w-5 h-5"></i>
                <span>কোর্সে ভর্তি হয়ে বোনাস রিসোর্সগুলো সংগ্রহ করুন</span>
              </a>
            </div>
          </div>
        </section>

        {/* 7. INSTRUCTOR PROFILE */}
        <section id="mentor" className="py-20 md:py-28 bg-black/25 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-box rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/20">
              <div className="md:col-span-5 text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-3xl bg-gradient-to-tr from-[#ff00a8] via-purple-600 to-[#ebff00] p-1 shadow-2xl shadow-pink-500/30">
                  <div className="w-full h-full bg-[#1b0024] rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
                    <span className="text-5xl font-black text-[#ebff00]">SH</span>
                    <span className="text-xs uppercase tracking-widest text-pink-300 font-bold mt-2">
                      Design Mentor
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <span className="text-xs font-black uppercase tracking-widest text-[#ebff00] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Course Mentor
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">শিখুন Sahed Hassan-এর কাছ থেকে</h2>
                <div className="inline-block text-sm font-bold text-[#ebff00] bg-[#ebff00]/10 border border-[#ebff00]/30 px-3 py-1 rounded-lg">
                  Graphic Designer & Design Mentor
                </div>

                <p className="text-pink-100/90 text-sm leading-relaxed">
                  সঠিক গাইডলাইন এবং সাজানো লার্নিং পদ্ধতির মাধ্যমে Photoshop শেখার যাত্রাকে সহজ করে তুলুন।
                </p>

                <p className="text-pink-100/80 text-sm leading-relaxed">
                  একজন নতুন শিক্ষার্থী হিসেবে ফটোশপের বেসিক থেকে শুরু করে বিভিন্ন ধরনের প্র্যাকটিক্যাল ডিজাইন তৈরির দক্ষতা গড়ে তুলতে এই কোর্সটি সাজানো হয়েছে।
                </p>

                <div className="pt-2 flex flex-wrap gap-2.5 justify-center md:justify-start">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                    <i data-lucide="check" className="w-3.5 h-3.5 text-[#ebff00]"></i> বিগিনার-ফ্রেন্ডলি সাপোর্ট
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                    <i data-lucide="check" className="w-3.5 h-3.5 text-[#ebff00]"></i> বাস্তবভিত্তিক প্রজেক্ট গাইড
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRICING SECTION */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="credit-card" className="w-4 h-4"></i>
                <span>Transparent Pricing</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">কোর্স ফি ও পেমেন্ট প্ল্যান</h2>
              <p className="mt-3 text-pink-200 text-sm">
                একসঙ্গে পুরো টাকা দেওয়ার প্রয়োজন নেই! সহজ কিস্তিতে শুরু করুন আপনার Photoshop শেখার যাত্রা।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Indian Students Plan */}
              <div className="glass-box rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 border-[#ebff00]/60 relative shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest bg-[#ebff00] text-black px-3 py-1 rounded-full">
                      🇮🇳 ভারতীয় শিক্ষার্থীদের জন্য
                    </span>
                    <span className="text-xs text-pink-200 font-semibold">৩টি সহজ কিস্তি</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-pink-200 block mb-1">সম্পূর্ণ কোর্স ফি</span>
                    <span className="text-5xl font-black text-white tracking-tight">₹6,999</span>
                    <span className="text-lg font-bold text-[#ebff00] ml-2">INR</span>
                  </div>

                  <div className="space-y-2.5 text-sm mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">Admission Fees</span>
                      <span className="font-black text-[#ebff00]">₹2,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">১ম মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">₹2,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">২য় মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">₹2,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">৩য় মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">₹999</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between font-black text-sm">
                    <span className="text-white">সর্বমোট:</span>
                    <span className="text-[#ebff00] text-base">₹6,999</span>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="https://wa.me/917478442655?text=আমি%20India%20থেকে%20Fearless%20Photoshop%20কোর্সে%20ভর্তি%20হতে%20চাই।"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric block w-full text-center py-4 rounded-xl text-base font-extrabold shadow-xl"
                  >
                    ভর্তির জন্য যোগাযোগ করুন
                  </a>
                </div>
              </div>

              {/* Bangladeshi Students Plan */}
              <div className="glass-box rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/20 relative shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest bg-pink-500/20 text-[#ebff00] border border-pink-400/40 px-3 py-1 rounded-full">
                      🇧🇩 বাংলাদেশি শিক্ষার্থীদের জন্য
                    </span>
                    <span className="text-xs text-pink-200 font-semibold">৩টি সহজ কিস্তি</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-pink-200 block mb-1">সম্পূর্ণ কোর্স ফি</span>
                    <span className="text-5xl font-black text-white tracking-tight">৳9,649</span>
                    <span className="text-lg font-bold text-[#ebff00] ml-2">BDT</span>
                  </div>

                  <div className="space-y-2.5 text-sm mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">Admission Fees</span>
                      <span className="font-black text-[#ebff00]">৳3,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">১ম মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">৳2,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">২য় মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">৳2,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-white">৩য় মাসের কিস্তি</span>
                      <span className="font-black text-[#ebff00]">৳2,649</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between font-black text-sm">
                    <span className="text-white">সর্বমোট:</span>
                    <span className="text-[#ebff00] text-base">৳9,649</span>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="https://wa.me/917478442655?text=আমি%20Bangladesh%20থেকে%20Fearless%20Photoshop%20কোর্সে%20ভর্তি%20হতে%20চাই।"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-btn-glass block w-full text-center py-4 rounded-xl text-base font-extrabold"
                  >
                    ভর্তির জন্য যোগাযোগ করুন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section id="faq" className="py-20 md:py-28 bg-black/25 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ebff00] text-xs font-black uppercase tracking-widest mb-3">
                <i data-lucide="help-circle" className="w-4 h-4"></i>
                <span>Clarifications</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)</h2>
              <p className="mt-2 text-pink-200 text-sm">সাধারণ কিছু জিজ্ঞাসার উত্তর</p>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="glass-box rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-base focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <i
                        data-lucide="chevron-down"
                        className={`w-5 h-5 text-pink-300 transition-transform shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-white/10 text-sm text-pink-100 leading-relaxed">
                        {idx === FAQS.length - 1 ? (
                          <>
                            ভর্তি সংক্রান্ত তথ্যের জন্য সরাসরি যোগাযোগ করুন:{" "}
                            <a href="tel:+917478442655" className="text-[#ebff00] font-bold underline">
                              +91 747 844 2655
                            </a>{" "}
                            অথবা WhatsApp-এ মেসেজ পাঠান।
                          </>
                        ) : (
                          faq.a
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-box rounded-3xl p-8 sm:p-14 text-center border-2 border-white/20 bg-gradient-to-b from-[#ff00a8]/30 via-[#750080]/40 to-black/80 relative overflow-hidden shadow-2xl">
              <span className="inline-block bg-[#ebff00] text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                FEARLESS PHOTOSHOP – LEARN. CREATE. GROW.
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
                অন্যদের ডিজাইন করতে দেখা বন্ধ করুন, <br />
                <span className="text-electric-yellow">এবার নিজেই ডিজাইন তৈরি করুন!</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-pink-100/90 max-w-2xl mx-auto leading-relaxed">
                Photoshop শেখার জন্য আপনাকে আগে থেকেই প্রফেশনাল হতে হবে না। প্রয়োজন শুধু একটি সঠিক শুরু, শেখার আগ্রহ এবং নিয়মিত প্র্যাকটিস। Fearless Photoshop for Beginners-এর সঙ্গে শুরু করুন আপনার ক্রিয়েটিভ জার্নি।
              </p>

              <p className="mt-2 text-sm text-pink-200/80 max-w-xl mx-auto">
                নিজের দক্ষতা তৈরি করুন। নতুন নতুন ডিজাইন শিখুন। নিজের ক্রিয়েটিভ আইডিয়াগুলো বাস্তবে রূপ দিন।
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/917478442655?text=Hello,%20I%20want%20to%20enroll%20in%20Fearless%20Photoshop%20today."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric w-full sm:w-auto px-9 py-4 rounded-xl text-base font-black flex items-center justify-center gap-2"
                >
                  <i data-lucide="zap" className="w-5 h-5 fill-black"></i>
                  <span>আজই ভর্তি হোন – এখনই ভর্তি হতে চাই</span>
                </a>
                <a
                  href="https://wa.me/917478442655?text=Hi,%20I%20have%20questions%20regarding%20the%20Fearless%20Photoshop%20Course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-btn-glass w-full sm:w-auto px-9 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                >
                  <i data-lucide="message-circle" className="w-5 h-5 text-[#ebff00]"></i>
                  <span>WhatsApp-এ যোগাযোগ করুন</span>
                </a>
              </div>

              <div className="mt-8 text-sm text-pink-200 flex flex-col items-center justify-center gap-1">
                <div>
                  সরাসরি যোগাযোগ:{" "}
                  <a href="tel:+917478442655" className="text-white font-extrabold hover:underline">
                    +91 747 844 2655
                  </a>
                </div>
                <div className="text-xs text-pink-200/70 tracking-wide">
                  FEARLESS PHOTOSHOP – LEARN. CREATE. GROW.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
