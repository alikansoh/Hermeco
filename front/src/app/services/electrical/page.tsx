import React from "react";
import Content from "./content"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Services London | Hermeco Certified Electricians",
  description:
    "Professional electrical services in London by Hermeco. We handle installations, repairs, rewiring, lighting, and full electrical solutions for homes and businesses.",
  keywords: [
    "Hermeco Electrical Services",
    "Electrician London",
    "Home Electrical Installation",
    "Electrical Repairs London",
    "Rewiring Services London",
    "Lighting Installation London",
    "Certified Electricians London",
    "Electrical Maintenance UK",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title: "Electrical Services London | Hermeco Certified Electricians",
    description:
      "Professional electrical services in London by Hermeco. We handle installations, repairs, rewiring, lighting, and full electrical solutions for homes and businesses.",
    url: "https://hermeco.co.uk/services/electrical",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Electrical Services London | Hermeco Certified Electricians",
    description:
      "Professional electrical services in London by Hermeco. We handle installations, repairs, rewiring, lighting, and full electrical solutions for homes and businesses.",
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
