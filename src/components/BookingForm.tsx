import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send, Calendar, User, Phone, Mail, Sparkles } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  descripcion: string;
}

export const BookingForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!form.nombre.trim()) newErrors.nombre = "Ingresa tu nombre.";
    if (!form.telefono.trim()) newErrors.telefono = "Ingresa un teléfono.";
    if (!form.descripcion.trim())
      newErrors.descripcion = "Cuéntanos la idea del tatuaje.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const reservas = JSON.parse(localStorage.getItem("reservas_tattoo") || "[]");
    reservas.unshift({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("reservas_tattoo", JSON.stringify(reservas));

    toast({
      title: "¡Reserva recibida!",
      description: "Te contactaremos pronto por teléfono o WhatsApp.",
    });

    setForm({ nombre: "", email: "", telefono: "", fecha: "", descripcion: "" });
    setIsSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/34123456789?text=${encodeURIComponent(
    "Hola, quiero reservar una cita para un tatuaje"
  )}`;

  return (
    <section id="reservas" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Agenda tu sesión</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold">
            Reserva tu <span className="text-gradient">cita</span>
          </h3>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te confirmamos disponibilidad lo antes posible
          </p>
        </div>

        <Card className="glass border-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="w-6 h-6 text-primary" />
              Formulario de reserva
            </CardTitle>
            <CardDescription className="text-base">
              Completa los datos y nos pondremos en contacto contigo en menos de 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nombre *
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`glass border-border/50 focus:border-primary ${errors.nombre ? "border-destructive" : ""}`}
                  />
                  {errors.nombre && (
                    <p className="text-destructive text-sm">{errors.nombre}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+34 6xx xxx xxx"
                    className={`glass border-border/50 focus:border-primary ${errors.telefono ? "border-destructive" : ""}`}
                  />
                  {errors.telefono && (
                    <p className="text-destructive text-sm">{errors.telefono}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email (opcional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fecha" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Fecha preferida
                  </Label>
                  <Input
                    id="fecha"
                    name="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={handleChange}
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="descripcion" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Descripción de la idea *
                  </Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos los detalles: tamaño aproximado, ubicación en el cuerpo, estilo preferido, referencias o inspiración..."
                    className={`glass border-border/50 focus:border-primary resize-none ${errors.descripcion ? "border-destructive" : ""}`}
                  />
                  {errors.descripcion && (
                    <p className="text-destructive text-sm">{errors.descripcion}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="shadow-lg hover:shadow-xl transition-all pulse-glow"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar reserva
                    </span>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  asChild
                  className="glass border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 group"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                    Reservar por WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
