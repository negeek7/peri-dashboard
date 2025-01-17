import type { Metadata } from "next";
import "./globals.css";
import SidePanel from "./components/SidePanel";
import InfoBar from "./components/InfoBar";

export const metadata: Metadata = {
  title: "Peri Dashboard",
  description: "Peri Dashboard created by H. Negi",
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
          <SidePanel />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <InfoBar />
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </div>
        
      </body>
    </html>
  );
}