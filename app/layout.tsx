import type { Metadata } from "next";
import "./globals.css";
import { LayoutComponent } from "@/components/layout";

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
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
