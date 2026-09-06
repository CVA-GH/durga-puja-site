import { client, isSanityConfigured } from "./lib/client";
import {
  scheduleQuery,
  galleryQuery,
  committeeQuery,
  siteSettingsQuery,
} from "./lib/queries";
import {
  defaultSchedule,
  defaultGallery,
  defaultCommittee,
  defaultSiteSettings,
  DaySchedule,
  GalleryItem,
  CommitteeMember,
  SiteSettings,
} from "@/data/mockData";

export interface PujaPageData {
  schedule: DaySchedule[];
  gallery: GalleryItem[];
  committee: CommitteeMember[];
  siteSettings: SiteSettings;
  isLiveFromCms: boolean;
  cmsSource: "sanity" | "local_fallback";
}

export async function fetchPujaData(): Promise<PujaPageData> {
  if (!isSanityConfigured) {
    return {
      schedule: defaultSchedule,
      gallery: defaultGallery,
      committee: defaultCommittee,
      siteSettings: defaultSiteSettings,
      isLiveFromCms: false,
      cmsSource: "local_fallback",
    };
  }

  try {
    const [liveSchedule, liveGallery, liveCommittee, liveSettings] =
      await Promise.all([
        client.fetch<DaySchedule[]>(scheduleQuery),
        client.fetch<GalleryItem[]>(galleryQuery),
        client.fetch<CommitteeMember[]>(committeeQuery),
        client.fetch<SiteSettings>(siteSettingsQuery),
      ]);

    return {
      schedule: liveSchedule && liveSchedule.length > 0 ? liveSchedule : defaultSchedule,
      gallery: liveGallery && liveGallery.length > 0 ? liveGallery : defaultGallery,
      committee: liveCommittee && liveCommittee.length > 0 ? liveCommittee : defaultCommittee,
      siteSettings: liveSettings || defaultSiteSettings,
      isLiveFromCms: true,
      cmsSource: "sanity",
    };
  } catch (error) {
    console.warn("Could not fetch from Sanity CMS, using local festive fallback data:", error);
    return {
      schedule: defaultSchedule,
      gallery: defaultGallery,
      committee: defaultCommittee,
      siteSettings: defaultSiteSettings,
      isLiveFromCms: false,
      cmsSource: "local_fallback",
    };
  }
}

