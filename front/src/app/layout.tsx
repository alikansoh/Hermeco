import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import LayoutWrapper from "./components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Hermeco | Professional Home Renovation & Construction Services in London",
  description:
    "Hermeco offers expert home renovation, remodeling, electrical, plumbing, painting, and gardening services across London. Quality work, reliable professionals, and competitive pricing.",
  keywords: [
    "Hermeco",
    "Home Renovation London",
    "Remodeling Services London",
    "Electrical Services London",
    "Plumbing Services London",
    "Painting and Decorating",
    "Gardening and Landscaping",
    "Construction Services UK",
  ],
  authors: [{ name: "Hermeco", url: "https://hermeco.co.uk" }],
  creator: "Hermeco",
  publisher: "Hermeco",
  openGraph: {
    title:
      "Hermeco | Professional Home Renovation & Construction Services in London",
    description:
      "Expert home renovation, remodeling, electrical, plumbing, painting, and gardening services across London. Reliable professionals at competitive prices.",
    url: "https://hermeco.co.uk",
    siteName: "Hermeco",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HermecoUK",
    creator: "@HermecoUK",
    title: "Hermeco | Home Renovation & Construction Services",
    description:
      "Expert home renovation, remodeling, electrical, plumbing, painting, and gardening services across London.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17698647174"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17698647174');
          `}
        </Script>

        {/* ✅ Microsoft Clarity Tracking Code */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u4eu287kpc");
          `}
        </Script>
      </head>

      <body className={`${inter.variable} ${robotoSlab.variable} antialiased`}>
        <CustomCursor />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
