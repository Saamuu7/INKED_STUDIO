import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h4 className="text-3xl font-bold">Atención al cliente</h4>
            <p className="text-muted-foreground mt-3 text-lg">
              ¿Dudas sobre cuidados, precios o procesos? Contáctanos por los canales
              disponibles.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="font-semibold">Teléfono</div>
                <a
                  href="tel:+34123456789"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  +34 123 456 789
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="font-semibold">WhatsApp</div>
                <a
                  href="https://wa.me/34123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  Enviar mensaje
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="font-semibold">Email</div>
                <a
                  href="mailto:info@estudiotattoo.com"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  info@estudiotattoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="font-semibold">Dirección</div>
                <p className="text-muted-foreground">Calle Falsa 123, Ciudad</p>
              </div>
            </div>
          </div>

          <Button size="lg" asChild>
            <a href="tel:+34123456789">
              <Phone className="w-4 h-4 mr-2" />
              Llamar ahora
            </a>
          </Button>
        </div>

        <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-3" />
            <p>Mapa del estudio</p>
            <p className="text-sm mt-1">(Incrustar Google Maps aquí)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
