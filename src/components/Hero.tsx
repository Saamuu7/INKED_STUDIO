import { Button } from "@/components/ui/button";
import { Clock, MessageCircle, PenLine, Phone, Sparkles } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=800",
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
  "https://images.unsplash.com/photo-1598371611186-ccae61a2f93e?q=80&w=800",
];

const pillars = [
  {
    title: "Diseño consciente",
    copy: "Brief creativo, bocetos digitales y revisión conjunta hasta cerrar cada trazo.",
  },
  {
    title: "Cabina estéril",
    copy: "Protocolos hospitalarios, materiales desechables y certificaciones vigentes.",
  },
  {
    title: "Acompañamiento",
    copy: "Aftercare detallado y seguimiento para asegurar una curación impecable.",
  },
];

export const Hero = () => {
  return (
    <section id="experiencia" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.03)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="badge-ornament text-xs tracking-[0.5em] uppercase text-secondary/80">
            Diseño · Ritual · Técnica
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Experiencias de tatuaje orquestadas con precisión artística
            </h2>
            <p className="text-lg text-muted max-w-xl">
              Cada proyecto inicia con una entrevista sensorial, moodboards y un proceso colaborativo que respeta la anatomía y el significado del tatuaje. Nuestro objetivo: piezas atemporales con acabados impecables.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Button size="lg" asChild className="uppercase tracking-[0.4em]">
              <a href="#reservas" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Agenda tu cita
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-border/60 uppercase tracking-[0.3em]">
              <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass rounded-2xl p-4 border border-border/40">
                <p className="text-sm uppercase tracking-[0.3em] text-secondary/80">{pillar.title}</p>
                <p className="text-muted mt-1 text-sm">{pillar.copy}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              Lun - Vie · 10h - 20h
            </div>
            <a href="tel:+34123456789" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
              +34 123 456 789
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-70" />
          <div className="relative grid gap-4">
            {heroImages.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-border/40 bg-black/30 ${
                  index === 1 ? "ml-8" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <img src={src} alt={`Tatuaje destacado ${index + 1}`} className="w-full h-64 object-cover" />
                <div className="absolute bottom-4 left-4 text-sm">
                  <p className="uppercase tracking-[0.4em] text-xs text-muted">Serie #{index + 1}</p>
                  <p className="text-white font-semibold">Curaduría Nocturna</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-3xl border border-border/40 bg-black/40 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-border/30 flex items-center justify-center">
                  <PenLine className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted">Proceso</p>
                  <p className="font-semibold">Brief · Boceto · Ritual</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                Documentamos cada paso para que vivas una sesión segura y memorable. Desde la preparación de la piel hasta las instrucciones de cuidado final, todo está calculado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
