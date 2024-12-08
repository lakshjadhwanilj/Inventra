import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWapper from "./dashboardWapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inventra",
  description: "A Cloud-Native Inventory Management Dashboard Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DashboardWapper>{children}</DashboardWapper>
      </body>
    </html>
  );
}
