import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Toast from "@/components/Toast";

export const metadata: Metadata = {
  title: "Smit Bhatkar — AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Smit Bhatkar, a 3rd year CSE (AI/ML & Data Science) student at GSFC University building intelligent systems, RAG pipelines, and full-stack products.",
  keywords: [
    "Smit Bhatkar",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Portfolio",
    "GSFC University",
    "RAG Chatbot",
    "Computer Vision",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Smit Bhatkar — AI/ML Engineer & Full Stack Developer",
    description:
      "Building intelligent systems, RAG pipelines, and full-stack products.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smit Bhatkar — AI/ML Engineer & Full Stack Developer",
    description: "3rd year CSE (AI/ML) @ GSFC University. I engineer intelligent systems and ship real products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Toast />
      </body>
    </html>
  );
}
