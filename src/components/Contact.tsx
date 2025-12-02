import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare, Clock, Headphones } from "lucide-react";

export const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789",
      color: "primary",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Enviar mensaje",
      href: "https://wa.me/34123456789",
      color: "green-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@estudiotattoo.com",
      href: "mailto:info@estudiotattoo.com",
      color: "primary",
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Calle Principal 123, Madrid",
      href: null,
      color: "primary",
    },
  ];

  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
                <Headphones className="w-4 h-4 text-primary" />
                <span>Estamos para ayudarte</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Atención</span> al cliente
              </h4>
              <p className="text-muted-foreground mt-4 text-lg">
                ¿Dudas sobre cuidados, precios o procesos? Contáctanos por cualquiera de nuestros canales.
              </p>
            </div>

            {/* Schedule */}
            <div className="p-4 rounded-2xl glass">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Horario de atención</p>
                  <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 20:00</p>
                  <p className="text-muted-foreground">Sábados: 11:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="p-4 rounded-2xl glass hover:bg-primary/5 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow pulse-glow">
                <a href="tel:+34123456789" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Llamar ahora
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="glass border-green-500/30 hover:bg-green-500/10">
                <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative glass rounded-3xl h-96 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg font-semibold">Visítanos</p>
                <p className="text-muted-foreground mt-2">Calle Principal 123</p>
                <p className="text-muted-foreground">28001 Madrid, España</p>
                <Button variant="outline" size="sm" className="mt-4 glass" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
