import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anekBangla = Anek_Bangla({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MITE Academy - ডিজিটাল স্কিলস শিখুন সেরা প্ল্যাটফর্ম থেকে",
  description: "Digital Skills & Freelancing Career Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body suppressHydrationWarning className={`${anekBangla.className} relative selection:bg-[#ebff00] selection:text-black`}>
        
        {/* গ্লোবাল হেডার */}
        <Header />
        
        {/* ডাইনামিক পেজ কন্টেন্ট */}
        {children}
        
        {/* গ্লোবাল ফুটার */}
        <Footer />

        {/* গ্লোবাল WhatsApp বাটন */}
        <a href="https://wa.me/917478442655" target="_blank" className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#ebff00] text-black font-extrabold text-sm shadow-[0_0_25px_rgba(235,255,0,0.6)] hover:scale-105 transition-all duration-300">
          <i data-lucide="message-circle" className="w-5 h-5 fill-black"></i>
          <span className="hidden sm:inline">WhatsApp হেল্পলাইন</span>
        </a>

        {/* Lucide আইকন স্ক্রিপ্ট */}
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      </body>
    </html>
  );
}