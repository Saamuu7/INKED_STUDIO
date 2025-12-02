import { Header } from "@/components/Header";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <WelcomeBanner />
        <Hero />
        <Gallery />
        <Services />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
