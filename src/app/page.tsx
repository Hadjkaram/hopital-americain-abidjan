import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors"; // <--- Import

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Doctors />  {/* <--- Ajout */}
    </main>
  );
}