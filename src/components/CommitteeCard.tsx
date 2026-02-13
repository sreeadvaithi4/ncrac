import type { CommitteeMember } from "@/data/committeeData";

interface Props {
  member: CommitteeMember;
  index: number;
}

const CommitteeCard = ({ member, index }: Props) => {
  return (
    <div
      className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-center border border-border group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="mx-auto w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-accent">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="text-primary font-bold text-sm md:text-base">{member.name}</h3>
      <p className="text-muted-foreground text-xs mt-1">{member.designation}</p>
      <p className="text-accent text-xs font-medium mt-1">{member.institution}</p>
      {member.description && (
        <p className="text-muted-foreground text-xs mt-2 italic">{member.description}</p>
      )}
      <div className="mt-3 mx-auto w-10 h-0.5 rounded-full bg-accent" />
    </div>
  );
};

export default CommitteeCard;
