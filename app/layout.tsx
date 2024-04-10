import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
