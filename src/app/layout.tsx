import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "REDMOND Tax & Associated Advocates - Your Strategic Partner in Tax Management and Legal Services",
  description: "REDMOND Tax provides specialized tax advisory, compliance, and dispute resolution services. REDMOND Associated Advocates offers comprehensive legal services including litigation, commercial law, and consultancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Loader />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
