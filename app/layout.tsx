import ThemeProvider from "./theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ColorStack Chapter Website Template",
  description: "A scalable, open-source website template for ColorStack chapters, built to support everything from a static marketing site to a fully authenticated chapter platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
            
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
