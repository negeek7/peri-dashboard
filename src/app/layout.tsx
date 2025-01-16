import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SidePanel from "./components/SidePanel";
import NavBar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-100 antialiased">
        <div className="flex flex-row h-full">
          {/* Side Panel */}
          <SidePanel  />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <NavBar  />
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}