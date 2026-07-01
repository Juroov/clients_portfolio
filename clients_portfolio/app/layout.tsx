import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuya Matt | Financial Advisor & Educator",
  description:
    "Matt Gaven Matibag, LPT — Helping Filipino individuals and families build financial security, protection, and confidence for the future.",
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
