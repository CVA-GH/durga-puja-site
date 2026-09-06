"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Calendar,
  Image as ImageIcon,
  Users,
  MapPin,
  Sparkles,
  Settings,
  PhoneCall,
} from "lucide-react";

interface NavbarProps {
  onOpenCmsModal: () => void;
  isLiveFromCms: boolean;
}

export default function Navbar({ onOpenCmsModal, isLiveFromCms }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Schedule (সূচি)", href: "#schedule", icon: Calendar },
    { name: "Theme & Pandal", href: "#highlights", icon: Sparkles },
    { name: "Gallery (ছবি)", href: "#gallery", icon: ImageIcon },
    { name: "Committee (কমিটি)", href: "#committee", icon: Users },
    { name: "Visitor Guide", href: "#guide", icon: MapPin },
  ];

  return (
    <>
      {/* Top Auspicious Festival Strip */}
      <div className="bg-[#780016] text-[#ffeedb] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-between border-b border-[#a81a2f]">
        <div className="hidden md:flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>॥ শ্রী শ্রী দুর্গোৎসব ২০২৬ ॥ ৭৫তম বর্ষপূর্তি (প্লাটিনাম জুবিলি)</span>
        </div>
        <div className="mx-auto md:mx-0 flex items-center space-x-3 text-[11px] sm:text-xs">
          <span className="text-amber-300 font-semibold">শুভ শারদীয়া!</span>
          <span>•</span>
          <span>বালিগঞ্জ, কলকাতা</span>
          <span>•</span>
          <a
            href="tel:+919830098765"
            className="text-amber-200 hover:text-white flex items-center gap-1 transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            <span>হেল্পলাইন: 033 2464 1951</span>
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={onOpenCmsModal}
            className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors bg-[#5a0010] px-2.5 py-0.5 rounded-full border border-amber-500/30 text-[11px]"
          >
            <Settings className="w-3 h-3" />
            <span>CMS ড্যাশবোর্ড {isLiveFromCms ? "🟢 লাইভ" : "⚙️ সেটআপ"}</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#14080b]/95 backdrop-blur-md shadow-xl border-b border-amber-600/30 py-2.5"
            : "bg-[#180a0e] border-b border-amber-900/40 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Bengali Typography */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 p-0.5 shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#faf6ef] overflow-hidden flex items-center justify-center">
                <Image
                  src="/Logo.jpg"
                  alt="অন্তস্প্রিহা দুর্গোৎসব লোগো"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-400 font-bold text-base sm:text-lg leading-tight tracking-wide group-hover:text-amber-300 transition-colors">
                অন্তস্প্রিহা আবাসিক
              </span>
              <span className="text-stone-300 text-[11px] sm:text-xs tracking-wider uppercase">
                Antaspriha Abashik Durgotsav
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-sm text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-all flex items-center gap-1.5 font-medium"
                >
                  <Icon className="w-4 h-4 text-amber-500/80" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="#schedule"
              className="bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md shadow-red-900/40 hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              পূজা সূচি ২০২৬
            </a>
            <button
              onClick={onOpenCmsModal}
              title="CMS Settings"
              className="p-2 text-stone-300 hover:text-amber-300 hover:bg-white/10 rounded-full transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCmsModal}
              className="p-2 text-amber-400 hover:bg-white/10 rounded-lg text-xs flex items-center gap-1"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-amber-400 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#180a0e] border-b border-amber-900/60 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-200 hover:text-amber-300 hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-amber-950 flex flex-col gap-2">
              <a
                href="#schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-gradient-to-r from-red-700 to-amber-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md"
              >
                সম্পূর্ণ পূজা সূচি দেখুন
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCmsModal();
                }}
                className="w-full text-center bg-white/5 border border-amber-500/30 text-amber-300 py-2 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>কমিটি CMS লগইন ও সেটিংস</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

