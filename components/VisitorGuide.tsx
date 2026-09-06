"use client";

import React from "react";
import {
  MapPin,
  Train,
  Car,
  Clock,
  PhoneCall,
  Compass,
} from "lucide-react";
import { SiteSettings } from "@/data/mockData";

interface VisitorGuideProps {
  settings: SiteSettings;
}

export default function VisitorGuide({ settings }: VisitorGuideProps) {
  return (
    <section id="guide" className="py-16 md:py-24 bg-[#fffdfa] text-[#1c1214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>দর্শক সহায়িকা • Visitor Guide & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#780016] tracking-tight">
            মণ্ডপে আসার পথনির্দেশ ও তথ্যাদি
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            মেট্রো রুট, গাড়ি পার্কিং, পুষ্পাঞ্জলি ও প্রসাদ বিতরণের নিয়মাবলী এবং দর্শনার্থী গাইডলাইন।
          </p>
        </div>

        {/* Location & Metro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: How to Reach by Metro */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-5">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              মেট্রো রেল পথনির্দেশ
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              কলকাতা ব্লু-লাইন মেট্রোর মাধ্যমে খুব সহজেই মণ্ডপে পৌঁছানো সম্ভব।
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
                <span className="font-bold text-blue-900 block">
                  কালীঘাট মেট্রো স্টেশন (গেট নং ২):
                </span>
                <span className="text-stone-600">
                  রাসবিহারী ক্রসিং হয়ে সাউদার্ন অ্যাভিনিউ অভিমুখে হাঁটা পথে ৮ মিনিট।
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block">
                  রবীন্দ্র সরোবর মেট্রো স্টেশন:
                </span>
                <span className="text-stone-600">
                  লেক স্টেডিয়াম সংলগ্ন পথ ধরে ৫ মিনিটের অটো বা টোটো রাইড।
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Road & Parking Advice */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              যানবাহন ও পার্কিং ব্যবস্থা
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              উৎসবের দিনগুলিতে ট্রাফিক পুলিশের নির্দেশিকা অনুযায়ী নির্দিষ্ট পার্কিং স্লট।
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-900 block">
                  সাধারণ পার্কিং জোন:
                </span>
                <span className="text-stone-600">
                  লেক রোডের নির্ধারিত পার্কিং বে ও লেক ক্লাব সংলগ্ন নির্দিষ্ট গাড়ি পার্কিং অঞ্চল।
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block">
                  ভিআইপি ও বয়স্কদের ড্রপ-অফ গেট:
                </span>
                <span className="text-stone-600">
                  মণ্ডপের পূর্ব তোরণ (গেট নং ৩) এ নামিয়ে গাড়ি ঘুরিয়ে নিয়ে যাওয়ার সুব্যবস্থা।
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Best Timings & Crowd Management */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              দর্শন ও আরতির সেরা সময়
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              ভিড় এড়িয়ে স্বাচ্ছন্দ্যে মা দুর্গাকে দর্শন করতে সেরা সময়সূচি অনুসরণ করুন।
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-900 block">
                  শান্তিপূর্ণ প্রতিমা দর্শন:
                </span>
                <span className="text-stone-600">
                  সকাল ০৮:০০ থেকে দুপুর ১২:০০ পর্যন্ত এবং গভীর রাত ০১:০০ থেকে ভোর ০৪:০০ পর্যন্ত।
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block">
                  সন্ধ্যা আরতি ও ধুনুচি নাচ:
                </span>
                <span className="text-stone-600">
                  প্রতিদিন সন্ধ্যা ০৬:৩০ থেকে রাত ০৮:৩০ (উৎসবের সবচেয়ে জমজমাট প্রহর)।
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Address Banner & Emergency Strip */}
        <div className="bg-gradient-to-r from-[#2a0e15] to-[#1c080d] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>মণ্ডপ প্রাঙ্গণ ও ঠিকানা</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-amber-200">
              {settings.address}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              নিকটবর্তী ল্যান্ডমার্ক: সাদার্ন অ্যাভিনিউ লেক স্টেডিয়াম গেটের বিপরীতে।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://maps.google.com/?q=Ballygunge+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-950/40 transition-transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
            >
              <Compass className="w-4 h-4" />
              <span>Google ম্যাপে দেখুন</span>
            </a>

            <a
              href={`tel:${settings.emergencyHelpline?.split("/")[0]?.trim() || "+919830098765"}`}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white border border-white/20 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>হেল্পলাইন কল করুন</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
