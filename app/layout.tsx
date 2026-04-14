import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "MOS Detailing | Պրեմիում դեթեյլինգ Երևանում",
  description: "Սալոնի վերականգնում, ղեկի կաշեպատում, նստատեղերի և առաստաղի վերանորոգում: Որակյալ դեթեյլինգ Երևանում:",
  keywords: "դեթեյլինգ երևան, սալոնի վերականգնում, նստատեղերի վերանորոգում, ղեկի կաշեպատում",
  openGraph: {
    title: "MOS Detailing | Premium detailing",
    description: "Professional car interior restoration in Yerevan.",
    images: ["/images/hero_bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
