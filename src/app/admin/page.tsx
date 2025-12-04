'use client';

import { 
  LayoutDashboard, Users, Calendar, Settings, 
  Activity, DollarSign, BedDouble, Bell, Search, LogOut 
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    // L'astuce : "fixed inset-0 z-[100]" permet de couvrir tout le site (header compris)
    <div className="fixed inset-0 z-[100] flex bg-gray-100 font-sans">
      
      {/* 1. SIDEBAR (Gauche) */}
      <aside className="w-64 bg-medical-900 text-white flex flex-col">
        <div className="p-6 border-b border-medical-800">
          <h1 className="text-2xl font-bold tracking-tight">HAA <span className="text-medical-500">Manager</span></h1>
          <p className="text-xs text-gray-400 mt-1">ERP Hospitalier v1.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center p-3 bg-medical-800 rounded-lg text-white cursor-pointer">
            <LayoutDashboard size={20} className="mr-3" />
            <span className="font-medium">Tableau de Bord</span>
          </div>
          <div className="flex items-center p-3 text-gray-300 hover:bg-medical-800 hover:text-white rounded-lg cursor-pointer transition">
            <Calendar size={20} className="mr-3" />
            <span>Rendez-vous</span>
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
          </div>
          <div className="flex items-center p-3 text-gray-300 hover:bg-medical-800 hover:text-white rounded-lg cursor-pointer transition">
            <Users size={20} className="mr-3" />
            <span>Patients</span>
          </div>
          <div className="flex items-center p-3 text-gray-300 hover:bg-medical-800 hover:text-white rounded-lg cursor-pointer transition">
            <BedDouble size={20} className="mr-3" />
            <span>Gestion des Lits</span>
          </div>
          <div className="flex items-center p-3 text-gray-300 hover:bg-medical-800 hover:text-white rounded-lg cursor-pointer transition">
            <DollarSign size={20} className="mr-3" />
            <span>Facturation</span>
          </div>
          <div className="flex items-center p-3 text-gray-300 hover:bg-medical-800 hover:text-white rounded-lg cursor-pointer transition">
            <Settings size={20} className="mr-3" />
            <span>Paramètres</span>
          </div>
        </nav>

        <div className="p-4 border-t border-medical-800">
          <Link href="/" className="flex items-center text-gray-400 hover:text-white transition">
            <LogOut size={20} className="mr-3" />
            <span>Retour au Site</span>
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CONTENT (Droite) */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Vue d'ensemble</h2>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="text-gray-400" size={20} />
            </div>
            <div className="relative cursor-pointer">
              <Bell className="text-gray-600" size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-3 border-l pl-6 border-gray-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-900">Dr. Directeur</p>
                <p className="text-xs text-gray-500">Administrateur</p>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          
          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Rendez-vous (Aujourd'hui)</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">42</h3>
                  <span className="text-green-500 text-sm font-medium flex items-center mt-1">
                    +12% vs hier
                  </span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Calendar size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Patients en salle d'attente</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">8</h3>
                  <span className="text-yellow-500 text-sm font-medium flex items-center mt-1">
                    Temps moyen: 12 min
                  </span>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
                  <Users size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Taux d'occupation (Lits)</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">78%</h3>
                  <span className="text-gray-400 text-sm mt-1">
                    12 lits disponibles
                  </span>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <BedDouble size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase">Revenus (Jour)</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">2.4M CFA</h3>
                  <span className="text-green-500 text-sm font-medium flex items-center mt-1">
                    +5.2% croissance
                  </span>
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                  <DollarSign size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* RECENT APPOINTMENTS TABLE */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">Dernières demandes de RDV (Site Web)</h3>
              <button className="text-sm text-medical-600 font-medium hover:underline">Voir tout</button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 font-medium">Patient</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Date souhaitée</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Moussa Koné</div>
                    <div className="text-xs text-gray-500">Dossier #HA-2025-001</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Cardiologie</td>
                  <td className="px-6 py-4 text-gray-600">12 Déc. 2025 - 09:00</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmé
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-medical-600">Détails</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Amina Touré</div>
                    <div className="text-xs text-gray-500">Nouveau Patient</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Maternité VIP</td>
                  <td className="px-6 py-4 text-gray-600">14 Déc. 2025 - 11:30</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      En attente
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-medical-600 font-medium hover:underline">Valider</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Jean-Paul Koffi</div>
                    <div className="text-xs text-gray-500">Dossier #HA-2024-892</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Check-up Complet</td>
                  <td className="px-6 py-4 text-gray-600">15 Déc. 2025 - 08:00</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      À facturer
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-medical-600">Détails</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}