import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";

const rem = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Landing Page",
  description: "Creafted with NextJS + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rem.className}>{children}</body>
    </html>
  );
}
