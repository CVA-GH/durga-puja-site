// Authentic fallback mock data for Kolkata Durga Puja Committee
// Used seamlessly when Sanity credentials are not configured or for offline preview

export interface ScheduleEvent {
  time: string;
  title: string;
  bengaliTitle?: string;
  category: "ritual" | "pushpanjali" | "bhog" | "aarti" | "cultural" | "sindoor";
  description?: string;
  isHighlight?: boolean;
}

export interface DaySchedule {
  _id: string;
  dayId: string;
  order: number;
  dayName: string;
  bengaliName: string;
  date: string;
  bengaliDate: string;
  tithi: string;
  summary: string;
  events: ScheduleEvent[];
}

export interface GalleryItem {
  _id: string;
  title: string;
  bengaliTitle?: string;
  image: string;
  category: "idol" | "pandal" | "rituals" | "cultural" | "sindoor";
  caption?: string;
  photographer?: string;
  year?: number;
  isFeatured?: boolean;
}

export interface CommitteeMember {
  _id: string;
  name: string;
  bengaliName: string;
  designation: string;
  roleCategory: "executive" | "cultural" | "logistics" | "volunteers";
  photo?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  message?: string;
  order: number;
}

export interface SiteSettings {
  committeeName: string;
  bengaliCommitteeName: string;
  yearEdition: string;
  themeTitle: string;
  bengaliThemeTitle: string;
  themeDescription: string;
  artisanSculptor: string;
  pandalArchitect: string;
  address: string;
  nearestMetro: string;
  emergencyHelpline: string;
}

export const defaultSiteSettings: SiteSettings = {
  committeeName: "Antaspriha Abashik Durga Puja Committee",
  bengaliCommitteeName: "অন্তস্প্রিহা আবাসিক দুর্গোৎসব সমিতি",
  yearEdition: "75th Year Celebration (প্লাটিনাম জুবিলি)",
  themeTitle: "Matir Taane — Ode to Bengal's Folk & Terracotta Heritage",
  bengaliThemeTitle: "মাটির টানে — বাংলার লোকসংস্কৃতি ও পোড়ামাটির মেলবন্ধন",
  themeDescription:
    "For our landmark 75th year, the pandal architecture recreates the timeless terracotta temples of Bishnupur, Bankura, sculpted entirely with eco-friendly clay, bamboo, and terracotta plaques. Devi Durga is consecrated in traditional 'Daker Saaj' crafted by fifth-generation Kumartuli artisans with pure natural pigments.",
  artisanSculptor: "Shri Sanatan Paul & Kumartuli Master Craftsmen",
  pandalArchitect: "Dipak Ghosh & Bengal Guild of Artisans",
  address: "Antaspriha Housing Complex & Grounds, Southern Avenue, Kolkata - 700029",
  nearestMetro: "Kalighat Metro Station (Gate No. 2) / Rabindra Sarobar (8 mins walk)",
  emergencyHelpline: "+91 98300 98765 / 033 2464 1951",
};

