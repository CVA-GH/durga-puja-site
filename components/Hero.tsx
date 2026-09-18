"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Users,
} from "lucide-react";
import { SiteSettings } from "@/data/mockData";

interface HeroProps {
  settings: SiteSettings;
}

export default function Hero({ settings }: HeroProps) {
  // Countdown to Maha Saptami 2026 (19 October 2026 06:00:00 AM IST)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: Maha Saptami 2026 (Oct 19, 2026)
    const targetDate = new Date("2026-10-19T06:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Puja in progress
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#16080b] via-[#210c12] to-[#120709] text-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Decorative Background Elements & Alpona Motifs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-600/30 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl"></div>
      </div>

      {/* Subtle Alpona Border Pattern on Top */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-600 via-yellow-400 to-red-600"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Puja Logo Emblem */}
          <div className="flex justify-center mb-6">
            <div className="relative group p-1 sm:p-1.5 rounded-2xl bg-gradient-to-tr from-amber-500/40 via-red-500/30 to-amber-600/40 shadow-2xl shadow-black/60 border border-amber-500/40 hover:border-amber-400 transition-all duration-300">
              <div className="overflow-hidden rounded-xl bg-[#faf6ef] p-2 sm:p-2.5 shadow-inner">
                <!-- <Image src="/Logo.jpg" alt="Antaspriha Abashik Durgotsav 2026 Logo" width={140} height={210} priority className="h-28 sm:h-36 md:h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />-->

                  <Image
                  src="/Sparsh-logo.jpg"
                  alt="Sparsh Cultural Society 2026 Logo"
                  width={140}
                  height={210}
                  priority
                  className="h-28 sm:h-36 md:h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                  
              </div>
            </div>
          </div>

          {/* Festive Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>মা আসছেন ✦ {settings.yearEdition || "৭৫তম বর্ষপূর্তি উৎসব"}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline font-normal text-amber-200/80">
              Kolkata&apos;s Heritage Sarbojanin Durgotsav
            </span>
          </div>

          {/* Main Title with Bengali Calligraphy Style */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            <!--<span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-md"> -->
            <!--  {settings.bengaliCommitteeName || "অন্তস্প্রিহা আবাসিক দুর্গোৎসব"} </span> -->

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-md">
              {settings.bengaliCommitteeName || "অন্তস্প্রিহা আবাসিক দুর্গোৎসব"}
            </span>
              
            <!-- <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-stone-200 mt-2 tracking-normal"> {settings.committeeName || "Antaspriha Abashik Durga Puja Committee"} </span> -->

              <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-stone-200 mt-2 tracking-normal">
              {settings.committeeName || "Sparsh Cultual Society"}
            </span>
              
          </h1>

          {/* Bengali Subheading */}
          <p className="text-amber-200/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 font-light italic">
            &ldquo;যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা, নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ&rdquo;
          </p>

          {/* Theme Banner Box */}
          <div className="relative mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/70 via-[#260e15]/80 to-amber-950/70 border border-amber-500/30 shadow-2xl backdrop-blur-md text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Theme 2026 (মণ্ডপ ভাবনা)
                </span>
              </div>
              <span className="text-xs text-stone-400">
                শিল্পী: {settings.artisanSculptor}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              {settings.bengaliThemeTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {settings.themeDescription}
            </p>
          </div>

          {/* Countdown Timer Strip */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 uppercase font-semibold tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>মহা সপ্তমী পুজো ও পুষ্পাঞ্জলি আর মাত্র বাকি</span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {[
                { label: "দিন (Days)", value: timeLeft.days },
                { label: "ঘন্টা (Hours)", value: timeLeft.hours },
                { label: "মিনিট (Mins)", value: timeLeft.minutes },
                { label: "সেকেন্ড (Secs)", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2c1017]/80 border border-amber-600/30 rounded-xl p-2.5 sm:p-4 text-center shadow-lg"
                >
                  <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-400 font-medium mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
            <a
              href="#schedule"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-950/60 hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>পূজা নির্ঘণ্ট দেখুন (Panchami - Dashami)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white border border-white/20 font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <span>প্রতিমা ও মণ্ডপের ছবি</span>
            </a>

            <a
              href="#guide"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/50 bg-amber-950/20 text-sm font-medium transition-all flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-4 h-4" />
              <span>মণ্ডপ অবস্থান ও মেট্রো</span>
            </a>
          </div>

          {/* 4 Feature Highlights Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-amber-300 font-bold text-sm sm:text-base">৭৫ বছরের ঐতিহ্য</div>
              <div className="text-stone-400 text-xs mt-0.5">Est. 1951 • Celebrating Platinum Jubilee</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-emerald-300 font-bold text-sm sm:text-base">১০০% পরিবেশবান্ধব</div>
              <div className="text-stone-400 text-xs mt-0.5">Organic clay, terracotta & natural dyes</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 mb-2">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-red-300 font-bold text-sm sm:text-base">৫০,০০০+ দৈনিক দর্শনার্থী</div>
              <div className="text-stone-400 text-xs mt-0.5">Spacious queue & crowd management</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="text-blue-300 font-bold text-sm sm:text-base">২৪×৭ সহায়তা ও চিকিৎসা</div>
              <div className="text-stone-400 text-xs mt-0.5">Free wheelchair access & doctor on duty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

