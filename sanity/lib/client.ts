import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const isSanityConfigured = Boolean(
  projectId && projectId.trim() !== "" && projectId !== "your_project_id"
);

export const client = createClient({
  projectId: projectId || "dummy-project-id",
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data at all times
});

