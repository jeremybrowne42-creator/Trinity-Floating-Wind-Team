import Section from "@/components/section";
import LogoGrid from "@/components/logo-grid";
import supportersData from "@/data/supporters.json";

export const metadata = {
  title: "Supporters",
  description: "Organizations and individuals supporting our team.",
};

export default function Supporters() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Supporters</h1>
          <p className="text-lg text-muted-foreground">
            We appreciate the support of these organizations and individuals who
            contribute to our mission in various ways.
          </p>
        </div>

        <LogoGrid items={supportersData} />
      </Section>
    </>
  );
}

