"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Leaf,
  ShieldCheck,
  Award,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { SiteSettings } from "@/data/mockData";

interface PandalHighlightsProps {
  settings: SiteSettings;
}

export default function PandalHighlights({ settings }: PandalHighlightsProps) {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-[#1a0a0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>মণ্ডপ ভাবনা ও ঐতিহ্য • Pandal & Artisan Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-tight">
            মাটির টানে — বাংলার লোকশিল্পের মেলবন্ধন
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            বিষ্ণুপুরের ঐতিহ্যবাহী টেরাকোটা মন্দির, বাঁকুড়ার ঘোড়া ও পুরুলিয়ার ছৌ মুখোশের সমন্বয়ে গঠিত আমাদের ৭৫তম বর্ষের মহামণ্ডপ।
          </p>
        </div>

        {/* Highlight Feature 1: Theme & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>Theme 2026 • স্থাপত্য শিল্প</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-amber-200">
              {settings.bengaliThemeTitle}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {settings.themeDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                  প্রধান স্থপতি (Architect)
                </div>
                <div className="text-sm font-bold text-amber-300 mt-1">
                  {settings.pandalArchitect}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Design by Bengal Guild of Artisans
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                  প্রতিমা শিল্পী (Master Sculptor)
                </div>
                <div className="text-sm font-bold text-amber-300 mt-1">
                  {settings.artisanSculptor}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Traditional Kumartuli Fifth-Generation Atelier
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>১০,০০০+ হস্তনির্মিত টেরাকোটা টালি দিয়ে আচ্ছাদিত বাইরের তোরণ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>পুরুলিয়ার ঐতিহ্যবাহী ছৌ মুখোশ ও ডোকরা লণ্ঠন দ্বারা অভ্যন্তরীণ আলোকসজ্জা</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>মায়ের পরনে খাঁটি শোলার কারুকাজ (Daker Saaj) ও মাটির অলংকার</span>
              </li>
            </ul>
          </div>

          {/* Theme Photo Banner */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 group">
            <Image
              src="https://images.unsplash.com/photo-1596405344148-2d0df560377d?auto=format&fit=crop&w=1200&q=80"
              alt="Terracotta Pandal Architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-black/60 px-3 py-1 rounded-full border border-amber-500/30">
                স্থাপত্যের ঝলক
              </span>
              <h4 className="text-xl font-bold text-white mt-2">
                বাঁকুড়ার টেরাকোটা শৈলীতে নির্মিত মণ্ডপ
              </h4>
              <p className="text-xs text-stone-300 mt-1">
                গ্রামবাংলার মাটির রূপ ও শিল্পীদের হাতের জাদু জীবন্ত হয়ে উঠেছে আমাদের প্রাঙ্গণে।
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars: Green Puja, Accessibility & Traditional Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-[#240e15] to-[#17080c] border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-emerald-300">
              ১০০% পরিবেশবান্ধব শারদোৎসব
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              গঙ্গার মাটি, বাঁশ, পাট ও চালের গুঁড়োর আলপনা। সিসা ও বিষাক্ত রাসায়নিকমুক্ত প্রাকৃতিক রঙের ব্যবহার, যা বিসর্জনের সময় গঙ্গার জলদূষণ প্রতিহত করে।
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#240e15] to-[#17080c] border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-blue-300">
              নিরাপত্তা ও সহজ গমনাগমন
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              সিনিয়র সিটিজেন ও বিশেষভাবে সক্ষম দর্শনার্থীদের জন্য আলাদা র্যাম্প, বিনামূল্যে হুইলচেয়ার সেবা, এবং সার্বক্ষণিক চিকিৎসাকেন্দ্র ও অ্যাম্বুল্যান্স।
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#240e15] to-[#17080c] border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-amber-300">
              ঐতিহ্য ও সাংস্কৃতিক সম্মাননা
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              বিগত বছরগুলিতে শ্রেষ্ঠ মণ্ডপ, শ্রেষ্ঠ প্রতিমা ও সেরা পরিবেশবান্ধব পুজোর সম্মাননা প্রাপ্ত। এ বছর ৭৫তম হীরক জয়ন্তী উপলক্ষে আয়োজিত হয়েছে বিশেষ ধুনুচি নাচ উৎসব।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
