import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "be metronome～～🐱",
  description: "a metronome called be",
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
