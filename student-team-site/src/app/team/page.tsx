import Section from "@/components/section";
import { TeamCard } from "@/components/team-card";
import teamData from "@/data/team.json";

export const metadata = {
  title: "Team",
  description: "Meet our team members, advisors, and alumni.",
};

export default function Team() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground">
            Meet the students, advisors, and alumni driving our mission forward.
          </p>
        </div>

        {teamData.leads.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Team Leads</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamData.leads.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        )}

        {teamData.members.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Members</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamData.members.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        )}

        {teamData.advisors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Advisors</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamData.advisors.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        )}

        {teamData.alumni.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Alumni</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamData.alumni.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}

