import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "../components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://krishnaboreda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krishna Boreda — Engineer · Problem solver · Product builder",
    template: "%s · Krishna Boreda",
  },
  description: "I build software with a bias toward the user. Years on the front lines of production support have made me a sharper engineer — I design knowing exactly how things fail, who it hurts, and what good looks like on the other side.",
  keywords: ["Krishna Boreda", "Software Engineer", "Support Engineer", "Full Stack Developer", "Next.js", "React", "Sprinto", "Portfolio"],
  authors: [{ name: "Krishna Boreda" }],
  creator: "Krishna Boreda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Krishna Boreda",
    title: "Krishna Boreda — Engineer · Problem solver · Product builder",
    description: "I build software with a bias toward the user. Years on the front lines of production support have made me a sharper engineer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krishna Boreda — Engineer, Problem solver, Product builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Boreda — Engineer · Problem solver · Product builder",
    description: "I build software with a bias toward the user.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-neutral-950 text-neutral-200 antialiased font-sans selection:bg-indigo-500/30 selection:text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}