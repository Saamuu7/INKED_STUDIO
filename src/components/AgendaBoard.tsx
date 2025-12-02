import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, ClipboardList, Phone, User } from "lucide-react";

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

const STORAGE_KEY = "reservas_tattoo";

const parseDate = (value?: string) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const buildDateTimeString = (fecha?: string, hora?: string) => {
  if (!fecha) return null;
  return hora ? `${fecha}T${hora}` : fecha;
};

const getComparableDate = (reserva: ReservaEntry) => {
  const composed = buildDateTimeString(reserva.fecha, reserva.horaInicio);
  return parseDate(composed ?? reserva.fecha) ?? parseDate(reserva.createdAt) ?? new Date(0);
};

const formatSlot = (start?: string, end?: string) => {
  if (start && end) return `${start} - ${end}`;
  if (start) return `${start} hrs`;
  if (end) return `${end} hrs`;
  return "Sin horario";
};

const formatDisplayDate = (value?: string) => {
  const date = parseDate(value);
  if (!date) return "Pendiente";
  return date.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
};

export const AgendaBoard = () => {
  const [reservas, setReservas] = useState<ReservaEntry[]>([]);

  useEffect(() => {
    const loadReservas = () => {
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        if (Array.isArray(stored)) {
          setReservas(stored);
        }
      } catch (error) {
        console.error("No se pudo leer la agenda", error);
      }
    };

    loadReservas();

    const handleUpdate = () => loadReservas();
    window.addEventListener("reservas:update", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("reservas:update", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const sortedReservas = useMemo(() => {
    return [...reservas].sort((a, b) => getComparableDate(a).getTime() - getComparableDate(b).getTime());
  }, [reservas]);

  const nextReserva = sortedReservas.find((reserva) => parseDate(reserva.fecha));

  return (
    <section id="agenda" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-10">
        <header className="text-center space-y-3">
          <p className="section-subtitle text-secondary/80">Agenda del estudio</p>
          <h3 className="text-3xl md:text-4xl font-semibold">Control interno de citas confirmadas</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Esta vista muestra las solicitudes recibidas mediante el formulario de reservas. Usa la información para planificar tu semana y dar seguimiento a cada cliente.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-black/40 border-border/40">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-[0.3em] text-muted">Total citas</CardTitle>
              <CardDescription className="text-4xl font-semibold text-secondary">{reservas.length}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-black/40 border-border/40">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-sm uppercase tracking-[0.3em] text-muted">Próxima fecha</CardTitle>
              <div className="flex items-center gap-2 text-lg">
                <CalendarDays className="w-5 h-5 text-secondary" />
                <div className="flex flex-col">
                  <span>{nextReserva ? formatDisplayDate(nextReserva.fecha) : "Sin definir"}</span>
                  {nextReserva && (
                    <span className="text-sm text-muted">
                      {formatSlot(nextReserva.horaInicio, nextReserva.horaFin)}
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="bg-black/40 border-border/40">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-sm uppercase tracking-[0.3em] text-muted">Última solicitud</CardTitle>
              <div className="text-lg">
                {reservas[0]?.nombre ?? "Sin registros"}
              </div>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-border/40 bg-black/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <ClipboardList className="w-5 h-5 text-secondary" />
              Agenda consolidada
            </CardTitle>
            <CardDescription>
              Los clientes aparecen en el orden en que reservaron. Prioriza los que tienen fecha confirmada.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sortedReservas.length === 0 ? (
              <div className="text-center text-muted py-10">
                Aún no hay registros. Cuando recibas reservas mediante el formulario, aparecerán aquí automáticamente.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[160px]">Cliente</TableHead>
                      <TableHead>Contacto</TableHead>
                      <TableHead>Fecha preferida</TableHead>
                      <TableHead>Horario</TableHead>
                      <TableHead>Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedReservas.map((reserva, index) => (
                      <TableRow key={`${reserva.nombre}-${index}`} className="border-border/30">
                        <TableCell className="font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-secondary" />
                          {reserva.nombre}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col text-xs uppercase tracking-[0.2em] text-muted">
                            <span className="flex items-center gap-2 text-sm normal-case">
                              <Phone className="w-4 h-4 text-secondary" />
                              {reserva.telefono}
                            </span>
                            {reserva.email && <span>{reserva.email}</span>}
                          </div>
                        </TableCell>
                        <TableCell>{formatDisplayDate(reserva.fecha)}</TableCell>
                        <TableCell className="text-sm font-medium">
                          {formatSlot(reserva.horaInicio, reserva.horaFin)}
                        </TableCell>
                        <TableCell className="text-sm text-muted max-w-[240px]">
                          {reserva.descripcion}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
