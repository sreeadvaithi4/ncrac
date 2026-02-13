import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import CommitteeCard from "@/components/CommitteeCard";
import { committeeData } from "@/data/committeeData";

const OrganizingCommittee = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Organizing Committee"
            subtitle="Distinguished academicians and professionals driving NCRAC 2026"
          />

          {committeeData.map((section, sIdx) => (
            <div key={section.title} className={`mb-16 ${sIdx % 2 !== 0 ? "section-beige rounded-2xl py-12 px-4 md:px-8 -mx-4 md:-mx-8" : ""}`}>
              <h3 className="text-xl md:text-2xl font-bold text-primary green-underline green-underline-center text-center inline-block w-full mb-10">
                {section.title}
              </h3>
              <div
                className={`grid gap-6 ${
                  section.members.length === 1
                    ? "grid-cols-1 max-w-xs mx-auto"
                    : section.members.length === 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                    : section.members.length === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {section.members.map((member, mIdx) => (
                  <CommitteeCard key={member.name + mIdx} member={member} index={mIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default OrganizingCommittee;
