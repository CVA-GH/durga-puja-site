import { schemaTypes } from "./sanity/schemas";

// Standard Sanity Studio configuration
// Can be used either via embedded Next.js studio route or `npx sanity dev`
export const sanityConfig = {
  name: "durga-puja-studio",
  title: "Durga Puja Committee CMS Dashboard",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
};

export default sanityConfig;

