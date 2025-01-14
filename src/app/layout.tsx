import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* layout for side panel (common to all pages) */}
        <div className="h-screen border border-green-500 flex">
          {/* Side Panel */}
          <div className="w-1/4 border border-blue-800 flex flex-col gap-4">

              

          </div>
          <main className="border border-orange-300 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
