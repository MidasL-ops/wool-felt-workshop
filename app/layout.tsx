import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "薇薇V的羊毛氈手作坊 | 溫暖 × 手作 × 療癒系 IP",
  description: "把柔軟，捧在手心；把喜悅，分享給世界。薇薇V的羊毛氈手作坊，以可愛、生動、富含情緒療癒力量的羊毛氈作品為核心，打造陪伴生活的小小幸福。",
  keywords: "羊毛氈, 手作, 療癒, 吊飾, 擺飾, 圍巾, IP系列, 訂製",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "薇薇V的羊毛氈手作坊",
    description: "把柔軟，捧在手心；把喜悅，分享給世界。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
