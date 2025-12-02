import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Layers, ShieldCheck, Sparkles, Star, Syringe } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Custom Pieces",
    description:
      "Exploramos moodboards, ejecutamos bocetos digitales y ajustamos líneas y sombras hasta que la composición cuente tu historia.",
    tag: "Hecho a medida",
  },
  {
    icon: Layers,
    title: "Cover-up & Restyling",
    description:
      "Rediseñamos tatuajes anteriores con técnicas de saturación, texturas y volúmenes que camuflan y elevan el resultado final.",
    tag: "Transformación",
  },
  {
    icon: Syringe,
    title: "Piercing & Microtattoo",
    description:
      "Cabina estéril, agujas desechables y curación guiada. Ideal para piezas minimalistas y perforaciones de alta precisión.",
    tag: "Detalle",
  },
];

const commitments = [
  { icon: ShieldCheck, label: "Bioseguridad certificada" },
  { icon: Star, label: "Artistas residentes & guest" },
  { icon: Sparkles, label: "Aftercare personalizado" },
];

export const Services = () => {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="section-subtitle text-secondary/80">SERVICIOS</p>
          <h3 className="text-3xl md:text-5xl font-semibold">Curaduría de tatuajes y rituales de cuidado</h3>
          <p className="text-muted max-w-3xl mx-auto">
            Nuestra metodología combina arte, ciencia y comodidad para que vivas sesiones memorables. Estos son los programas que más reservan nuestros clientes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="relative overflow-hidden border-border/40 bg-black/40">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl border border-border/50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <span className="text-xs uppercase tracking-[0.4em] text-secondary/80">{service.tag}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4 border border-border/40 rounded-2xl p-4 bg-black/30">
                <div className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
