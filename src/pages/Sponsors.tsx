import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { HandCoins } from "lucide-react";

const Sponsors = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sponsors"
            subtitle="Sponsorship opportunities will be announced soon"
          />
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-xl p-12 border border-border shadow-sm">
              <HandCoins className="mx-auto text-accent mb-4" size={48} />
              <p className="text-primary font-semibold text-lg mb-2">Coming Soon</p>
              <p className="text-muted-foreground">
                Sponsorship details and partnership opportunities will be updated here. Stay tuned for announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsors;
