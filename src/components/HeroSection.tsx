import heroBg from "@/assets/images/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <p className="text-green-accent font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in-up">
          13 – 16 December 2026 · IIT Tirupati
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          National Conference on<br />
          Refrigeration and Air Conditioning
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          NCRAC 2026
        </p>
        <div className="inline-block section-beige rounded-lg px-6 py-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-primary font-semibold text-sm md:text-base">
            Theme: <span className="text-green-accent">Smart & Sustainable HVAC Systems for Viksit Bharat 2047</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
