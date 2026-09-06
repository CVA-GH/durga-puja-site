# 🌸 Durga Puja Committee — Headless CMS Setup Guide

This guide explains how committee members can use the free **Sanity.io** dashboard to upload Puja pictures, update ritual timings, and edit committee announcements without touching code.

---

## 🌟 Why Sanity.io for the Committee?

- **100% Free Forever**: Generous free tier with plenty of storage, assets, and bandwidth for festival websites.
- **Mobile Friendly**: Committee members can upload photos from their phones directly while standing at the pandal.
- **Smart Image Focal Points**: Crop pictures visually so Maa Durga's face or pandal details are never cut off on mobile screens.
- **Instant Live Publishing**: Edit a timing (e.g. Kumari Puja or Sandhi Puja) and hit "Publish" — changes appear immediately on the website.

---

## 🚀 Quick 3-Minute Setup

### Step 1: Create a Free Sanity Account
1. Visit [https://www.sanity.io](https://www.sanity.io) and click **"Start building"**.
2. Sign in with Google, GitHub, or Email.
3. Click **"Create Project"** and name it (e.g., `ballygunge-durgotsav`).

### Step 2: Grab Your Project ID
1. On your Sanity project dashboard, copy your **Project ID** (a random 8-character string, like `x9ab12cd`).
2. The dataset is already set to `production`.

### Step 3: Add to `.env.local`
In the website directory, create a `.env.local` file (or duplicate `.env.example`):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=9iqty92w
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Step 4: Add CORS Origin
In your Sanity project settings at [sanity.io/manage](https://www.sanity.io/manage):
1. Go to **API** > **CORS Origins**.
2. Click **Add CORS origin**.
3. Add `http://localhost:3000` (and your deployed domain, e.g. `https://your-puja-site.vercel.app`).
4. Check **Allow credentials** and Save.

---

## 👥 Inviting Committee Members
1. In [sanity.io/manage](https://www.sanity.io/manage), click on your project.
2. Navigate to **Members** > **Invite Member**.
3. Enter the email address of committee secretaries, photographers, or media volunteers.
4. Assign them the **Editor** role so they can upload photos and edit timings.

---

## 📸 How to Upload Photos & Edit Timings in the Studio

### Editing Schedule Timings:
1. Open the Sanity Studio dashboard.
2. Click on **"Puja Schedule (পূজা নির্ঘণ্ট)"**.
3. Select any day (e.g. **Maha Ashtami**).
4. Update ritual times, e.g. change Sandhi Puja timing or add an announcement.
5. Click **"Publish"** (green button at bottom right).

### Uploading Photos:
1. Click on **"Photo Gallery (ছবি ও স্মৃতি)"**.
2. Click **"Create"**.
3. Title your photo and upload the high-res file.
4. Select category:
   - *Pratima / Idol (প্রতিমা)*
   - *Pandal Architecture (মণ্ডপ সজ্জা)*
   - *Rituals & Dhunuchi (পূজা ও ধুনুচি নাচ)*
   - *Cultural Nights (সাংস্কৃতিক সন্ধ্যা)*
   - *Sindoor Khela & Baran (সিঁদুর খেলা)*
5. Adjust the hotspot circle to keep the focal area centered on mobile phones.
6. Add the photographer's name and click **"Publish"**.

---

## 🛡️ Zero-Config Fallback Mode
If Sanity is not yet configured, the website automatically displays rich, pre-packaged Kolkata Durga Puja schedules, authentic timings, and curated festive images. Nothing will break!

