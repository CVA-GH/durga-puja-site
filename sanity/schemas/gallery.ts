// Sanity CMS Schema for Durga Puja Photo Gallery
// Allows committee members to easily upload and categorize high-res photos

type ValidationRule = {
  required: () => ValidationRule;
  [key: string]: unknown;
};

export const gallerySchema = {
  name: "pujaGallery",
  title: "Photo Gallery (ছবি ও স্মৃতি)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Photo Title (English)",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      description: "e.g. 'Maha Ashtami Sandhya Aarti' or 'Terracotta Pandal Entrance'",
    },
    {
      name: "bengaliTitle",
      title: "Photo Title (Bengali)",
      type: "string",
      description: "e.g. 'মহা অষ্টমী আরতি' বা 'প্রতিমা দর্শন'",
    },
    {
      name: "image",
      title: "Photo Upload",
      type: "image",
      options: {
        hotspot: true, // Enables visual focal point selection for smart mobile cropping
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category / Album",
      type: "string",
      options: {
        list: [
          { title: "Pratima / Idol (প্রতিমা)", value: "idol" },
          { title: "Pandal Architecture (মণ্ডপ সজ্জা)", value: "pandal" },
          { title: "Rituals & Dhunuchi (পূজা ও ধুনুচি নাচ)", value: "rituals" },
          { title: "Cultural Nights (সাংস্কৃতিক সন্ধ্যা)", value: "cultural" },
          { title: "Sindoor Khela & Baran (সিঁদুর খেলা)", value: "sindoor" },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption / Story",
      type: "text",
      rows: 2,
    },
    {
      name: "photographer",
      title: "Photographer Credit",
      type: "string",
      description: "Name of the committee volunteer or professional photographer",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      initialValue: 2026,
    },
    {
      name: "isFeatured",
      title: "Feature on Homepage Highlight",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
};

