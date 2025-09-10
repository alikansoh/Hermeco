import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painting & Decorating Services London | Hermeco Professional Painters",
  description:
    "Hermeco offers expert painting and decorating services in London, including interior and exterior painting, wallpapering, and decorative finishes. Transform your home today.",
  keywords: [
    "Hermeco Painting Services",
    "Painting London",
    "Decorating Services London",
    "Interior Painting London",
    "Exterior Painting London",
    "Wallpapering Services London",
    "Professional Painters UK",
    "Home Decoration London",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Painting & Decorating Services London | Hermeco Professional Painters",
    description:
      "Hermeco offers expert painting and decorating services in London, including interior and exterior painting, wallpapering, and decorative finishes. Transform your home today.",
    url: "https://hermeco.co.uk/services/painting",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Painting & Decorating Services London | Hermeco Professional Painters",
    description:
      "Hermeco offers expert painting and decorating services in London, including interior and exterior painting, wallpapering, and decorative finishes. Transform your home today.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

function ContentWrapper() {
  return <Content />;
}

export default ContentWrapper;
