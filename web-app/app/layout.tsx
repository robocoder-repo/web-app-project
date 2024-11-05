import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Web App",
  description: "A modern web application built with Next.js",
  keywords: ["Next.js", "React", "Web Development"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Next.js Web App",
    description: "A modern web application built with Next.js",
    url: "https://your-website.com",
    siteName: "Next.js Web App",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Web App",
    description: "A modern web application built with Next.js",
    images: ["https://your-website.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
