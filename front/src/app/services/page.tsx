import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hermeco Services | Home Renovation, Electrical, Plumbing & More in London",
  description:
    "Discover Hermeco's professional home services in London, including renovations, remodeling, electrical, plumbing, painting, gardening, and landscaping. Quality workmanship you can trust.",
  keywords: [
    "Hermeco Services",
    "Home Renovation London",
    "Remodeling Services London",
    "Electrical Services London",
    "Plumbing Services London",
    "Painting and Decorating London",
    "Gardening and Landscaping London",
    "Trusted Home Services London",
    "Construction Experts London",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Hermeco Services | Home Renovation, Electrical, Plumbing & More in London",
    description:
      "Discover Hermeco's professional home services in London, including renovations, remodeling, electrical, plumbing, painting, gardening, and landscaping.",
    url: "https://hermeco.co.uk/services",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Hermeco Services | Home Renovation, Electrical, Plumbing & More in London",
    description:
      "Discover Hermeco's professional home services in London, including renovations, remodeling, electrical, plumbing, painting, gardening, and landscaping.",
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
