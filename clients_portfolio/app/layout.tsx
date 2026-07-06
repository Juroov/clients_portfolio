import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuya Juan | Financial Advisor & Educator",
  description:
    "Juan dela Cruz, LPT — Helping Filipino individuals and families build financial security, protection, and confidence for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
