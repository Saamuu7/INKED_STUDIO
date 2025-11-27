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
    <section id="galeria" className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-bold">Galería</h3>
        <p className="text-muted-foreground mt-3 text-lg">
          Algunos de nuestros trabajos recientes
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, i) => (
          <div
            key={image.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-glow transition-smooth hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <img
              alt={`Galería ${image.id}`}
              src={image.src}
              className="w-full h-48 md:h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
