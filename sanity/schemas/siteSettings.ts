// Sanity CMS Schema for Site Settings & Theme Announcements
export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site & Theme Settings (মণ্ডপ ও তথ্যাদি)",
  type: "document",
  fields: [
    {
      name: "committeeName",
      title: "Committee Name (English)",
      type: "string",
      initialValue: "Antaspriha Abashik Durga Puja Committee",
    },
    {
      name: "bengaliCommitteeName",
      title: "Committee Name (Bengali)",
      type: "string",
      initialValue: "অন্তস্প্রিহা আবাসিক দুর্গোৎসব সমিতি",
    },
    {
      name: "yearEdition",
      title: "Puja Year / Edition",
      type: "string",
      initialValue: "75th Year (প্লাটিনাম জুবিলি)",
    },
    {
      name: "themeTitle",
      title: "Puja Theme Title (English)",
      type: "string",
      initialValue: "Matir Taane (Call of the Soil)",
    },
    {
      name: "bengaliThemeTitle",
      title: "Puja Theme Title (Bengali)",
      type: "string",
      initialValue: "মাটির টানে - বাংলার পোড়ামাটি ও লোকশিল্প",
    },
    {
      name: "themeDescription",
      title: "Theme Concept & Architectural Description",
      type: "text",
      rows: 4,
    },
    {
      name: "artisanSculptor",
      title: "Pratima Sculptor / Artist (শিল্পী)",
      type: "string",
      initialValue: "Sanatan Dinda & Kumartuli Master Artisans",
    },
    {
      name: "pandalArchitect",
      title: "Pandal Architect / Designer",
      type: "string",
      initialValue: "Dipak Ghosh",
    },
    {
      name: "address",
      title: "Pandal Location / Address",
      type: "text",
      rows: 2,
      initialValue: "Antaspriha Housing Complex & Grounds, Near Lake Stadium, Kolkata - 700029",
    },
    {
      name: "nearestMetro",
      title: "Nearest Metro Station",
      type: "string",
      initialValue: "Kalighat Metro / Rabindra Sarobar (Gate 2)",
    },
    {
      name: "emergencyHelpline",
      title: "Emergency Helpline Number",
      type: "string",
      initialValue: "+91 98300 12345 / 033 2464 0000",
    },
  ],
};

