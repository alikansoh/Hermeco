import React from "react";
import Content from "./content"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hermeco | Trusted Home Renovation & Construction Experts in London",
  description:
    "Learn more about Hermeco, your trusted home renovation, remodeling, electrical, plumbing, painting, and gardening experts in London. Discover our mission, values, and experienced team.",
  keywords: [
    "Hermeco",
    "About Hermeco",
    "Home Renovation London",
    "Remodeling Services London",
    "Trusted Construction Experts",
    "London Home Services",
    "Electrical, Plumbing, Painting Services",
    "Gardening and Landscaping Experts",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "About Hermeco | Trusted Home Renovation & Construction Experts in London",
    description:
      "Learn more about Hermeco, your trusted home renovation, remodeling, electrical, plumbing, painting, and gardening experts in London.",
    url: "https://hermeco.co.uk/about",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "About Hermeco | Trusted Home Renovation & Construction Experts in London",
    description:
      "Learn more about Hermeco, your trusted home renovation, remodeling, electrical, plumbing, painting, and gardening experts in London.",
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
