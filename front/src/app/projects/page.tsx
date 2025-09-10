import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hermeco Projects | Completed Home Renovation & Construction Work in London",
  description:
    "Explore Hermeco's portfolio of completed home renovation, remodeling, electrical, plumbing, painting, and gardening projects in London. See our quality craftsmanship in action.",
  keywords: [
    "Hermeco Projects",
    "Home Renovation Portfolio London",
    "Remodeling Projects London",
    "Electrical Work London",
    "Plumbing Projects London",
    "Painting and Decorating Portfolio",
    "Gardening and Landscaping Projects",
    "Construction Projects UK",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Hermeco Projects | Completed Home Renovation & Construction Work in London",
    description:
      "Explore Hermeco's portfolio of completed home renovation, remodeling, electrical, plumbing, painting, and gardening projects in London.",
    url: "https://hermeco.co.uk/projects",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Hermeco Projects | Completed Home Renovation & Construction Work in London",
    description:
      "Explore Hermeco's portfolio of completed home renovation, remodeling, electrical, plumbing, painting, and gardening projects in London.",
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
