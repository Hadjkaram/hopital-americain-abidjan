import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-medical-100 bg-medical-50 text-medical-700 text-sm font-medium mb-6">
                <Activity size={16} className="mr-2 text-medical-500" />
                Nouveau à Abidjan - Ouverture 2025
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">L'excellence médicale</span>{' '}
                <span className="block text-medical-600 xl:inline">aux standards américains</span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                L'Hôpital Américain d'Abidjan (HAA) vous offre une prise en charge globale, des technologies de pointe et une équipe d'experts internationaux pour votre santé.
              </p>
              
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/rendez-vous" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-medical-600 hover:bg-medical-700 md:py-4 md:text-lg transition">
                    Prendre Rendez-vous
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-medical-100 text-base font-medium rounded-md text-medical-700 bg-white hover:bg-medical-50 md:py-4 md:text-lg transition">
                    Nos Spécialités <ArrowRight size={20} className="ml-2"/>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Image de droite */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2853&q=80"
          alt="Équipe médicale moderne dans un hôpital"
        />
      </div>
    </section>
  );
}