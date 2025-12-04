import Link from 'next/link';
import Image from 'next/image'; // <-- Import important pour les images
import { Phone, Calendar, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* 1. Top Bar - Urgences & Infos */}
      <div className="bg-medical-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="tel:+2252722222222" className="flex items-center font-bold text-white hover:text-medical-200 transition">
              <Phone size={16} className="mr-2 text-medical-500" />
              <span className="hidden md:inline">URGENCES 24/7 : </span> (+225) 27 22 22 22 22
            </a>
          </div>
          <div className="flex space-x-6 text-gray-300">
            <Link href="#" className="hover:text-white transition">Espace Patient</Link>
            <Link href="#" className="hover:text-white transition">Carrières</Link>
            <Link href="#" className="hover:text-white transition">International</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* LOGO (C'est ici que ça change !) */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image 
              src="/logo-haa.png" // Le chemin vers ton image dans le dossier public
              alt="Logo Hôpital Américain d'Abidjan"
              width={180} // Largeur ajustée pour un bon rendu
              height={60} // Hauteur ajustée
              className="w-auto h-10 md:h-12" // Hauteur responsive (plus petit sur mobile)
              priority // Charge cette image en priorité
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="text-medical-900 font-semibold border-b-2 border-medical-500 pb-1">L'Hôpital</Link>
            <Link href="#" className="hover:text-medical-600 transition pb-1 border-b-2 border-transparent hover:border-medical-200">Nos Spécialités</Link>
            <Link href="#" className="hover:text-medical-600 transition pb-1 border-b-2 border-transparent hover:border-medical-200">Médecins</Link>
            <Link href="#" className="hover:text-medical-600 transition pb-1 border-b-2 border-transparent hover:border-medical-200">Check-up</Link>
          </nav>

          {/* Boutons d'action */}
          <div className="flex items-center space-x-2 md:space-x-4">
              <button className="p-2 text-gray-400 hover:text-medical-600 transition rounded-full hover:bg-medical-50">
                  <Search size={20} />
              </button>
              
              <Link 
                href="/rendez-vous" 
                className="hidden md:flex items-center bg-medical-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-medical-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                  <Calendar size={18} className="mr-2" />
                  Prendre Rendez-vous
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
