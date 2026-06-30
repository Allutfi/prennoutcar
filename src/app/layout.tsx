import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prestige Auto Motors | Premium Automotive Excellence",
  description:
    "Discover Miami's most exclusive collection of premium pre-owned vehicles. Unmatched quality, transparent pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
