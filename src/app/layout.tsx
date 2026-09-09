import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Malav & Surbhi | Wedding Invitation", description: "Join Malav and Surbhi in celebration." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
