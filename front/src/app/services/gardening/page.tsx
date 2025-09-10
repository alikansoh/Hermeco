import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gardening Services London | Hermeco Professional Garden Care",
  description:
    "Hermeco offers expert gardening services in London, including garden maintenance, planting, pruning, lawn care, and landscaping. Enhance your outdoor space today.",
  keywords: [
    "Hermeco Gardening Services",
    "Gardening London",
    "Garden Maintenance London",
    "Planting Services London",
    "Pruning Services London",
    "Lawn Care London",
    "Professional Gardeners London",
    "Landscaping Services UK",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Gardening Services London | Hermeco Professional Garden Care",
    description:
      "Hermeco offers expert gardening services in London, including garden maintenance, planting, pruning, lawn care, and landscaping. Enhance your outdoor space today.",
    url: "https://hermeco.co.uk/services/gardening",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Gardening Services London | Hermeco Professional Garden Care",
    description:
      "Hermeco offers expert gardening services in London, including garden maintenance, planting, pruning, lawn care, and landscaping. Enhance your outdoor space today.",
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
