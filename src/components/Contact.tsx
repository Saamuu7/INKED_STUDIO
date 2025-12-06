import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare, Clock, Headphones, Sparkles, Instagram, Facebook, Send } from "lucide-react";

// Helper component for social media links
const SocialLink = ({ icon: Icon, href, name }: { icon: any, href: string, name: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-300"
  >
    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
  </a>
);

export const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Enviar mensaje",
      href: "https://wa.me/34123456789",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@estudiotattoo.com",
      href: "mailto:info@estudiotattoo.com",
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Calle Principal 123, Madrid",
      href: "#mapa", // Anchor link to the map section
    },
  ];

  const schedule = [
    { day: "Lunes - Viernes", hours: "10:00 - 20:00" },
    { day: "Sábados", hours: "11:00 - 18:00" },
    { day: "Domingos", hours: "Cerrado" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "TikTok", href: "https://tiktok.com", icon: Send }, // Using 'Send' icon as a placeholder for TikTok
  ];

  return (
    <section id="contacto" className="relative py-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">Estamos aquí para ti</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ¿Tienes dudas sobre tu próximo tatuaje o quieres agendar una cita? Estamos disponibles para ayudarte en todo momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="group p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-muted-foreground mb-1">{item.title}</p>
                    <p className="font-semibold text-foreground text-xl">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transform hover:-translate-y-1 transition-transform duration-300"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* Right Column: Schedule and Socials */}
          <div className="lg:col-span-2 space-y-8">
            {/* Schedule Card */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl">Horario</h3>
                  <p className="text-muted-foreground text-sm">de atención</p>
                </div>
              </div>

              <div className="space-y-4">
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className={`font-semibold ${item.hours === "Cerrado" ? "text-destructive" : "text-foreground"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Headphones className="w-4 h-4 text-primary" />
                  <span>Atención personalizada garantizada</span>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-bold text-foreground text-xl mb-4">Síguenos</h3>
              <div className="space-y-3">
                {socialLinks.map(link => <SocialLink key={link.name} {...link} />)}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - More centered and prominent */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">¿Listo para tu próximo tatuaje?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="pulse-glow shadow-lg uppercase tracking-widest" asChild>
              <a href="tel:+34123456789" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/5 hover:text-primary uppercase tracking-widest"
              asChild
            >
              <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Embedded Map */}
        <div id="mapa" className="mt-20 relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-30" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-background h-96 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Ubicación del estudio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.640263914959!2d-3.703790184592237!3d40.41677537936497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a1ABCAD1%3A0x2ad01f786c4ade53!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1671234567890!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="absolute bottom-4 right-4 glass p-4 rounded-lg bg-black/80 text-right">
            <p className="text-foreground font-semibold">Calle Principal 123</p>
            <p className="text-muted-foreground">28001 Madrid, España</p>
          </div>
        </div>
      </div>
    </section>
  );
};