export const defaultSchedule: DaySchedule[] = [
  {
    _id: "sched-1",
    dayId: "panchami",
    order: 1,
    dayName: "Maha Panchami",
    bengaliName: "মহা পঞ্চমী",
    date: "17 October 2026, Saturday",
    bengaliDate: "৩০ আশ্বিন ১৪৩৩",
    tithi: "শুক্লা পঞ্চমী তিথি",
    summary:
      "The auspicious prelude to Sharodiya Durga Puja. Inauguration of our 75th year commemorative pandal, Anandamela traditional food festival, and illumination lighting ceremony.",
    events: [
      {
        time: "05:00 PM",
        title: "Grand Pandal Inauguration & Dhaak Utsav",
        bengaliTitle: "মণ্ডপ উদ্বোধন ও ঢাক উৎসব",
        category: "cultural",
        description: "Inaugurated by esteemed dignitaries and 75 dhakis performing in unison.",
        isHighlight: true,
      },
      {
        time: "06:30 PM",
        title: "Anandamela (Community Culinary Fair)",
        bengaliTitle: "আনন্দমেলা (গৃহিণীদের হাতের তৈরি ঐতিহ্যবাহী মিষ্টি ও পদ)",
        category: "cultural",
        description: "Neighborhood families showcase authentic home-cooked delicacies, patishapta, and snacks.",
      },
      {
        time: "08:00 PM",
        title: "Aagomoni Gaan (Musical Welcoming of Maa Durga)",
        bengaliTitle: "আগমনী গান ও ভক্তিমূলক সঙ্গীতানুষ্ঠান",
        category: "cultural",
        description: "Classical Agomoni recital by Antaspriha Cultural Troupe.",
      },
    ],
  },
  {
    _id: "sched-2",
    dayId: "sasthi",
    order: 2,
    dayName: "Maha Sasthi",
    bengaliName: "মহা ষষ্ঠী",
    date: "18 October 2026, Sunday",
    bengaliDate: "৩১ আশ্বিন ১৪৩৩",
    tithi: "শুক্লা ষষ্ঠী তিথি",
    summary:
      "Awakening of the Goddess (Bodhon), welcoming rites under the Bilva tree (Amontron), and consecration (Adhibas). Devotees gather for the divine unveiling of Devi Durga.",
    events: [
      {
        time: "08:30 AM",
        title: "Bilva Shasthi Kalparambha",
        bengaliTitle: "কল্পারম্ভ ও ষষ্ঠী বিহিত পূজা",
        category: "ritual",
        description: "Commencement of vows and preliminary sanctification rites by our head priest.",
      },
      {
        time: "06:00 PM",
        title: "Sri Sri Devi Bodhon & Amontron",
        bengaliTitle: "শ্রী শ্রী দেবীর বোধন ও আমন্ত্রণ",
        category: "ritual",
        description: "Awakening of Goddess Durga under the sacred Bilva tree branch.",
        isHighlight: true,
      },
      {
        time: "07:30 PM",
        title: "Devi Adhibas Rites & Chokkhudan",
        bengaliTitle: "দেবী অধিবাস ও চক্ষুদান দর্শন",
        category: "ritual",
        description: "Consecration with 28 sacred substances and rhythmic dhaak roll.",
      },
      {
        time: "08:45 PM",
        title: "Sandhya Aarti & Dhaak Performance",
        bengaliTitle: "সান্ধ্য আরতি ও ঢাক বাদন",
        category: "aarti",
        description: "Evening oil-lamp Aarti open to all devotees.",
      },
    ],
  },
  {
    _id: "sched-3",
    dayId: "saptami",
    order: 3,
    dayName: "Maha Saptami",
    bengaliName: "মহা সপ্তমী",
    date: "19 October 2026, Monday",
    bengaliDate: "১ কার্তিক ১৪৩৩",
    tithi: "শুক্লা সপ্তমী তিথি",
    summary:
      "Consecration of the Nabapatrika (Kola Bou) at the holy river ghat, Pran Pratistha, morning Pushpanjali, and the beginning of the major three-day puja rituals.",
    events: [
      {
        time: "06:00 AM",
        title: "Nabapatrika Snan (Kola Bou Snan at Ghat)",
        bengaliTitle: "নবপত্রিকা স্নান ও ঘট স্থাপন",
        category: "ritual",
        description: "Solemn procession with nine sacred plants to Babu Ghat for holy bathing.",
        isHighlight: true,
      },
      {
        time: "08:30 AM",
        title: "Pran Pratistha & Saptami Vihita Puja",
        bengaliTitle: "প্রাণ প্রতিষ্ঠা ও সপ্তমী বিহিত পূজা",
        category: "ritual",
        description: "Infusing the divine presence into the clay murti.",
      },
      {
        time: "10:30 AM",
        title: "Maha Saptami Pushpanjali (Batch 1 & 2)",
        bengaliTitle: "মহা সপ্তমী পুষ্পাঞ্জলি",
        category: "pushpanjali",
        description: "Devotees offer fresh bel leaves and flowers. Flowers provided at pandal.",
      },
      {
        time: "01:00 PM",
        title: "Bhog Distribution & Anna Prasad",
        bengaliTitle: "ভোগ বিতরণ ও প্রসাদ গ্রহণ",
        category: "bhog",
        description: "Traditional Khichuri, Labra, Beguni, and Payesh served to devotees.",
      },
      {
        time: "07:00 PM",
        title: "Sandhya Aarti & Pancha Pradip Darshan",
        bengaliTitle: "সন্ধ্যা আরতি ও পঞ্চপ্রদীপ দর্শন",
        category: "aarti",
        description: "Mesmerizing multi-tiered brass lamp aarti accompanied by kanshi and shankha.",
      },
      {
        time: "08:30 PM",
        title: "Folk Dance & Rabindrasangeet Night",
        bengaliTitle: "বাউল সঙ্গীত ও রবীন্দ্র নৃত্যনাট্য",
        category: "cultural",
        description: "Cultural presentation celebrating Bengal's rural performing arts.",
      },
    ],
  },
  {
    _id: "sched-4",
    dayId: "ashtami",
    order: 4,
    dayName: "Maha Ashtami",
    bengaliName: "মহা অষ্টমী",
    date: "20 October 2026, Tuesday",
    bengaliDate: "২ কার্তিক ১৪৩৩",
    tithi: "শুক্লা মহাষ্টমী তিথি",
    summary:
      "The pinnacle of Durga Puja: sacred Kumari Puja, divine Maha Ashtami Pushpanjali, and the mystical Sandhi Puja uniting Ashtami and Navami with 108 blue lotuses and 108 earthen diyas.",
    events: [
      {
        time: "07:30 AM",
        title: "Maha Ashtami Vihita Puja",
        bengaliTitle: "মহাষ্টমী বিহিত পূজা ও চণ্ডীপাঠ",
        category: "ritual",
        description: "Chanting of Sri Sri Chandi with 108 sacred dharba grass offerings.",
      },
      {
        time: "09:30 AM - 11:00 AM",
        title: "Maha Ashtami Pushpanjali (Batches 1 to 5)",
        bengaliTitle: "মহাষ্টমীর পুণ্য পুষ্পাঞ্জলি (সকলের জন্য)",
        category: "pushpanjali",
        description:
          "Devotees observing fast are requested to assemble by 09:15 AM. Special queue for seniors and children.",
        isHighlight: true,
      },
      {
        time: "11:30 AM",
        title: "Kumari Puja (Worship of the Maiden Goddess)",
        bengaliTitle: "শ্রী শ্রী কুমারী পূজা",
        category: "ritual",
        description:
          "Worship of a young maiden as the living incarnation of Mahamaya, following Swami Vivekananda's Belur Math tradition.",
        isHighlight: true,
      },
      {
        time: "01:30 PM",
        title: "Special Ashtami Bhog Distribution",
        bengaliTitle: "অষ্টমী মহাপ্রসাদ ও ভোগ বিতরণ",
        category: "bhog",
        description: "Bhog distribution for over 2,500 registered devotees.",
      },
      {
        time: "05:48 PM - 06:36 PM",
        title: "Maha Sandhi Puja (সন্ধিপূজা)",
        bengaliTitle: "মহাপুণ্য সন্ধিপূজা (১০৮ পদ্ম ও ১০৮ মাটির প্রদীপ প্রজ্বলন)",
        category: "ritual",
        description:
          "The supreme moment marking Devi Durga slaying Chanda & Munda as Devi Chamunda. Exactly 108 lotuses and 108 oil lamps lit amidst resounding conch and dhaak.",
        isHighlight: true,
      },
      {
        time: "07:45 PM",
        title: "Grand Dhunuchi Naach Competition",
        bengaliTitle: "ঐতিহ্যবাহী ধুনুচি নাচ প্রতিযোগিতা",
        category: "cultural",
        description: "Inter-neighborhood incense clay burner dance with live dhak rhythms. Trophies for top performers.",
        isHighlight: true,
      },
    ],
  },
  {
    _id: "sched-5",
    dayId: "navami",
    order: 5,
    dayName: "Maha Navami",
    bengaliName: "মহা নবমী",
    date: "21 October 2026, Wednesday",
    bengaliDate: "৩ কার্তিক ১৪৩৩",
    tithi: "শুক্লা নবমী তিথি",
    summary:
      "Celebration of the vanquishing of Mahishasura. Maha Homa (sacred fire sacrifice), afternoon community Mahabhog, and a gala cultural evening with renowned Bengali artistes.",
    events: [
      {
        time: "08:00 AM",
        title: "Maha Navami Vihita Puja",
        bengaliTitle: "মহানন্দা নবমী পূজা",
        category: "ritual",
        description: "Navami rituals honoring the victory of good over darkness.",
      },
      {
        time: "10:30 AM",
        title: "Maha Yajna & Homa (Sacred Fire Sacrifice)",
        bengaliTitle: "মহা যজ্ঞ ও পূর্ণাহুতি",
        category: "ritual",
        description: "Chanting of Vedic mantras with 108 bel fruit offerings into the consecrated fire.",
        isHighlight: true,
      },
      {
        time: "11:30 AM",
        title: "Maha Navami Pushpanjali",
        bengaliTitle: "নবমী পুষ্পাঞ্জলি",
        category: "pushpanjali",
        description: "Concluding floral tribute to Mother Durga.",
      },
      {
        time: "01:00 PM",
        title: "Maha Bhog & Community Feast",
        bengaliTitle: "নবমীর মহাপ্রসাদ ও সর্বজনীন ভোজন",
        category: "bhog",
        description: "Ghee rice, traditional Chhanar Dalna, Labra, and Chanar Payesh.",
      },
      {
        time: "07:00 PM",
        title: "Maha Sandhya Aarti & Balidan Rites",
        bengaliTitle: "সন্ধ্যা আরতি ও প্রতীকী ফল বলিদান",
        category: "aarti",
        description: "Sugarcane and ash gourd symbolic vegetarian offering.",
      },
      {
        time: "08:30 PM",
        title: "Star Musical Concert (বাংলা গানের সুরসন্ধ্যা)",
        bengaliTitle: "গীতিমালিকা — জনপ্রিয় বাংলা ব্যান্ড ও সঙ্গীতশিল্পীদের আসর",
        category: "cultural",
        description: "Live musical performance featuring celebrated Kolkata artists.",
      },
    ],
  },
  {
    _id: "sched-6",
    dayId: "dashami",
    order: 6,
    dayName: "Vijaya Dashami",
    bengaliName: "বিজয়া দশমী",
    date: "22 October 2026, Thursday",
    bengaliDate: "৪ কার্তিক ১৪৩৩",
    tithi: "শুক্লা দশমী তিথি",
    summary:
      "Farewell to Uma as she returns to Mount Kailash. Aparajita Puja, emotional Devi Baran, vibrant Sindoor Khela, Ghat Bishorjon procession to the Ganges, and sweet Shubho Bijoya embraces.",
    events: [
      {
        time: "08:30 AM",
        title: "Dashami Vihita Puja & Darpan Bishorjon",
        bengaliTitle: "দশমী বিহিত পূজা ও দর্পণ বিসর্জন",
        category: "ritual",
        description:
          "Symbolic immersion of Devi's reflection in a sacred brass mirror (Darpan) immersed in water.",
        isHighlight: true,
      },
      {
        time: "10:30 AM - 01:30 PM",
        title: "Devi Baran & Sindoor Khela",
        bengaliTitle: "দেবী বরণ ও সধবাদের সিঁদুর খেলা",
        category: "sindoor",
        description:
          "Married women offer betel leaves and sweets to Maa Durga, followed by joyous smearing of vermilion (Sindoor Khela) wishing eternal prosperity.",
        isHighlight: true,
      },
      {
        time: "02:00 PM",
        title: "Shanti Jal & Aparajita Puja",
        bengaliTitle: "শান্তিজল বিতরণ ও অপরাজিতা পূজা",
        category: "ritual",
        description: "Devotees receive blessed peace water for health and well-being.",
      },
      {
        time: "04:30 PM",
        title: "Bishorjon Shobhayatra (Immersion Procession)",
        bengaliTitle: "বিসর্জন শোভাযাত্রা (বাবুঘাট অভিমুখে)",
        category: "ritual",
        description:
          "Joyous carnival procession with traditional dhaak, lights, and conch shells towards Babughat on the Hooghly River.",
        isHighlight: true,
      },
      {
        time: "07:30 PM",
        title: "Shubho Bijoya Exchange & Sweet Distribution",
        bengaliTitle: "শুভ বিজয়ার আলিঙ্গন, মিষ্টিমুখ ও প্রীতিভোজ",
        category: "cultural",
        description:
          "Devotees touch elders' feet for blessings, embrace peers (Kolakoli), and savor traditional Kolkata Rasogolla and Narkel Naru.",
      },
    ],
  },
];

