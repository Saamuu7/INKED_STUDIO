import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, RefreshCw, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Tatuaje personalizado",
      description: "Diseños hechos a medida. Boceto previo y asesoría profesional.",
    },
    {
      icon: RefreshCw,
      title: "Cover-up y retoques",
      description: "Cubiertas artísticas y correcciones profesionales de calidad.",
    },
    {
      icon: Sparkles,
      title: "Piercing y cuidados",
      description: "Colocación segura y recomendaciones post-procedimiento.",
    },
  ];

  return (
    <section id="servicios" className="bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold">Servicios</h3>
          <p className="text-muted-foreground mt-3 text-lg">
            Ofrecemos varios estilos y opciones de atención
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={i}
                className="hover:shadow-glow transition-smooth hover:scale-105 border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
