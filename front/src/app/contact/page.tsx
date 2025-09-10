import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hermeco | Get in Touch with London Home Renovation Experts",
  description:
    "Contact Hermeco for inquiries about home renovation, remodeling, electrical, plumbing, painting, and gardening services in London. Call, email, or visit us to discuss your project.",
  keywords: [
    "Hermeco",
    "Contact Hermeco",
    "Home Renovation London",
    "Remodeling Services London",
    "Electrical Services London",
    "Plumbing Services London",
    "Painting and Decorating",
    "Gardening and Landscaping",
    "London Home Services Contact",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Contact Hermeco | Get in Touch with London Home Renovation Experts",
    description:
      "Contact Hermeco for inquiries about home renovation, remodeling, electrical, plumbing, painting, and gardening services in London.",
    url: "https://hermeco.co.uk/contact",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Contact Hermeco | Get in Touch with London Home Renovation Experts",
    description:
      "Contact Hermeco for inquiries about home renovation, remodeling, electrical, plumbing, painting, and gardening services in London.",
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
