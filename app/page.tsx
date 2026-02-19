import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CertificateSearch from "@/components/CertificateSearch";
import Prizes from "@/components/Prizes";
import RegisterInfo from "@/components/RegisterInfo";
import Guide from "@/components/Guide";
import Poster from "@/components/Poster";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Sponsors from "@/components/Sponsors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAB from "@/components/FAB";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <CertificateSearch />
      <Prizes />
      <RegisterInfo />
      <Guide />
      <Poster />
      <Timeline />
      <TechStack />
      <Sponsors />
      <CTA />
      <Footer />
      <FAB />
    </main>
  );
}
