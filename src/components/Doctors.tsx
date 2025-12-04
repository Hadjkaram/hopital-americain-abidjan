import { GraduationCap } from 'lucide-react';

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Marc Anderson Kouamé",
      role: "Directeur Médical",
      specialty: "Cardiologie Interventionnelle",
      school: "Ex-Chef de Clinique (Paris)",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Aminata Diallo",
      role: "Chirurgienne Chef",
      specialty: "Chirurgie Viscérale & Robotique",
      school: "Diplômée de Harvard Medical School",
      image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Jean-Michel Yapi",
      role: "Responsable Pédiatrie",
      specialty: "Néonatologie",
      school: "Ancien Praticien Hôpital Necker",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Grace N'Dri",
      role: "Oncologue",
      specialty: "Cancérologie",
      school: "Spécialiste Stanford University",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Rencontrez nos experts
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Une équipe internationale et locale, sélectionnée pour son excellence académique et technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-medical-600 font-bold uppercase tracking-wide mb-1">
                  {doctor.specialty}
                </p>
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{doctor.role}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-600 font-medium flex items-center">
                    <GraduationCap size={16} className="mr-2 text-medical-500" /> {doctor.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}