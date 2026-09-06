"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Phone,
  Mail,
  MessageCircle,
  Award,
  HeartHandshake,
} from "lucide-react";
import { CommitteeMember } from "@/data/mockData";
import { urlForImage } from "@/sanity/lib/image";

interface CommitteeGridProps {
  committee: CommitteeMember[];
}

export default function CommitteeGrid({ committee }: CommitteeGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "সকল সদস্য (All)" },
    { id: "executive", label: "কার্যনির্বাহী পর্ষদ (Executive)" },
    { id: "cultural", label: "সাংস্কৃতিক উপসমিতি (Cultural)" },
    { id: "logistics", label: "মণ্ডপ ও পরিষেবা (Logistics)" },
    { id: "volunteers", label: "চিকিৎসা ও সেবা (Volunteers)" },
  ];

  const filteredMembers = committee.filter((m) => {
    if (activeCategory === "all") return true;
    return m.roleCategory === activeCategory;
  });

  const president =
    committee.find(
      (m) =>
        m.designation?.toLowerCase().includes("president") ||
        m.designation?.includes("সভাপতি")
    ) || committee[0];

  const presidentPhoto = president
    ? urlForImage(president.photo) || president.photo
    : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";

  return (
    <section id="committee" className="py-16 md:py-24 bg-[#fffdf8] text-[#1c1214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>পূজা পরিচালন সমিতি • Organizing Committee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#780016] tracking-tight">
            কমিটি ও স্বেচ্ছাসেবক দল
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            ৭৫তম বর্ষপূর্তি উৎসবকে সুচারু ও আনন্দময় করে তুলতে আমাদের নিবেদিতপ্রাণ কর্মকর্তা ও স্বেচ্ছাসেবকবৃন্দ।
          </p>
        </div>

        {/* Message from President / Secretary */}
        {president && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#260e15] to-[#1a080d] text-white shadow-xl border border-amber-500/30 flex flex-col md:flex-row items-center gap-6">
            {presidentPhoto && (
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-amber-400/80 shadow-md">
                <Image
                  src={presidentPhoto}
                  alt={president.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>সভাপতির শুভেচ্ছা বার্তা • Message from the President</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-200">
                {president.bengaliName ? `${president.bengaliName} (${president.name})` : president.name}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed italic">
                &ldquo;{president.message || "আমাদের অন্তস্প্রিহা আবাসিক দুর্গোৎসব এ বছর ৭৫তম বর্ষে পদার্পণ করছে। মায়ের আগমনে সকল দর্শনার্থী, আবাসিকবৃন্দ, পাড়াপ্রতিবেশী এবং কলকাতার সমস্ত মানুষকে আমাদের মণ্ডপে আন্তরিক আমন্ত্রণ জানাই।"}&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-2 mb-10 scrollbar-none gap-2 justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[#780016] text-white font-semibold shadow-md shadow-red-950/20"
                  : "bg-white hover:bg-stone-100 text-stone-700 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Committee Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => {
            const photoSrc = urlForImage(member.photo) || member.photo;
            const cleanPhone = member.phone?.replace(/[^0-9]/g, "");

            return (
              <div
                key={member._id}
                className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Portrait Image */}
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0 border border-amber-300">
                      {photoSrc ? (
                        <Image
                          src={photoSrc}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-amber-800 bg-amber-50">
                          <Users className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    {/* Member Details */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                        {member.roleCategory}
                      </span>
                      <h4 className="font-bold text-base text-stone-900 mt-1">
                        {member.name}
                      </h4>
                      {member.bengaliName && (
                        <p className="text-xs text-red-800 font-semibold">
                          {member.bengaliName}
                        </p>
                      )}
                      <p className="text-xs text-stone-600 font-medium mt-0.5">
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  {member.message && (
                    <p className="text-xs text-stone-600 italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4">
                      &ldquo;{member.message}&rdquo;
                    </p>
                  )}
                </div>

                {/* Contact Action Buttons */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-1.5 text-stone-700 hover:text-red-700 font-medium py-1 px-2.5 rounded-lg hover:bg-red-50 transition-colors"
                      title="Call Member"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>{member.phone}</span>
                    </a>
                  )}

                  <div className="flex items-center gap-1.5 ml-auto">
                    {member.whatsapp && (
                      <a
                        href={`https://wa.me/${cleanPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        title="WhatsApp Chat"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                        title="Send Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24x7 Volunteer Helpline Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-800 to-amber-700 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg">
                স্বেচ্ছাসেবক সহায়তা ডেস্ক ও হেল্পলাইন
              </h4>
              <p className="text-xs sm:text-sm text-red-100">
                হারিয়ে যাওয়া ব্যক্তি, বয়স্কদের হুইলচেয়ার অথবা জরুরি প্রয়োজনে আমাদের ভলান্টিয়ার টিম সদা প্রস্তুত।
              </p>
            </div>
          </div>
          <a
            href="tel:+919830098765"
            className="px-5 py-2.5 rounded-full bg-white text-red-900 font-bold text-xs sm:text-sm shadow-md hover:bg-amber-100 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-700" />
            <span>জরুরি কল: 033 2464 1951</span>
          </a>
        </div>
      </div>
    </section>
  );
}