export const defaultGallery: GalleryItem[] = [
  {
    _id: "gal-1",
    title: "Maa Durga in Traditional Daker Saaj",
    bengaliTitle: "শোলার ডাকের সাজে চিন্ময়ী দশভুজা",
    image: "https://images.unsplash.com/photo-1601616631868-6d2c6c3df222?auto=format&fit=crop&w=1200&q=80",
    category: "idol",
    caption: "Handcrafted with clay from Kumartuli and adorned in antique silver and white foil shola work.",
    photographer: "Sourav Ganguly (Committee Media Wing)",
    year: 2026,
    isFeatured: true,
  },
  {
    _id: "gal-2",
    title: "Terracotta Pandal Facade by Night",
    bengaliTitle: "বিষ্ণুপুরী টেরাকোটা স্থাপত্যে নির্মিত অপূর্ব মণ্ডপ",
    image: "https://images.unsplash.com/photo-1596405344148-2d0df560377d?auto=format&fit=crop&w=1200&q=80",
    category: "pandal",
    caption: "Illuminated with warm golden fairy lamps resembling classical Bengal temple lanterns.",
    photographer: "Anirban Sen",
    year: 2026,
    isFeatured: true,
  },
  {
    _id: "gal-3",
    title: "Maha Ashtami Sandhi Puja 108 Lamps",
    bengaliTitle: "১০৮ প্রদীপের পবিত্র জ্যোতিতে সন্ধিপূজা",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1200&q=80",
    category: "rituals",
    caption: "The mystical 48-minute transition from Ashtami to Navami, lit by 108 handmade earthen diyas.",
    photographer: "Debojyoti Roy",
    year: 2026,
    isFeatured: true,
  },
  {
    _id: "gal-4",
    title: "Ecstatic Dhunuchi Naach at Evening Aarti",
    bengaliTitle: "ধুনুচি নাচে মেতে উঠেছে মণ্ডপ প্রাঙ্গণ",
    image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
    category: "rituals",
    caption: "Youth and elders dancing in rhythmic trance with smoking clay incense burners.",
    photographer: "Priyanka Mitra",
    year: 2026,
  },
  {
    _id: "gal-5",
    title: "Bijoya Dashami Sindoor Khela",
    bengaliTitle: "বিজয়া দশমীর আনন্দাশ্রু ও সিঁদুর খেলা",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    category: "sindoor",
    caption: "Married women celebrating with vermilion, wishing each other joy and marital bliss.",
    photographer: "Subhajit Chatterjee",
    year: 2026,
    isFeatured: true,
  },
  {
    _id: "gal-6",
    title: "Sacred Kumari Puja Ritual",
    bengaliTitle: "দেবী রূপে কুমারী কন্যার অর্চনা",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
    category: "rituals",
    caption: "Worshipping innocence and pure cosmic feminine divinity on Maha Ashtami morning.",
    photographer: "Debojyoti Roy",
    year: 2026,
  },
  {
    _id: "gal-7",
    title: "Kola Bou (Nabapatrika) Snan Procession",
    bengaliTitle: "সপ্তমীর প্রত্যুষে নবপত্রিকা স্নান যাত্রা",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    category: "rituals",
    caption: "Carrying the draped plantain maiden to the holy river for ritual ablution.",
    photographer: "Anirban Sen",
    year: 2026,
  },
  {
    _id: "gal-8",
    title: "Dhaak Troupe from Murshidabad",
    bengaliTitle: "বাংলার ঐতিহ্যবাহী ঢাকের গমগম আওয়াজ",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    category: "cultural",
    caption: "75 skilled Dhakis bringing alive the unmistakable, hair-raising beats of Sharadotsav.",
    photographer: "Sourav Ganguly",
    year: 2026,
  },
  {
    _id: "gal-9",
    title: "Pandal Ceiling Dokra Art Chandelier",
    bengaliTitle: "বাঁকুড়ার ডোকরা শিল্পে তৈরি সুবিশাল ঝাড়বাতি",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    category: "pandal",
    caption: "Crafted using ancient lost-wax metal casting by tribal artisans of Purulia.",
    photographer: "Priyanka Mitra",
    year: 2026,
  },
  {
    _id: "gal-10",
    title: "Devotees Offering Pushpanjali",
    bengaliTitle: "অঞ্জলির করজোড়ে ভক্তদের প্রার্থনা",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    category: "rituals",
    caption: "Thousands reciting 'Jayanti Mangala Kali Bhadrakali Kapalini' in unified devotion.",
    photographer: "Subhajit Chatterjee",
    year: 2026,
  },
  {
    _id: "gal-11",
    title: "Ghat Bishorjon & Immersion Aarti",
    bengaliTitle: "গঙ্গাবক্ষে মায়ের শেষ বিদায় ও বিসর্জন",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
    category: "sindoor",
    caption: "Bowing goodbye until next year: 'আসছে বছর আবার হবে!'",
    photographer: "Debojyoti Roy",
    year: 2026,
  },
  {
    _id: "gal-12",
    title: "Kumartuli Artisan Giving Finishing Strokes",
    bengaliTitle: "কুমোরটুলিতে দেবীর চক্ষুদান পর্ব",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    category: "idol",
    caption: "Master sculptor painting the divine eyes (Chokkhudan) on Mahalaya dawn.",
    photographer: "Sourav Ganguly",
    year: 2026,
  },
];

