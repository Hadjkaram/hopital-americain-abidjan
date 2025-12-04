import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        {/* Le Menu (Header) reste fixe en haut */}
        <Header />
        
        {/* Ici s'affiche le contenu de chaque page (Accueil, Contact, etc.) */}
        {children}
        
        {/* Le Pied de page (Footer) s'affiche tout en bas */}
        <Footer />
      </body>
    </html>
  );
}