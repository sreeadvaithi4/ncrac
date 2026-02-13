import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { CalendarDays } from "lucide-react";

const dates = [
  { event: "Short Abstracts (250 words)", date: "28th February 2026" },
  { event: "Abstract Acceptance", date: "15th March 2026" },
  { event: "Full Paper Submission", date: "30th June 2026" },
  { event: "Revised Paper Submission", date: "30th September 2026" },
  { event: "Conference Dates", date: "13–16th December 2026" },
];

const ImportantDates = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Important Dates" subtitle="Mark your calendar for these key milestones" />
          <div className="max-w-3xl mx-auto space-y-4">
            {dates.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border-2 border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <CalendarDays className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-primary font-semibold green-underline inline-block text-base">
                    {item.event}
                  </h3>
                  <p className="text-accent font-bold text-lg mt-2">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Info */}
      <section className="section-beige py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Abstracts & Papers" />
          <div className="max-w-3xl mx-auto bg-background rounded-xl p-8 border border-border shadow-sm">
            <p className="text-foreground leading-relaxed mb-4">
              Academicians, industry professionals, and consultants are invited to present their work at NCRAC 2026. Authors are required to submit an abstract of no more than 250 words via email to{" "}
              <a href="mailto:ncrac2026@iittp.ac.in" className="text-accent font-semibold hover:underline">
                ncrac2026@iittp.ac.in
              </a>.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Upon acceptance of the abstract, contributors will be invited to submit a full-length paper, with detailed formatting and submission guidelines to be communicated subsequently. All submissions will be subject to a rigorous peer-review process conducted by a panel of experts from both academia and industry.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-primary">Publication:</strong> Selected papers will be considered for publication in reputed SCI and Scopus indexed Journals.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ImportantDates;
