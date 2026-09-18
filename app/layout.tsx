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
  title: "Sparsh Cultual Society (Bengali) ২০২৬ | Sparsh Cultual Society 2026",
  description: "Official landing page of Sparsh Cultual Society, Kolkata. Explore the complete Puja schedule from Maha Panchami to Vijaya Dashami, committee details, theme highlights, and photo gallery. শুভ শারদীয়া!",
  keywords: [
    "Durga Puja Kolkata",
    "Durga Puja Schedule 2026",
    "Sparsh Cultual Society 2026",
    "Sandhi Puja Timings",
    "Kumari Puja",
    "Sindoor Khela",
    "Kolkata Pandal Hopping",
    "শুভ শারদীয়া",
    "দুর্গাপূজা নির্ঘণ্ট",
    "অন্তস্প্রিহা আবাসিক"
  ],
  authors: [{ name: "Sparsh Cultual Society" }],
  openGraph: {
    title: "Sparsh Cultual Society (Bengali) ২০২৬ | Sparsh Cultual Society 2026",
    description: "Official Puja schedule, live timings, committee details, and photo gallery. Celebrating 75 years of heritage and devotion in Kolkata.",
    type: "website",
    locale: "bn_IN",
  },
  icons: {
    icon: "/Sparsh-logo.jpg",
    apple: "/Sparsh-logo.jpg",
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
