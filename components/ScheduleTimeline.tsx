"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Flame,
  Utensils,
  Sparkles,
  Music,
  Heart,
  Info,
  Filter,
} from "lucide-react";
import { DaySchedule, ScheduleEvent } from "@/data/mockData";

interface ScheduleTimelineProps {
  schedule: DaySchedule[];
}

export default function ScheduleTimeline({ schedule }: ScheduleTimelineProps) {
  const [selectedDayId, setSelectedDayId] = useState<string>("ashtami");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const activeDay =
    schedule.find((day) => day.dayId === selectedDayId) || schedule[3] || schedule[0];

  const categories = [
    { id: "all", label: "সকল সূচি (All)" },
    { id: "ritual", label: "পূজা ও বিধি (Rituals)" },
    { id: "pushpanjali", label: "পুষ্পাঞ্জলি (Pushpanjali)" },
    { id: "bhog", label: "ভোগ বিতরণ (Prasad & Bhog)" },
    { id: "cultural", label: "সাংস্কৃতিক অনুষ্ঠান (Cultural)" },
    { id: "aarti", label: "সন্ধ্যা আরতি (Aarti)" },
    { id: "sindoor", label: "সিঁদুর খেলা ও বিদায় (Sindoor Khela)" },
  ];

  const filteredEvents = activeDay.events.filter((event: ScheduleEvent) => {
    if (activeCategory === "all") return true;
    return event.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ritual":
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case "pushpanjali":
        return <Flame className="w-4 h-4 text-red-500" />;
      case "bhog":
        return <Utensils className="w-4 h-4 text-emerald-500" />;
      case "cultural":
        return <Music className="w-4 h-4 text-purple-500" />;
      case "aarti":
        return <Flame className="w-4 h-4 text-orange-500" />;
      case "sindoor":
        return <Heart className="w-4 h-4 text-rose-500" />;
      default:
        return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#fffdfa] text-[#1c1214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>পূজা নির্ঘণ্ট ২০২৬ • Puja Schedule & Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#780016] tracking-tight">
            মহা পঞ্চমী থেকে বিজয়া দশমী
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            শ্রী শ্রী দুর্গাপূজার প্রাত্যহিক পূজা বিধি, পুষ্পাঞ্জলির ব্যাচ, বিশেষ সন্ধিপূজা ও মহাপ্রসাদ
            বিতরণের সময়সূচি।
          </p>
        </div>

        {/* Day Selector Tabs (Maha Panchami to Vijaya Dashami) */}
        <div className="flex overflow-x-auto pb-3 mb-8 scrollbar-none gap-2 sm:gap-3 justify-start lg:justify-center">
          {schedule.map((day) => {
            const isSelected = day.dayId === selectedDayId;
            return (
              <button
                key={day.dayId}
                onClick={() => {
                  setSelectedDayId(day.dayId);
                  setActiveCategory("all"); // Reset category filter on day change
                }}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl transition-all text-left border flex flex-col items-start min-w-[140px] sm:min-w-[160px] ${
                  isSelected
                    ? "bg-gradient-to-br from-[#8f0d1e] to-[#690715] text-white border-red-900 shadow-lg shadow-red-950/20 scale-[1.02]"
                    : "bg-white hover:bg-stone-50 text-stone-700 border-stone-200 hover:border-amber-400"
                }`}
              >
                <span
                  className={`text-xs font-semibold ${
                    isSelected ? "text-amber-300" : "text-amber-700"
                  }`}
                >
                  {day.bengaliName}
                </span>
                <span className="text-sm font-bold mt-0.5">{day.dayName}</span>
                <span
                  className={`text-[11px] mt-1 ${
                    isSelected ? "text-stone-200" : "text-stone-500"
                  }`}
                >
                  {day.date.split(",")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Banner & Details Card */}
        <div className="bg-gradient-to-r from-[#21090e] via-[#311119] to-[#21090e] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-600/30 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/20 pb-5 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/30">
                  {activeDay.tithi}
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  {activeDay.bengaliDate}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                {activeDay.bengaliName} • {activeDay.dayName}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">{activeDay.date}</p>
            </div>
            <div className="md:max-w-md bg-white/5 rounded-2xl p-4 border border-white/10 text-xs sm:text-sm text-stone-300 leading-relaxed">
              <span className="font-semibold text-amber-300 block mb-1">
                দিনের মহিমা ও তাৎপর্য:
              </span>
              {activeDay.summary}
            </div>
          </div>

          {/* Category Filter Pills inside Day view */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-stone-400 flex items-center gap-1 mr-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              ফিল্টার:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "bg-amber-400 text-stone-950 font-semibold"
                    : "bg-white/10 hover:bg-white/20 text-stone-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 bg-stone-50 rounded-2xl border border-stone-200">
              <p className="text-stone-500 text-sm">
                এই ক্যাটাগরিতে এই দিনের কোনো বিশেষ সূচি নেই। দয়া করে &lsquo;সকল সূচি&rsquo; সিলেক্ট করুন।
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-3 text-xs font-semibold text-red-700 underline"
              >
                সকল সূচি দেখুন
              </button>
            </div>
          ) : (
            filteredEvents.map((event: ScheduleEvent, index: number) => {
              const isHighlight = event.isHighlight;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all p-4 sm:p-6 border ${
                    isHighlight
                      ? "bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-red-50/80 border-amber-400 shadow-md ring-1 ring-amber-400/50"
                      : "bg-white hover:bg-stone-50/80 border-stone-200/80 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isHighlight
                            ? "bg-amber-500 text-white shadow-md shadow-amber-500/30"
                            : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        {getCategoryIcon(event.category)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-red-900 bg-red-100/80 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                            <Clock className="w-3 h-3 text-red-700" />
                            {event.time}
                          </span>

                          {isHighlight && (
                            <span className="bg-gradient-to-r from-amber-600 to-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                              ⭐ বিশেষ নির্ঘণ্ট (Highlight)
                            </span>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-stone-900">
                          {event.title}
                        </h4>
                        {event.bengaliTitle && (
                          <div className="text-sm font-semibold text-red-800 mt-0.5">
                            {event.bengaliTitle}
                          </div>
                        )}

                        {event.description && (
                          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="self-end sm:self-start">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Devotee Pushpanjali Notice Strip */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold">পুষ্পাঞ্জলি ও ভোগের নিয়মাবলী:</strong> সপ্তমী,
            অষ্টমী ও নবমীর পুষ্পাঞ্জলির ফুল ও বেলপাতা মণ্ডপ থেকেই বিনামূল্যে প্রদান করা হবে।
            ভোগ কুপন মহা পঞ্চমীর সন্ধ্যা থেকে মণ্ডপ কাউন্টারে উপলব্ধ থাকবে। সিনিয়র সিটিজেন ও
            শারীরিক প্রতিবন্ধী দর্শনার্থীদের জন্য বিশেষ পুজো অঞ্জলি ব্যাচ সংরক্ষিত।
          </div>
        </div>
      </div>
    </section>
  );
}
