"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Maximize2,
  Tag,
  Sparkles,
} from "lucide-react";
import { GalleryItem } from "@/data/mockData";
import { urlForImage } from "@/sanity/lib/image";

interface PhotoGalleryProps {
  gallery: GalleryItem[];
}

export default function PhotoGallery({ gallery }: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "সকল ছবি (All)" },
    { id: "idol", label: "প্রতিমা দর্শন (Idol)" },
    { id: "pandal", label: "মণ্ডপ সজ্জা (Pandal)" },
    { id: "rituals", label: "পূজা ও ধুনুচি (Rituals)" },
    { id: "cultural", label: "সাংস্কৃতিক সন্ধ্যা (Cultural)" },
    { id: "sindoor", label: "সিঁদুর খেলা (Sindoor Khela)" },
  ];

  const filteredImages = gallery.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredImages.length - 1
    );
  }, [lightboxIndex, filteredImages.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! < filteredImages.length - 1 ? prev! + 1 : 0
    );
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activePhoto =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#14080a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>ছবি ও স্মৃতি • Photo Gallery & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-tight">
            পূজার আলোকচিত্র অ্যালবাম
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            মায়ের চিন্ময়ী রূপ, অপূর্ব মণ্ডপ সজ্জা, ধুনুচি নাচ এবং দশমীর সিঁদুর খেলার মুহূর্তগুলি।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-10 scrollbar-none gap-2 justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-red-600 text-white font-semibold shadow-md shadow-red-950/50"
                  : "bg-white/10 hover:bg-white/15 text-stone-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((photo, index) => {
            const imgSrc = urlForImage(photo.image) || photo.image;
            return (
              <div
                key={photo._id || index}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-900 border border-white/10 shadow-lg hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <Image
                    src={imgSrc}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {photo.category}
                    </span>
                    {photo.isFeatured && (
                      <span className="text-[10px] font-bold bg-amber-500 text-black px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-12 h-12 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                    {photo.bengaliTitle && (
                      <p className="text-xs text-amber-200/90 font-medium line-clamp-1 mt-0.5">
                        {photo.bengaliTitle}
                      </p>
                    )}
                    {photo.photographer && (
                      <p className="text-[11px] text-stone-400 mt-1 flex items-center gap-1">
                        <span>ছবি:</span> {photo.photographer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="text-xs sm:text-sm text-stone-400">
              <span className="font-semibold text-amber-400">
                {lightboxIndex + 1}
              </span>{" "}
              / {filteredImages.length}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Nav Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Big Active Image */}
            <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center">
              <Image
                src={urlForImage(activePhoto.image) || activePhoto.image}
                alt={activePhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Lightbox Footer Details */}
          <div className="max-w-3xl mx-auto w-full text-center bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
            <h3 className="text-base sm:text-xl font-bold text-amber-300">
              {activePhoto.title}
            </h3>
            {activePhoto.bengaliTitle && (
              <p className="text-xs sm:text-sm text-amber-100/90 mt-0.5">
                {activePhoto.bengaliTitle}
              </p>
            )}
            {activePhoto.caption && (
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl mx-auto">
                {activePhoto.caption}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400 mt-2">
              {activePhoto.photographer && (
                <span>ছবি কৃতজ্ঞতা: {activePhoto.photographer}</span>
              )}
              {activePhoto.year && <span>সাল: {activePhoto.year}</span>}
              <span className="uppercase text-amber-400 font-mono">
                {activePhoto.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
