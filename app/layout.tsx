import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "অন্তস্প্রিহা আবাসিক দুর্গোৎসব ২০২৬ | Antaspriha Abashik Durga Puja Committee",
  description: "Official landing page of Antaspriha Abashik Durgotsav, Kolkata. Explore the complete Puja schedule from Maha Panchami to Vijaya Dashami, committee details, theme highlights, and photo gallery. শুভ শারদীয়া!",
  keywords: [
    "Durga Puja Kolkata",
    "Durga Puja Schedule 2026",
    "Antaspriha Abashik Durga Puja",
    "Sandhi Puja Timings",
    "Kumari Puja",
    "Sindoor Khela",
    "Kolkata Pandal Hopping",
    "শুভ শারদীয়া",
    "দুর্গাপূজা নির্ঘণ্ট",
    "অন্তস্প্রিহা আবাসিক"
  ],
  authors: [{ name: "Antaspriha Abashik Durga Puja Committee" }],
  openGraph: {
    title: "অন্তস্প্রিহা আবাসিক দুর্গোৎসব ২০২৬ | Antaspriha Abashik Durga Puja Committee",
    description: "Official Puja schedule, live timings, committee details, and photo gallery. Celebrating 75 years of heritage and devotion in Kolkata.",
    type: "website",
    locale: "bn_IN",
  },
  icons: {
    icon: "/Logo.jpg",
    apple: "/Logo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffcf7] text-[#1f1610]">{children}</body>
    </html>
  );
}
