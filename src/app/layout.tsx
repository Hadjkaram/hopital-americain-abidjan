import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicalAI from "@/components/MedicalAI"; // <--- AJOUTE ICI

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hôpital Américain d'Abidjan",
  description: "L'excellence médicale aux standards internationaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        
        {children}
        
        <MedicalAI /> {/* <--- AJOUTE ICI (Ça s'affichera par-dessus le footer) */}
        
        <Footer />
      </body>
    </html>
  );
}
