import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, CalendarDays, Edit2, Lock, Plus, ShieldCheck, Trash2 } from "lucide-react";

interface ReservaEntry {
  nombre: string;
  email?: string;
  telefono: string;
  fecha?: string;
  horaInicio?: string;
  horaFin?: string;
  descripcion: string;
  createdAt?: string;
}

interface ReservaWithIndex extends ReservaEntry {
  index: number;
}

const STORAGE_KEY = "reservas_tattoo";
const AUTH_KEY = "admin_auth";
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";

const parseDate = (value?: string) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const formatDateForInput = (date: Date) => date.toISOString().split("T")[0];

const formatSlot = (start?: string, end?: string) => {
  if (start && end) return `${start} - ${end}`;
  if (start) return `${start} hrs`;
  if (end) return `${end} hrs`;
  return "Sin horario";
};

const timeValue = (value?: string) => {
  if (!value) return Number.MAX_SAFE_INTEGER;
  const [hours, minutes] = value.split(":");
  return parseInt(hours ?? "0", 10) * 60 + parseInt(minutes ?? "0", 10);
};

const isSameDay = (input: string | undefined, selected: Date) => {
  const date = parseDate(input);
  if (!date) return false;
  return (
    date.getFullYear() === selected.getFullYear() &&
    date.getMonth() === selected.getMonth() &&
    date.getDate() === selected.getDate()
  );
};

