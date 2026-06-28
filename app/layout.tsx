import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewProvider } from "@/components/ViewContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lewis — Portfolio",
  description: "Projects and work by Lewis.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ViewProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ViewProvider>
      </body>
    </html>
  );
}
