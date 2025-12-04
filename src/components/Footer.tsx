import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-medical-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">HAA</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              L'Hôpital Américain d'Abidjan apporte les standards de soins internationaux en Côte d'Ivoire. Technologie de pointe et compassion au service de votre santé.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition"><Linkedin size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20}/></Link>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-medical-500">Patients</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#" className="hover:text-medical-500 transition">Prendre Rendez-vous</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Nos Médecins</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Guide du Patient</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Assurances Acceptées</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Résultats en ligne</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-medical-500">Pôles d'Excellence</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#" className="hover:text-medical-500 transition">Cardiologie</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Maternité VIP</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Neurologie</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Urgences</Link></li>
              <li><Link href="#" className="hover:text-medical-500 transition">Check-up Center</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-medical-500">Contact</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-medical-500 shrink-0"/>
                <span>Riviera 3, Abidjan<br/>Boulevard Mitterrand</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-medical-500 shrink-0"/>
                <span>(+225) 27 22 22 22 22</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-medical-500 shrink-0"/>
                <span>contact@haa.ci</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-medical-500 shrink-0"/>
                <span>Urgences : 24h/24 - 7j/7<br/>Visites : 08h - 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Hôpital Américain d'Abidjan. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Mentions Légales</Link>
            <Link href="#" className="hover:text-white">Confidentialité</Link>
            <Link href="#" className="hover:text-white">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}