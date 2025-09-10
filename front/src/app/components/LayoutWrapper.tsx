"use client";

import { usePathname } from "next/navigation";
import NavBar from "./navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import CustomCursor from "./CustomCursor";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? ""; // Fixes the TS warning

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <FloatingContact />
      <CustomCursor />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