export const defaultCommittee: CommitteeMember[] = [
  {
    _id: "comm-1",
    name: "Dr. Alok Nath Banerjee",
    bengaliName: "ডঃ অলোকনাথ ব্যানার্জী",
    designation: "President (সভাপতি)",
    roleCategory: "executive",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98300 11223",
    whatsapp: "+91 98300 11223",
    email: "president@antasprihadurgotsav.org",
    message: "Serving our neighborhood for 75 years is our greatest blessing. Welcome all to our Platinum Jubilee!",
    order: 1,
  },
  {
    _id: "comm-2",
    name: "Sri Debashis Mukherjee",
    bengaliName: "শ্রী দেবাশীষ মুখোপাধ্যায়",
    designation: "General Secretary (সাধারণ সম্পাদক)",
    roleCategory: "executive",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98301 22334",
    whatsapp: "+91 98301 22334",
    email: "secretary@antasprihadurgotsav.org",
    message: "We have prioritized 100% eco-friendly materials and barrier-free access for our senior citizens this year.",
    order: 2,
  },
  {
    _id: "comm-3",
    name: "Smt. Sharmila Roy Chowdhury",
    bengaliName: "শ্রীমতী শর্মিলা রায়চৌধুরী",
    designation: "Cultural Convenor (সাংস্কৃতিক সম্পাদক)",
    roleCategory: "cultural",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98302 33445",
    whatsapp: "+91 98302 33445",
    email: "cultural@antasprihadurgotsav.org",
    message: "From Agomoni songs to Baul sangeet and Dhunuchi competitions, our evenings celebrate Bengal's soul.",
    order: 3,
  },
  {
    _id: "comm-4",
    name: "Sri Anindya Ghosh",
    bengaliName: "শ্রী অনিন্দ্য ঘোষ",
    designation: "Treasurer (কোষাধ্যক্ষ)",
    roleCategory: "executive",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98303 44556",
    whatsapp: "+91 98303 44556",
    email: "accounts@antasprihadurgotsav.org",
    message: "Complete financial transparency with digital donation receipts and audited statements.",
    order: 4,
  },
  {
    _id: "comm-5",
    name: "Sri Sougata Sen",
    bengaliName: "শ্রী সৌগত সেন",
    designation: "Logistics & Pandal Head (মণ্ডপ ও পরিষেবা)",
    roleCategory: "logistics",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98304 55667",
    whatsapp: "+91 98304 55667",
    email: "logistics@antasprihadurgotsav.org",
    message: "24x7 monitoring, emergency power backup, and fire-safe materials ensure peaceful darshan for all.",
    order: 5,
  },
  {
    _id: "comm-6",
    name: "Dr. Ananya Bhattacharya",
    bengaliName: "ডাঃ অনন্যা ভট্টাচার্য",
    designation: "Medical Camp & Accessibility Convenor",
    roleCategory: "volunteers",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    phone: "+91 98305 66778",
    whatsapp: "+91 98305 66778",
    email: "medical@antasprihadurgotsav.org",
    message: "Free 24/7 medical booth, wheelchairs with dedicated volunteers, and an on-duty ambulance.",
    order: 6,
  },
];

