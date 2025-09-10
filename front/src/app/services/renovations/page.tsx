import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Renovations & Remodeling London | Hermeco Expert Builders",
  description:
    "Hermeco offers professional home renovation and remodeling services in London, including extensions, kitchen & bathroom remodels, and full home makeovers. Quality craftsmanship guaranteed.",
  keywords: [
    "Hermeco Renovations",
    "Home Renovation London",
    "Remodeling Services London",
    "Kitchen Remodeling London",
    "Bathroom Renovation London",
    "Home Extensions London",
    "Professional Builders UK",
    "House Makeovers London",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Home Renovations & Remodeling London | Hermeco Expert Builders",
    description:
      "Hermeco offers professional home renovation and remodeling services in London, including extensions, kitchen & bathroom remodels, and full home makeovers. Quality craftsmanship guaranteed.",
    url: "https://hermeco.co.uk/services/renovations",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Home Renovations & Remodeling London | Hermeco Expert Builders",
    description:
      "Hermeco offers professional home renovation and remodeling services in London, including extensions, kitchen & bathroom remodels, and full home makeovers. Quality craftsmanship guaranteed.",
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
