import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { Award, Medal, Trophy } from "lucide-react";

const tiers = [
  {
    name: "Gold Sponsors",
    icon: Trophy,
    description: "Premier visibility with product presentations, exhibitions, and brochure distribution.",
    color: "text-yellow-600",
    border: "border-yellow-400",
  },
  {
    name: "Silver Sponsors",
    icon: Award,
    description: "Prominent branding with poster displays, catalogue distribution, and session mentions.",
    color: "text-gray-500",
    border: "border-gray-400",
  },
  {
    name: "Bronze Sponsors",
    icon: Medal,
    description: "Branding presence with logo placement in proceedings and conference materials.",
    color: "text-orange-700",
    border: "border-orange-400",
  },
];

const Sponsors = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sponsors"
            subtitle="Partner with NCRAC 2026 for unparalleled visibility in the HVAC&R industry"
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`bg-card rounded-xl p-8 border-2 ${tier.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <tier.icon className={`mx-auto mb-4 ${tier.color}`} size={40} />
                <h3 className="text-primary font-bold text-lg mb-3">{tier.name}</h3>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto section-beige rounded-xl p-8 text-center">
            <p className="text-foreground mb-4">
              Detailed information regarding sponsorship and advertising opportunities will be provided in the second announcement.
            </p>
            <p className="text-primary font-semibold">
              Supported by <span className="text-accent">ISHRAE</span> &{" "}
              <span className="text-accent">ASHRAE</span>
            </p>
            <a
              href="mailto:ncrac2026@iittp.ac.in?subject=Sponsorship Inquiry - NCRAC 2026"
              className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsors;
