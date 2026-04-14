import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "MOS Detailing | Պրեմիում դեթեյլինգ Երևանում",
  description: "Սրահի վերականգնում, ղեկի կաշեպատում, նստատեղերի և առաստաղի վերանորոգում: Որակյալ դեթեյլինգ Երևանում:",
  keywords: "դեթեյլինգ երևան, սրահի վերականգնում, նստատեղերի վերանորոգում, ղեկի կաշեպատում",
  openGraph: {
    title: "MOS Detailing | Premium detailing",
    description: "Professional car interior restoration in Yerevan.",
    images: ["/images/hero_bg.png"],
  },
  themeColor: "#0a0a0a",
  appleWebApp: {
    title: "MOS Detailing",
    statusBarStyle: "black-translucent",
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
