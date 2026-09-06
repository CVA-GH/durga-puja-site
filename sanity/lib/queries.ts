// GROQ queries for fetching Durga Puja data from Sanity.io

export const scheduleQuery = `
  *[_type == "pujaSchedule"] | order(order asc) {
    _id,
    dayId,
    order,
    dayName,
    bengaliName,
    date,
    bengaliDate,
    tithi,
    summary,
    events[] {
      time,
      title,
      bengaliTitle,
      category,
      description,
      isHighlight
    }
  }
`;

export const galleryQuery = `
  *[_type == "pujaGallery"] | order(_createdAt desc) {
    _id,
    title,
    bengaliTitle,
    "image": image.asset->url,
    category,
    caption,
    photographer,
    year,
    isFeatured
  }
`;

export const committeeQuery = `
  *[_type == "pujaCommittee"] | order(order asc) {
    _id,
    name,
    bengaliName,
    designation,
    roleCategory,
    "photo": photo.asset->url,
    phone,
    whatsapp,
    email,
    message,
    order
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    committeeName,
    bengaliCommitteeName,
    yearEdition,
    themeTitle,
    bengaliThemeTitle,
    themeDescription,
    artisanSculptor,
    pandalArchitect,
    address,
    nearestMetro,
    emergencyHelpline
  }
`;

