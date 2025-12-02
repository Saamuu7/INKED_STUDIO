import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send, Calendar, User, Phone, Mail, Sparkles, Clock } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  descripcion: string;
}

const initialFormState: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  fecha: "",
  horaInicio: "",
  horaFin: "",
  descripcion: "",
};

export const BookingForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>(initialFormState);
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
    if (!form.horaInicio.trim()) newErrors.horaInicio = "Indica hora de inicio.";
    if (!form.horaFin.trim()) newErrors.horaFin = "Indica hora de fin.";
    if (!newErrors.horaInicio && !newErrors.horaFin && form.horaInicio && form.horaFin && form.horaInicio >= form.horaFin) {
      newErrors.horaFin = "La hora de fin debe ser posterior.";
    }
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
    window.dispatchEvent(new Event("reservas:update"));

    toast({
      title: "¡Reserva recibida!",
      description: "Te contactaremos pronto por teléfono o WhatsApp.",
    });

    setForm(initialFormState);
    setIsSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/34123456789?text=${encodeURIComponent(
    "Hola, quiero reservar una cita para un tatuaje"
  )}`;

  return (
    <section id="reservas" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />
      <div className="absolute -top-32 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-14">
          <p className="section-subtitle text-secondary/80">Agenda</p>
          <h3 className="text-3xl md:text-5xl font-semibold">Reserva tu ritual de tatuaje</h3>
          <p className="text-muted max-w-3xl mx-auto">
            Responde este formulario para que podamos asesorarte con disponibilidad, estimado de tiempo y recomendaciones previas a la sesión.
          </p>
        </div>

        <Card className="glass border-border/40 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 pointer-events-none" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="w-6 h-6 text-secondary" />
              Agenda privada
            </CardTitle>
            <CardDescription className="text-base text-muted">
              Respondemos en menos de 24h vía WhatsApp o llamada para confirmar detalles.
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

                <div className="space-y-2">
                  <Label htmlFor="horaInicio" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Hora inicio *
                  </Label>
                  <Input
                    id="horaInicio"
                    name="horaInicio"
                    type="time"
                    value={form.horaInicio}
                    onChange={handleChange}
                    className={`glass border-border/50 focus:border-primary ${errors.horaInicio ? "border-destructive" : ""}`}
                  />
                  {errors.horaInicio && (
                    <p className="text-destructive text-sm">{errors.horaInicio}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horaFin" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Hora fin *
                  </Label>
                  <Input
                    id="horaFin"
                    name="horaFin"
                    type="time"
                    value={form.horaFin}
                    onChange={handleChange}
                    className={`glass border-border/50 focus:border-primary ${errors.horaFin ? "border-destructive" : ""}`}
                  />
                  {errors.horaFin && (
                    <p className="text-destructive text-sm">{errors.horaFin}</p>
                  )}
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
