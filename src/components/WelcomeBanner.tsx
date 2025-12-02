import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Video } from "lucide-react";

const stats = [
	{ label: "Años tatuando", value: "+12" },
	{ label: "Clientes felices", value: "3.5K" },
	{ label: "Estilos dominados", value: "9" },
];

export const WelcomeBanner = () => {
	const handleScrollDown = () => {
		const heroSection = document.getElementById("experiencia");
		heroSection?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="inicio" className="relative min-h-screen w-full flex items-center overflow-hidden py-12">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1601572592091-3a8153fe8c46?q=80&w=1920"
					alt="Artista tatuando un brazo"
					className="w-full h-full object-cover"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/90" />
				<div className="noise-overlay" />
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col gap-8">
				<p className="text-sm md:text-base uppercase tracking-[0.6em] text-secondary/80 flex items-center gap-3">
					<span className="w-12 h-px bg-gradient-to-r from-transparent via-secondary/60 to-secondary" />
					Tattoo atelier contemporáneo
				</p>

				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-semibold">
						Marcamos historias con trazos de <span className="text-gradient">tinta consciente</span>
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl">
						Diseños hechos a medida, higiene quirúrgica y un proceso creativo guiado por artistas que viven el tatuaje como ritual.
						Trae tu idea, nosotros la elevamos.
					</p>
				</div>

				<div className="flex flex-wrap gap-4">
					<Button size="lg" className="uppercase tracking-[0.4em]">
						<a href="#reservas" className="flex items-center gap-3">
							<Sparkles className="w-5 h-5" />
							Reserva tu cita
						</a>
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-secondary/80 text-secondary hover:bg-secondary/10 uppercase tracking-[0.3em]"
						asChild
					>
						<a href="#galeria" className="flex items-center gap-3">
							<Video className="w-5 h-5" />
							Ver portafolio
						</a>
					</Button>
				</div>

				<div className="grid grid-cols-3 gap-4 max-w-2xl">
					{stats.map((stat) => (
						<div key={stat.label} className="border border-border/60 rounded-2xl p-4 text-center bg-black/30">
							<p className="text-3xl font-semibold text-secondary">{stat.value}</p>
							<p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
						</div>
					))}
				</div>
			</div>

			<button
				onClick={handleScrollDown}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-secondary transition-colors flex flex-col items-center gap-3"
				aria-label="Desplazar hacia experiencia"
			>
				<span className="text-xs uppercase tracking-[0.4em]">Explorar estudio</span>
				<div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
					<ChevronDown className="w-5 h-5 animate-bounce" />
				</div>
			</button>
		</section>
	);
};

