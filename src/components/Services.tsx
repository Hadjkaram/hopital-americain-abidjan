import { HeartPulse, Baby, Microscope, Stethoscope, Activity, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Cardiologie & Vasculaire",
    description: "Un plateau technique de dernière génération pour la prévention et le traitement des maladies cardiovasculaires.",
    icon: HeartPulse,
  },
  {
    title: "Pôle Mère-Enfant",
    description: "Maternité VIP et néonatologie offrant sécurité et confort absolu pour vous et votre bébé.",
    icon: Baby,
  },
  {
    title: "Check-up Center",
    description: "Bilans de santé complets et personnalisés en moins de 4h, sur le modèle américain.",
    icon: Activity,
  },
  {
    title: "Chirurgie Robotique",
    description: "Interventions de haute précision mini-invasives pour une récupération plus rapide.",
    icon: Microscope,
  },
  {
    title: "Médecine Générale",
    description: "Consultations 7j/7 avec des médecins formés aux standards internationaux.",
    icon: Stethoscope,
  },
  {
    title: "Urgences 24/7",
    description: "Prise en charge immédiate avec circuit prioritaire et évacuation sanitaire internationale.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-medical-500 font-semibold tracking-wide uppercase text-sm">
            Expertise Médicale
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Centres d'Excellence
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Une approche multidisciplinaire pour une prise en charge globale de votre santé, identique à celle de Paris.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-200 cursor-pointer">
              <div className="flex items-center justify-center w-14 h-14 bg-medical-50 rounded-full mb-6 group-hover:bg-medical-500 transition-colors duration-300">
                {/* L'icône change de couleur au survol (de vert à blanc) */}
                <service.icon className="w-8 h-8 text-medical-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-medical-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}