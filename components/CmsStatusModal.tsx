"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Smartphone,
  Layers,
  Database,
  Calendar,
  Image as ImageIcon,
} from "lucide-react";

interface CmsStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLiveFromCms: boolean;
  cmsSource: "sanity" | "local_fallback";
}

export default function CmsStatusModal({
  isOpen,
  onClose,
  isLiveFromCms,
  cmsSource,
}: CmsStatusModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleEnv = `NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleEnv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#1a0c10] text-stone-200 rounded-3xl border border-amber-600/40 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-red-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-300">
              কমিটি Headless CMS ড্যাশবোর্ড
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Sanity.io Integration & Committee Dashboard Status
            </p>
          </div>
        </div>

        {/* Current Live Status Box */}
        <div
          className={`p-4 rounded-2xl border mb-6 flex items-start gap-3 ${
            isLiveFromCms
              ? "bg-emerald-950/50 border-emerald-500/40 text-emerald-200"
              : "bg-amber-950/40 border-amber-500/40 text-amber-200"
          }`}
        >
          {isLiveFromCms ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          )}
          <div className="text-xs sm:text-sm leading-relaxed">
            {isLiveFromCms ? (
              <>
                <strong className="font-bold text-emerald-300 block mb-0.5">
                  🟢 Sanity.io ক্লাউড ডাটাবেসের সাথে সংযুক্ত (Live CMS Active • {cmsSource})
                </strong>
                আপনার ওয়েবসাইট বর্তমানে সরাসরি Sanity হেডলেস CMS থেকে রিয়েল-টাইম তথ্য
                গ্রহণ করছে।
              </>
            ) : (
              <>
                <strong className="font-bold text-amber-300 block mb-0.5">
                  ✨ প্রিভিউ মোড চালু (Zero-Config Authentic Fallback Active • {cmsSource})
                </strong>
                বর্তমানে ওয়েবসাইটটি সম্পূর্ণ প্রাক-সংযোজিত খাঁটি কলকাতা দুর্গাপূজার নির্ঘণ্ট ও
                ছবি সহ প্রদর্শিত হচ্ছে। Sanity প্রজেক্ট আইডি যুক্ত করলেই স্বয়ংক্রিয়ভাবে লাইভ CMS
                সক্রিয় হবে।
              </>
            )}
          </div>
        </div>

        {/* Generated Schemas Available for Committee */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>প্রস্তুতকৃত CMS স্কিমা (Generated Schemas)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Schedule (পূজা নির্ঘণ্ট)</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-1">
                মহা পঞ্চমী থেকে বিজয়া দশমীর প্রাত্যহিক সময়সূচি, অঞ্জলি ও সন্ধিপূজা সম্পাদনা।
              </p>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Gallery (ছবি অ্যালবাম)</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-1">
                প্রতিমা, মণ্ডপ, ধুনুচি নাচ ও সিঁদুর খেলার ছবি আপলোড ও হটস্পট ক্রপিং।
              </p>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Committee (কমিটি সদস্য)</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-1">
                কর্মকর্তাদের পদবী, ছবি এবং হেল্পলাইন ফোন নম্বর পরিচালনা।
              </p>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Site Settings (মণ্ডপ তথ্য)</span>
              </div>
              <p className="text-stone-400 text-[11px] mt-1">
                থিম বর্ণনা, ভাস্কর, স্থপতি এবং জরুরি হেল্পলাইন নম্বর পরিবর্তন।
              </p>
            </div>
          </div>
        </div>

        {/* 3 Step Setup Instruction */}
        <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
            কীভাবে কমিটি সদস্যরা ৩ মিনিটে লাইভ CMS শুরু করবেন:
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-xs text-stone-300">
            <li>
              বিনামূল্যে{" "}
              <a
                href="https://www.sanity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline font-semibold inline-flex items-center gap-0.5"
              >
                Sanity.io <ExternalLink className="w-3 h-3 inline" />
              </a>{" "}
              -তে সাইন আপ করে একটি নতুন প্রজেক্ট তৈরি করুন।
            </li>
            <li>
              প্রজেক্ট ড্যাশবোর্ড থেকে <strong>Project ID</strong> কপি করুন।
            </li>
            <li>
              আপনার প্রজেক্টের <code>.env.local</code> ফাইলে নিচে দেওয়া ভ্যারিয়েবল সেট করুন:
            </li>
          </ol>

          {/* Code block with copy button */}
          <div className="relative mt-2">
            <pre className="p-3 bg-black/60 rounded-xl text-[11px] font-mono text-amber-200 overflow-x-auto border border-white/10">
              {sampleEnv}
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">কপি হয়েছে</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>কপি</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-stone-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs transition-colors"
          >
            বন্ধ করুন (Close)
          </button>
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Sanity ড্যাশবোর্ডে যান</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
