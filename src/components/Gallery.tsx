import { Sparkles } from "lucide-react";

export const Gallery = () => {
  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${
      [
        "1611501275019-9b5cda994e8d",
        "1565058379802-bbe93b2f703a",
        "1598371611186-ccae61a2f93e",
        "1590246814883-57c511f1e5a6",
        "1568515387631-8b650bbcdb90",
        "1610000647302-57929e59dd51",
        "1562016600-ece13e8ba570",
        "1598371611186-ccae61a2f93e",
      ][i]
    }?q=80&w=800`,
  }));

  return (
    <section id="galeria" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Nuestro portfolio</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Galería</span> de trabajos
          </h3>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Cada tatuaje cuenta una historia única. Descubre algunos de nuestros trabajos más destacados.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-medium text-foreground">Diseño #{image.id}</p>
                <p className="text-xs text-muted-foreground">Ver detalles</p>
              </div>
              <img
                alt={`Galería ${image.id}`}
                src={image.src}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
