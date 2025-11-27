import Section from "@/components/section";

export const metadata = {
  title: "Mission",
  description: "Our mission and goals for advancing floating offshore wind technology.",
};

export default function Mission() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The Trinity Floating Wind Team is dedicated to advancing floating
            offshore wind technology through innovative engineering, rigorous
            research, and collaborative partnerships. We aim to contribute
            meaningful solutions to the global renewable energy transition while
            providing our members with hands-on experience in cutting-edge
            engineering practices.
          </p>
        </div>
      </Section>

      <Section title="Measurable Goals">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <h3 className="font-semibold mb-2">Active Projects</h3>
            <p className="text-sm text-muted-foreground">
              Ongoing research and development initiatives
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <h3 className="font-semibold mb-2">Team Members</h3>
            <p className="text-sm text-muted-foreground">
              Students, advisors, and alumni
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <h3 className="font-semibold mb-2">Industry Partners</h3>
            <p className="text-sm text-muted-foreground">
              Sponsors and collaborators
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

