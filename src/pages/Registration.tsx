import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

const fees = [
  { category: "Delegate", fee: "₹12,000" },
  { category: "Accompanying Person", fee: "₹5,000" },
  { category: "Student (Academic / Research)", fee: "₹7,500" },
  { category: "Student Accompanying Person", fee: "₹3,500" },
  { category: "Industry Participant", fee: "₹15,000" },
  { category: "Overseas Delegate", fee: "USD 400" },
  { category: "Overseas Student Author", fee: "USD 250" },
];

const guidelines = [
  "Registration fee includes conference kit, proceedings, meals, and banquet.",
  "Payment details will be communicated upon abstract acceptance.",
  "At least one author of each accepted paper must register.",
  "Registration will be confirmed after payment verification.",
  "For group registrations, contact ncrac2026@iittp.ac.in.",
];

const Registration = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Registration" subtitle="Register for NCRAC 2026" />

          {/* Fee Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {fees.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <p className="text-primary font-semibold text-sm mb-2">{item.category}</p>
                <p className="text-accent text-2xl font-bold">{item.fee}</p>
              </div>
            ))}
          </div>

          {/* Guidelines */}
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Registration Guidelines" />
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <ul className="space-y-3">
                {guidelines.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center mt-12">
            <a
              href="mailto:ncrac2026@iittp.ac.in?subject=NCRAC 2026 Registration"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-xl"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Registration;
