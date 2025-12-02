import { Camera, Sparkles } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=800",
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800",
  "https://images.unsplash.com/photo-1598371611186-ccae61a2f93e?q=80&w=800",
  "https://images.unsplash.com/photo-1590246814883-57c511f1e5a6?q=80&w=800",
  "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=800",
  "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800",
];

export const Gallery = () => {
  return (
    <section id="galeria" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="section-subtitle text-secondary/80">Galería</p>
            <h3 className="text-3xl md:text-5xl font-semibold">Selección curada de piezas recientes</h3>
            <p className="text-muted max-w-2xl mt-4">
              Piezas blackwork, microrealismo, neo trad y japonesa. Cada sesión es documentada para que puedas revivirla y compartirla.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Camera className="w-5 h-5 text-secondary" />
            Sesiones fotográficas con iluminación editorial.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:row-span-2 relative rounded-[32px] overflow-hidden border border-border/40">
            <img src={galleryImages[0]} alt="Tatuaje destacado" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Serie roja</p>
              <p className="text-2xl font-semibold">Sombras orgánicas</p>
            </div>
          </div>
          {galleryImages.slice(1).map((src, index) => (
            <div key={src} className="group relative overflow-hidden rounded-3xl border border-border/30 bg-black/40">
              <img src={src} alt={`Tattoo ${index + 2}`} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs uppercase tracking-[0.4em] text-muted">Pieza #{index + 2}</p>
                <p className="text-sm font-semibold">Colección Ink Atlas</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.4em] text-muted">
          <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-secondary" /> Blackwork</span>
          <span>Neo Trad</span>
          <span>Realismo</span>
          <span>Fine line</span>
        </div>
      </div>
    </section>
  );
};
