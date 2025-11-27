import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Save to localStorage
    const reservas = JSON.parse(localStorage.getItem("reservas_tattoo") || "[]");
    reservas.unshift({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("reservas_tattoo", JSON.stringify(reservas));

    toast({
      title: "¡Reserva recibida!",
      description: "Te contactaremos pronto por teléfono o WhatsApp.",
    });

    setForm({ nombre: "", email: "", telefono: "", fecha: "", descripcion: "" });
  };

  const whatsappUrl = `https://wa.me/34123456789?text=${encodeURIComponent(
    "Hola, quiero reservar una cita para un tatuaje"
  )}`;

  return (
    <section id="reservas" className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-bold">Reserva tu cita</h3>
        <p className="text-muted-foreground mt-3 text-lg">
          Cuéntanos sobre tu idea y te confirmamos disponibilidad
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Formulario de reserva</CardTitle>
          <CardDescription>
            Completa los datos y nos pondremos en contacto contigo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={errors.nombre ? "border-destructive" : ""}
                />
                {errors.nombre && (
                  <p className="text-destructive text-sm">{errors.nombre}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+34 6xx xxx xxx"
                  className={errors.telefono ? "border-destructive" : ""}
                />
                {errors.telefono && (
                  <p className="text-destructive text-sm">{errors.telefono}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (opcional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha preferida</Label>
                <Input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="descripcion">Descripción de la idea *</Label>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tamaño, ubicación en el cuerpo, estilo, referencias..."
                  className={errors.descripcion ? "border-destructive" : ""}
                />
                {errors.descripcion && (
                  <p className="text-destructive text-sm">{errors.descripcion}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" size="lg">
                Enviar reserva
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageSquare className="w-4 h-4" />
                  Reservar por WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
