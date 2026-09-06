// Sanity CMS Schema for Durga Puja Schedule Timeline
// Enables committee members to edit timings, rituals, and highlights without touching code

type ValidationRule = {
  required: () => ValidationRule;
  [key: string]: unknown;
};

export const scheduleSchema = {
  name: "pujaSchedule",
  title: "Puja Schedule (পূজা নির্ঘণ্ট)",
  type: "document",
  fields: [
    {
      name: "dayId",
      title: "Day Identifier",
      type: "string",
      description: "Unique slug e.g. panchami, sasthi, saptami, ashtami, navami, dashami",
      validation: (Rule: ValidationRule) => Rule.required(),
      options: {
        list: [
          { title: "Maha Panchami (মহা পঞ্চমী)", value: "panchami" },
          { title: "Maha Sasthi (মহা ষষ্ঠী)", value: "sasthi" },
          { title: "Maha Saptami (মহা সপ্তমী)", value: "saptami" },
          { title: "Maha Ashtami (মহা অষ্টমী)", value: "ashtami" },
          { title: "Maha Navami (মহা নবমী)", value: "navami" },
          { title: "Vijaya Dashami (বিজয়া দশমী)", value: "dashami" },
        ],
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Sequence order (1 for Panchami ... 6 for Dashami)",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "dayName",
      title: "Day Title (English)",
      type: "string",
      description: "e.g. Maha Ashtami",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "bengaliName",
      title: "Day Title (Bengali)",
      type: "string",
      description: "e.g. মহা অষ্টমী",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "date",
      title: "English Date",
      type: "string",
      description: "e.g. 20 October 2026",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "bengaliDate",
      title: "Bengali Calendar Date",
      type: "string",
      description: "e.g. ৩ কার্তিক ১৪৩৩",
    },
    {
      name: "tithi",
      title: "Tithi Details",
      type: "string",
      description: "e.g. শুক্লা মহাষ্টমী তিথি",
    },
    {
      name: "summary",
      title: "Day Summary / Key Highlights",
      type: "text",
      rows: 3,
      description: "Brief description of the day's spiritual and cultural significance",
    },
    {
      name: "events",
      title: "Rituals & Timings (পূজা সূচি)",
      type: "array",
      of: [
        {
          type: "object",
          name: "scheduleEvent",
          title: "Schedule Event",
          fields: [
            {
              name: "time",
              title: "Time / Duration",
              type: "string",
              description: "e.g. 06:30 AM or 11:15 AM - 12:03 PM",
              validation: (Rule: ValidationRule) => Rule.required(),
            },
            {
              name: "title",
              title: "Event / Ritual Title (English)",
              type: "string",
              description: "e.g. Kumari Puja or Sandhi Puja",
              validation: (Rule: ValidationRule) => Rule.required(),
            },
            {
              name: "bengaliTitle",
              title: "Event / Ritual Title (Bengali)",
              type: "string",
              description: "e.g. কুমারী পূজা বা সন্ধিপূজা",
            },
            {
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Ritual / Puja (পূজা বিধি)", value: "ritual" },
                  { title: "Pushpanjali (পুষ্পাঞ্জলি)", value: "pushpanjali" },
                  { title: "Bhog / Prasad (ভোগ বিতরণ)", value: "bhog" },
                  { title: "Aarti (সন্ধ্যা আরতি)", value: "aarti" },
                  { title: "Cultural Program (সাংস্কৃতিক অনুষ্ঠান)", value: "cultural" },
                  { title: "Sindoor Khela & Baran (সিঁদুর খেলা)", value: "sindoor" },
                ],
              },
              validation: (Rule: ValidationRule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description & Instructions for Devotees",
              type: "text",
              rows: 2,
              description: "Important instructions, e.g., 'Devotees are requested to arrive before 10:30 AM for Pushpanjali'",
            },
            {
              name: "isHighlight",
              title: "Mark as Special Highlight (সন্ধিপূজা / কুমারী পূজা)",
              type: "boolean",
              description: "Renders in glowing festive gold badge on the landing page",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "dayName",
      subtitle: "date",
    },
  },
};

