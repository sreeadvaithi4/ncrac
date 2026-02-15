import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

const Sponsors = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Sponsors" />

          <div className="max-w-2xl mx-auto text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Coming Soon</h2>
            <p className="text-muted-foreground text-lg">
              Sponsorship details will be announced shortly.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsors;
