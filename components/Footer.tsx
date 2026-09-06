"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  Settings,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Image as ImageIcon,
  Users,
  Compass,
} from "lucide-react";
import { SiteSettings } from "@/data/mockData";

interface FooterProps {
  settings: SiteSettings;
  onOpenCmsModal: () => void;
  isLiveFromCms: boolean;
}

export default function Footer({
  settings,
  onOpenCmsModal,
  isLiveFromCms,
}: FooterProps) {
  return (
    <footer className="bg-[#12070a] text-stone-300 border-t border-amber-900/40 relative overflow-hidden">
      {/* Top Auspicious Gold Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Committee Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 to-red-600 p-0.5 flex items-center justify-center overflow-hidden shadow-md">
                <div className="w-full h-full rounded-full bg-[#faf6ef] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/Logo.jpg"
                    alt="Antaspriha Durgotsav Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-amber-300 font-bold text-base leading-tight">
                  {settings.bengaliCommitteeName}
                </h4>
                <span className="text-[11px] text-stone-400">
                  {settings.committeeName}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              কলকাতার অন্যতম ঐতিহ্যবাহী ও পরিচ্ছন্ন আবাসিক শারদোৎসব। ১৯৫১ সাল থেকে
              আমরা ঐতিহ্য, সংস্কৃতি এবং সামাজিক দায়বদ্ধতার সঙ্গে উদযাপিত হয়ে আসছি।
            </p>

            <div className="text-[11px] text-amber-400/90 font-medium">
              রেজিস্ট্রেশন নং: S/IL/1951/WB • পশ্চিমবঙ্গ সরকার অনুমোদিত
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              দ্রুত লিঙ্ক (Quick Links)
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#schedule"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>পূজা নির্ঘণ্ট (Schedule)</span>
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span>মণ্ডপ ভাবনা ও থিম (Theme 2026)</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>আলোকচিত্র অ্যালবাম (Gallery)</span>
                </a>
              </li>
              <li>
                <a
                  href="#committee"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  <span>পূজা কমিটি সদস্য (Committee)</span>
                </a>
              </li>
              <li>
                <a
                  href="#guide"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-500" />
                  <span>মণ্ডপ দর্শন সহায়িকা (Visitor Guide)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Helplines */}
          <div>
            <h5 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              যোগাযোগ ও হেল্পলাইন
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs">{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+919830098765"
                  className="hover:text-amber-300 text-xs"
                >
                  {settings.emergencyHelpline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contact@antasprihadurgotsav.org"
                  className="hover:text-amber-300 text-xs"
                >
                  contact@antasprihadurgotsav.org
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Committee Portal (CMS Integration) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <h5 className="text-amber-300 font-bold text-sm mb-2 flex items-center gap-2">
              <Settings className="w-4 h-4 text-amber-400" />
              <span>কমিটি CMS ড্যাশবোর্ড</span>
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              কমিটি সদস্যরা সহজে মোবাইল থেকে নতুন ছবি আপলোড এবং পূজা নির্ঘণ্টের সময়সূচি পরিবর্তন করতে পারেন।
            </p>

            <button
              onClick={onOpenCmsModal}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-500 hover:to-red-600 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>CMS পোর্টাল ও সেটিংস খুলুন</span>
              <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded-full">
                {isLiveFromCms ? "🟢 লাইভ" : "⚙️ সেটআপ"}
              </span>
            </button>
          </div>
        </div>

        {/* Festive Blessing Strip */}
        <div className="py-6 border-t border-stone-800/80 text-center">
          <p className="text-amber-200 font-serif text-base sm:text-lg tracking-wide">
            🌸 ॥ শুভ বিজয়ার আন্তরিক প্রীতি, শুভেচ্ছা ও অভিনন্দন ॥ 🌸
          </p>
          <p className="text-[11px] text-stone-400 mt-1">
            মা দুর্গার আশীর্বাদে প্রতিটি পরিবারে সুখ, শান্তি ও সুস্বাস্থ্য বিরাজ করুক। আসছে বছর আবার হবে!
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <div>
            © 2026 {settings.committeeName}. সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with devotion & cultural pride for Kolkata</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}

