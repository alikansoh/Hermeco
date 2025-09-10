import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Services London | Hermeco Professional Landscaping",
  description:
    "Hermeco provides expert landscaping services in London, including garden design, patio installation, hardscaping, planting, and maintenance. Transform your outdoor space today.",
  keywords: [
    "Hermeco Landscaping Services",
    "Landscaping London",
    "Garden Design London",
    "Patio Installation London",
    "Hardscaping Services London",
    "Planting Services London",
    "Garden Maintenance London",
    "Professional Landscapers UK",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Landscaping Services London | Hermeco Professional Landscaping",
    description:
      "Hermeco provides expert landscaping services in London, including garden design, patio installation, hardscaping, planting, and maintenance. Transform your outdoor space today.",
    url: "https://hermeco.co.uk/services/landscaping",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Landscaping Services London | Hermeco Professional Landscaping",
    description:
      "Hermeco provides expert landscaping services in London, including garden design, patio installation, hardscaping, planting, and maintenance. Transform your outdoor space today.",
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
