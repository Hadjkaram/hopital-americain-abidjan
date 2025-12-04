'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Stethoscope } from 'lucide-react';
import Link from 'next/link';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  hasAction?: boolean; // Permet d'afficher le bouton de rendez-vous
};

export default function MedicalAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Message d'accueil par défaut
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      text: "Bonjour ! Je suis l'assistant virtuel de HAA. Je peux répondre à vos questions médicales simples ou vous aider à prendre rendez-vous. Comment puis-je vous aider aujourd'hui ?",
      hasAction: false
    }
  ]);

  // Fonction pour faire défiler vers le bas automatiquement
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // --- CERVEAU DE L'IA (SIMULATION) ---
  const generateResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    
    setIsTyping(true);

    // On simule un temps de réflexion humaine (1.5 secondes)
    setTimeout(() => {
      let responseText = "";
      let showActionButton = false;

      // Logique de détection de mots-clés
      if (lowerText.includes('bonjour') || lowerText.includes('salut')) {
        responseText = "Bonjour ! Comment allez-vous aujourd'hui ?";
      } 
      else if (lowerText.includes('tête') || lowerText.includes('migraine') || lowerText.includes('céphalée')) {
        responseText = "Les maux de tête peuvent être dus au stress, à la déshydratation ou à la fatigue. Si la douleur est intense et soudaine, je vous recommande de voir un médecin rapidement.";
        showActionButton = true;
      }
      else if (lowerText.includes('fièvre') || lowerText.includes('chaud') || lowerText.includes('grippe')) {
        responseText = "Une fièvre supérieure à 38°C nécessite une surveillance. Hydratez-vous bien. Si cela persiste plus de 24h, une consultation est nécessaire.";
        showActionButton = true;
      }
      else if (lowerText.includes('diarrhée') || lowerText.includes('ventre')) {
        responseText = "En cas de diarrhée, le risque principal est la déshydratation. Buvez beaucoup d'eau. Si cela s'accompagne de douleurs vives, consultez nos spécialistes.";
        showActionButton = true;
      }
      else if (lowerText.includes('adresse') || lowerText.includes('ou etes vous') || lowerText.includes('situation')) {
        responseText = "Nous sommes situés à la Riviera 3, Boulevard Mitterrand, Abidjan. Nos urgences sont ouvertes 24h/24.";
      }
      else if (lowerText.includes('prix') || lowerText.includes('coût') || lowerText.includes('tarif')) {
        responseText = "Les tarifs dépendent de la pathologie. Une consultation standard commence à 25.000 CFA. Souhaitez-vous voir un spécialiste ?";
        showActionButton = true;
      }
      else {
        responseText = "Je comprends. Pour une analyse précise de votre état de santé, rien ne remplace l'avis de nos experts.";
        showActionButton = true;
      }

      const newMessage: Message = {
        id: Date.now(),
        role: 'bot',
        text: responseText,
        hasAction: showActionButton
      };

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    generateResponse(inputValue);
    setInputValue('');
  };

  return (
    <>
      {/* 1. BOUTON FLOTTANT (L'Avatar) */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 cursor-pointer group animate-bounce-slow"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white">
              1
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&q=80&w=200" 
                alt="AI Assistant" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bulle d'appel */}
            <div className="absolute right-20 top-4 bg-white px-4 py-2 rounded-xl shadow-lg text-sm text-gray-700 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Besoin d'aide médicale ?
            </div>
          </div>
        </div>
      )}

      {/* 2. FENÊTRE DE CHAT */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] md:max-w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans">
          
          {/* Header du Chat */}
          <div className="bg-medical-600 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50">
                <img src="https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&q=80&w=200" alt="Bot" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Assistant HAA</h3>
                <div className="flex items-center text-xs text-medical-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  En ligne
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
              <X size={20} />
            </button>
          </div>

          {/* Zone de messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-medical-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                  
                  {/* BOUTON D'ACTION AUTOMATIQUE (Si détecté) */}
                  {msg.hasAction && (
                    <div className="mt-3 pt-3 border-t border-gray-100/20">
                      <Link 
                        href="/rendez-vous" 
                        className={`block text-center py-2 px-4 rounded-lg text-xs font-bold transition ${
                            msg.role === 'user'
                            ? 'bg-white text-medical-600'
                            : 'bg-medical-50 text-medical-600 hover:bg-medical-100'
                        }`}
                      >
                        📅 Prendre Rendez-vous maintenant
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Indicateur de frappe */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-2xl rounded-bl-none flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Posez votre question médicale..."
              className="flex-1 p-3 bg-gray-50 text-gray-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-medical-500 transition"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim() || isTyping}
              className="p-3 bg-medical-600 text-white rounded-xl hover:bg-medical-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
