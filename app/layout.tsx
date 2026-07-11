import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student of Sales",
  description: "A community and resource hub for people growing in sales.",
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
