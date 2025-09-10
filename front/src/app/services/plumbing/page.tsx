import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services London | Hermeco Expert Plumbers",
  description:
    "Hermeco provides professional plumbing services in London, including repairs, installations, leak fixing, boiler services, and full plumbing solutions for homes and businesses.",
  keywords: [
    "Hermeco Plumbing Services",
    "Plumbers London",
    "Leak Repairs London",
    "Pipe Installation London",
    "Boiler Services London",
    "Bathroom Plumbing London",
    "Professional Plumbers UK",
    "Plumbing Maintenance London",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Plumbing Services London | Hermeco Expert Plumbers",
    description:
      "Hermeco provides professional plumbing services in London, including repairs, installations, leak fixing, boiler services, and full plumbing solutions for homes and businesses.",
    url: "https://hermeco.co.uk/services/plumbing",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Plumbing Services London | Hermeco Expert Plumbers",
    description:
      "Hermeco provides professional plumbing services in London, including repairs, installations, leak fixing, boiler services, and full plumbing solutions for homes and businesses.",
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
