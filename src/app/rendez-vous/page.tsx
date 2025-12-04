'use client'; // Indispensable car on utilise des boutons et des changements d'état

import { useState } from 'react';
import { Calendar, User, Clock, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Simulation de l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // On fait semblant d'attendre 2 secondes (simulation ERP)
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Étape de succès
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Prise de Rendez-vous</h1>
          <p className="mt-2 text-gray-600">Réservation en temps réel connectée au dossier patient.</p>
        </div>

        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
            
            {/* Boules de progression */}
            {[1, 2, 3].map((item) => (
              <div key={item} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= item ? 'bg-medical-500 text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-gray-500 uppercase">
            <span>Spécialité</span>
            <span>Date & Heure</span>
            <span>Vos Infos</span>
          </div>
        </div>

        {/* Carte du Formulaire */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">
          
          <form onSubmit={handleSubmit}>
            
            {/* ÉTAPE 1 : CHOIX SPÉCIALITÉ */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <User className="mr-2 text-medical-500" /> Choisissez un service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Cardiologie', 'Pédiatrie', 'Gynécologie', 'Médecine Générale', 'Dermatologie', 'Ophtalmologie'].map((spec) => (
                    <label key={spec} className="cursor-pointer">
                      <input type="radio" name="specialty" className="peer sr-only" />
                      <div className="p-4 border rounded-xl hover:bg-medical-50 peer-checked:border-medical-500 peer-checked:bg-medical-50 peer-checked:text-medical-700 transition">
                        {spec}
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex justify-end pt-6">
                  <button type="button" onClick={() => setStep(2)} className="bg-medical-600 text-white px-6 py-3 rounded-lg hover:bg-medical-700 flex items-center">
                    Suivant <ChevronRight size={18} className="ml-2"/>
                  </button>
                </div>
              </div>
            )}

            {/* ÉTAPE 2 : CALENDRIER */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <Calendar className="mr-2 text-medical-500" /> Choisissez une disponibilité
                </h2>
                
                {/* Simulation de calendrier */}
                <div className="p-4 bg-medical-50 rounded-lg border border-medical-100 text-center text-medical-800 mb-4">
                  Disponibilités pour <span className="font-bold">Décembre 2025</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {['Lundi 12', 'Mardi 13', 'Mercredi 14', 'Jeudi 15'].map((day) => (
                    <div key={day} className="text-center p-2 border rounded hover:border-medical-500 cursor-pointer text-sm">
                      <div className="font-bold text-gray-700">{day}</div>
                      <div className="mt-2 space-y-1">
                        <div className="bg-green-100 text-green-700 text-xs py-1 rounded hover:bg-medical-500 hover:text-white transition">09:00</div>
                        <div className="bg-green-100 text-green-700 text-xs py-1 rounded hover:bg-medical-500 hover:text-white transition">14:30</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  <button type="button" onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-800 flex items-center">
                    <ChevronLeft size={18} className="mr-2"/> Retour
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="bg-medical-600 text-white px-6 py-3 rounded-lg hover:bg-medical-700 flex items-center">
                    Suivant <ChevronRight size={18} className="ml-2"/>
                  </button>
                </div>
              </div>
            )}

            {/* ÉTAPE 3 : INFOS PATIENT */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <User className="mr-2 text-medical-500" /> Vos coordonnées
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nom" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-500 outline-none" required />
                  <input type="text" placeholder="Prénom" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-500 outline-none" required />
                  <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-500 outline-none" required />
                  <input type="tel" placeholder="Téléphone (+225)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-medical-500 outline-none" required />
                </div>
                
                <div className="p-4 bg-yellow-50 text-yellow-800 text-sm rounded-lg flex items-start">
                  <Clock size={16} className="mr-2 mt-0.5" />
                  Merci d'arriver 15 minutes avant l'heure de votre rendez-vous pour les formalités administratives.
                </div>

                <div className="flex justify-between pt-6">
                  <button type="button" onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-800 flex items-center">
                    <ChevronLeft size={18} className="mr-2"/> Retour
                  </button>
                  <button type="submit" disabled={loading} className="bg-medical-600 text-white px-8 py-3 rounded-lg hover:bg-medical-700 flex items-center shadow-lg">
                    {loading ? 'Traitement en cours...' : 'Confirmer le Rendez-vous'}
                  </button>
                </div>
              </div>
            )}

            {/* ÉTAPE 4 : SUCCÈS */}
            {step === 4 && (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Rendez-vous Confirmé !</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Votre demande a été enregistrée dans notre système central. Vous allez recevoir un SMS et un email de confirmation avec votre code d'accès QR.
                </p>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg inline-block text-left mb-8">
                  <p className="font-bold text-gray-900">Dr. Sarah Bamba</p>
                  <p className="text-gray-600">Cardiologie</p>
                  <p className="text-medical-600 mt-2 font-medium">Lundi 12 Décembre à 09:00</p>
                </div>
                <br />
                <button type="button" onClick={() => window.location.href = '/'} className="text-medical-600 font-medium hover:underline">
                  Retour à l'accueil
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}