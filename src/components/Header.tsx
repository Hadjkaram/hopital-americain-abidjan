import Link from 'next/link';
import { Phone, Calendar, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* 1. Top Bar - Urgences & Infos */}
      <div className="bg-medical-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-bold text-red-400">
              <Phone size={16} className="mr-2" />
              URGENCES 24/7 : (+225) 27 22 22 22 22
            </span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-200">
            <Link href="#" className="hover:text-white transition">Espace Patient</Link>
            <Link href="#" className="hover:text-white transition">Carrières</Link>
            <Link href="#" className="hover:text-white transition">International</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-medical-800 tracking-tight">HAA</span>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Hôpital Américain d'Abidjan</span>
        </Link>

        {/* Menu Desktop (Caché sur mobile) */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="#" className="hover:text-medical-600 transition">L'Hôpital</Link>
          <Link href="#" className="hover:text-medical-600 transition">Nos Spécialités</Link>
          <Link href="#" className="hover:text-medical-600 transition">Médecins</Link>
          <Link href="#" className="hover:text-medical-600 transition">Check-up</Link>
        </nav>

        {/* Boutons d'action */}
        <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-medical-600">
                <Search size={20} />
            </button>
            
            {/* CORRECTION ICI : Utilisation de Link au lieu de button pour aller vers la page */}
            <Link 
              href="/rendez-vous" 
              className="hidden md:flex items-center bg-medical-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-medical-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                <Calendar size={18} className="mr-2" />
                Prendre Rendez-vous
            </Link>
        </div>
      </div>
    </header>
  );
}