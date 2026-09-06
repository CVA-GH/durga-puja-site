import { createImageUrlBuilder } from "@sanity/image-url";
import { client, isSanityConfigured } from "./client";

const builder = isSanityConfigured ? createImageUrlBuilder(client) : null;

type SafeBuilder = NonNullable<typeof builder>;
type BuilderParam = Parameters<SafeBuilder["image"]>[0];

export function urlForImage(source: BuilderParam | { asset?: { url?: string } } | string | null | undefined): string {
  if (!source) return "";
  // If it's already a URL string (e.g. from fallback mock data), return it directly
  if (typeof source === "string") return source;
  if (typeof source === "object" && "asset" in source && source.asset && "url" in source.asset && typeof source.asset.url === "string") {
    return source.asset.url;
  }

  try {
    if (builder && source) {
      return builder.image(source as BuilderParam).auto("format").fit("max").url();
    }
  } catch (err) {
    console.warn("Failed to generate Sanity image URL:", err);
  }
  return "";
}
