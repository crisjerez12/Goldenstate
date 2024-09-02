import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goldenstate College of Kiamba Inc.",
  description:
    "An unofficial website for Goldenstate College of Kiamba created by it's student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
