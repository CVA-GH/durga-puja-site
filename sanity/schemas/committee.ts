// Sanity CMS Schema for Durga Puja Committee Members
// Allows committee members to update executive team and emergency contacts

type ValidationRule = {
  required: () => ValidationRule;
  [key: string]: unknown;
};

export const committeeSchema = {
  name: "pujaCommittee",
  title: "Committee Members (পূজা কমিটি সদস্য)",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Member Name (English)",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "bengaliName",
      title: "Member Name (Bengali)",
      type: "string",
      description: "e.g. শ্রী দেবাশীষ মুখোপাধ্যায়",
    },
    {
      name: "designation",
      title: "Designation / Title",
      type: "string",
      description: "e.g. President, General Secretary, Cultural Convenor, Treasurer",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "roleCategory",
      title: "Committee Wing / Department",
      type: "string",
      options: {
        list: [
          { title: "Core Executive (কার্যনির্বাহী)", value: "executive" },
          { title: "Cultural & Events (সাংস্কৃতিক)", value: "cultural" },
          { title: "Pandal & Logistics (মণ্ডপ ও পরিষেবা)", value: "logistics" },
          { title: "Volunteer & Medical (স্বেচ্ছাসেবী ও চিকিৎসা)", value: "volunteers" },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Member Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phone",
      title: "Contact Phone Number",
      type: "string",
      description: "Displayed with quick tap-to-call for visitor assistance",
    },
    {
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "message",
      title: "Brief Message / Welcome Note",
      type: "text",
      rows: 2,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g. 1 for President, 2 for General Secretary)",
      initialValue: 10,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
      media: "photo",
    },
  },
};