const Admin = () => {
  const { toast } = useToast();
  const [reservas, setReservas] = useState<ReservaEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem(AUTH_KEY) === "true");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [form, setForm] = useState<ReservaEntry>({
    nombre: "",
    email: "",
    telefono: "",
    fecha: formatDateForInput(new Date()),
    horaInicio: "",
    horaFin: "",
    descripcion: "",
    createdAt: undefined,
  });

  useEffect(() => {
    if (!isAuthenticated) return;
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(stored)) {
      setReservas(stored);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, fecha: formatDateForInput(selectedDate) }));
  }, [selectedDate]);

  const persist = (next: ReservaEntry[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setReservas(next);
    window.dispatchEvent(new Event("reservas:update"));
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setLoginError(null);
  };

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { username, password } = loginForm;
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem(AUTH_KEY, "true");
      setLoginError(null);
      setIsAuthenticated(true);
      toast({ title: "Acceso concedido", description: "Bienvenido al panel interno" });
    } else {
      setLoginError("Credenciales incorrectas");
      toast({
        title: "Error de acceso",
        description: "Usuario o contraseña incorrectos",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setLoginForm({ username: "", password: "" });
    setReservas([]);
    resetForm();
  };

  const bookedDates = useMemo(() => {
    return reservas
      .map((reserva) => parseDate(reserva.fecha))
      .filter((date): date is Date => Boolean(date));
  }, [reservas]);

  const dailyReservas: ReservaWithIndex[] = useMemo(() => {
    return reservas
      .map((reserva, index) => ({ ...reserva, index }))
      .filter((reserva) => isSameDay(reserva.fecha, selectedDate))
      .sort((a, b) => timeValue(a.horaInicio) - timeValue(b.horaInicio));
  }, [reservas, selectedDate]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setEditingIndex(null);
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      fecha: formatDateForInput(selectedDate),
      horaInicio: "",
      horaFin: "",
      descripcion: "",
      createdAt: undefined,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !form.nombre.trim() ||
      !form.telefono.trim() ||
      !form.descripcion.trim() ||
      !form.horaInicio?.trim() ||
      !form.horaFin?.trim()
    ) {
      toast({
        title: "Completa los campos obligatorios",
        description: "Nombre, teléfono, horario y descripción son necesarios",
        variant: "destructive",
      });
      return;
    }

    if (form.horaInicio >= form.horaFin) {
      toast({
        title: "Revisa el horario",
        description: "La hora de fin debe ser posterior a la de inicio",
        variant: "destructive",
      });
      return;
    }

    if (editingIndex !== null) {
      const updated = [...reservas];
      updated[editingIndex] = { ...updated[editingIndex], ...form };
      persist(updated);
      toast({ title: "Cita actualizada" });
    } else {
      const next: ReservaEntry = {
        ...form,
        createdAt: new Date().toISOString(),
      };
      persist([next, ...reservas]);
      toast({ title: "Cita creada" });
    }

    resetForm();
  };

  const handleEdit = (entry: ReservaWithIndex) => {
    setEditingIndex(entry.index);
    setSelectedDate(parseDate(entry.fecha || "") ?? new Date());
    const { index, ...rest } = entry;
    setForm({
      ...rest,
      horaInicio: rest.horaInicio ?? "",
      horaFin: rest.horaFin ?? "",
    });
  };

  const handleDelete = (index: number) => {
    const filtered = reservas.filter((_, idx) => idx !== index);
    persist(filtered);
    toast({ title: "Cita eliminada" });
    if (editingIndex === index) {
      resetForm();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-border/40 bg-black/50 backdrop-blur">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
              <Lock className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                Acceso restringido
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </CardTitle>
              <CardDescription>
                Introduce las credenciales de administrador para continuar.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  name="username"
                  value={loginForm.username}
                  onChange={handleLoginChange}
                  autoComplete="username"
                  placeholder="admin"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  autoComplete="current-password"
                  placeholder="admin"
                />
              </div>
              {loginError && (
                <p className="text-sm text-destructive">{loginError}</p>
              )}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-muted">Panel interno · Admin</p>
              <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
                <CalendarClock className="w-7 h-7 text-secondary" />
                Agenda del tatuador
              </h1>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </div>
          <p className="text-muted">
            Gestiona todas las citas, crea huecos personalizados o edita la información recibida desde la web pública.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-8">
          <Card className="border-border/40 bg-black/40">
            <CardHeader>
              <CardTitle>Calendario maestro</CardTitle>
              <CardDescription>Selecciona un día para ver las citas asociadas.</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                modifiers={{ booked: bookedDates }}
                modifiersClassNames={{ booked: "bg-secondary/40 text-secondary-foreground rounded-full" }}
                className="rounded-3xl border border-border/30 bg-background"
              />
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-black/40">
            <CardHeader>
              <CardTitle>{editingIndex !== null ? "Editar cita" : "Crear nueva cita"}</CardTitle>
              <CardDescription>
                Los campos marcados con * son obligatorios. La fecha por defecto es la seleccionada en el calendario.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Cliente" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+34 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" value={form.email} onChange={handleChange} placeholder="cliente@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fecha">Fecha *</Label>
                    <Input id="fecha" name="fecha" type="date" value={form.fecha} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="horaInicio">Hora inicio *</Label>
                    <Input
                      id="horaInicio"
                      name="horaInicio"
                      type="time"
                      value={form.horaInicio}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="horaFin">Hora fin *</Label>
                    <Input
                      id="horaFin"
                      name="horaFin"
                      type="time"
                      value={form.horaFin}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción *</Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Detalles de estilo, zona, medidas, referencias..."
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" className="flex items-center gap-2">
                    {editingIndex !== null ? (
                      <>
                        <Edit2 className="w-4 h-4" /> Guardar cambios
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> Crear cita
                      </>
                    )}
                  </Button>
                  {editingIndex !== null && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancelar edición
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-secondary" />
            <p className="text-lg font-semibold">
              Citas del {selectedDate.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
            </p>
            <span className="text-sm text-muted">{dailyReservas.length} cita(s)</span>
          </div>
          <Card className="border-border/40 bg-black/40">
            <CardContent className="pt-6">
              {dailyReservas.length === 0 ? (
                <p className="text-muted text-sm">No hay citas programadas para este día.</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Contacto</TableHead>
                        <TableHead>Horario</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dailyReservas.map((reserva) => (
                        <TableRow key={`${reserva.index}-${reserva.nombre}`} className="border-border/20">
                          <TableCell className="font-medium">{reserva.nombre}</TableCell>
                          <TableCell>
                            <div className="flex flex-col text-sm">
                              <span>{reserva.telefono}</span>
                              {reserva.email && <span className="text-muted text-xs">{reserva.email}</span>}
                            </div>
                          </TableCell>
                          <TableCell className="text-sm font-medium">
                            {formatSlot(reserva.horaInicio, reserva.horaFin)}
                          </TableCell>
                          <TableCell className="text-sm text-muted whitespace-pre-wrap">
                            {reserva.descripcion}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-2">
                              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handleEdit(reserva)}>
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="destructive"
                                className="h-8 w-8"
                                onClick={() => handleDelete(reserva.index)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Admin;
