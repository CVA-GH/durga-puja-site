"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ScheduleTimeline from "./ScheduleTimeline";
import PandalHighlights from "./PandalHighlights";
import PhotoGallery from "./PhotoGallery";
import CommitteeGrid from "./CommitteeGrid";
import VisitorGuide from "./VisitorGuide";
import Footer from "./Footer";
import CmsStatusModal from "./CmsStatusModal";
import { PujaPageData } from "@/sanity/fetchData";

interface LandingPageShellProps {
  data: PujaPageData;
}

export default function LandingPageShell({ data }: LandingPageShellProps) {
  const [isCmsModalOpen, setIsCmsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fffcf7] text-[#1f1610]">
      {/* Navigation Bar */}
      <Navbar
        onOpenCmsModal={() => setIsCmsModalOpen(true)}
        isLiveFromCms={data.isLiveFromCms}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Countdown & Theme Reveal */}
        <Hero settings={data.siteSettings} />

        {/* Puja Schedule Timeline (Maha Panchami to Vijaya Dashami) */}
        <ScheduleTimeline schedule={data.schedule} />

        {/* Pandal Architecture, Kumartuli Sculptor & Eco-friendly Initiatives */}
        <PandalHighlights settings={data.siteSettings} />

        {/* Photo Gallery with Fullscreen Lightbox */}
        <PhotoGallery gallery={data.gallery} />

        {/* Committee Members Grid with Contact Links */}
        <CommitteeGrid committee={data.committee} />

        {/* Visitor Guide, Metro Route & Aarti Guidelines */}
        <VisitorGuide settings={data.siteSettings} />
      </main>

      {/* Footer with Bengali Festive Blessing & CMS Quick Link */}
      <Footer
        settings={data.siteSettings}
        onOpenCmsModal={() => setIsCmsModalOpen(true)}
        isLiveFromCms={data.isLiveFromCms}
      />

      {/* CMS Status & Committee Setup Handbook Modal */}
      <CmsStatusModal
        isOpen={isCmsModalOpen}
        onClose={() => setIsCmsModalOpen(false)}
        isLiveFromCms={data.isLiveFromCms}
        cmsSource={data.cmsSource}
      />
    </div>
  );
}

