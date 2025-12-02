import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, RefreshCw, Sparkles, Shield, Star, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Tatuaje personalizado",
      description: "Diseños únicos hechos a medida. Boceto previo, asesoría profesional y atención al detalle.",
      highlight: "Popular",
    },
    {
      icon: RefreshCw,
      title: "Cover-up y retoques",
      description: "Cubiertas artísticas y correcciones profesionales. Transformamos lo antiguo en arte nuevo.",
      highlight: null,
    },
    {
      icon: Sparkles,
      title: "Piercing y cuidados",
      description: "Colocación segura con materiales premium y recomendaciones post-procedimiento personalizadas.",
      highlight: null,
    },
  ];

  const features = [
    { icon: Shield, text: "Higiene garantizada" },
    { icon: Star, text: "Artistas certificados" },
    { icon: Zap, text: "Equipos de última generación" },
  ];

  return (
    <section id="servicios" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span>Profesionales expertos</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold">
            Nuestros <span className="text-gradient">servicios</span>
          </h3>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Ofrecemos una experiencia completa con los más altos estándares de calidad y seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={i}
                className="group relative overflow-hidden glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {service.highlight}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-foreground text-primary-foreground rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Features bar */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
