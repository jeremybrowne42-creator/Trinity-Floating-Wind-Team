import Section from "@/components/section";
import LogoGrid from "@/components/logo-grid";
import sponsorsData from "@/data/sponsors.json";

export const metadata = {
  title: "Sponsors",
  description: "Our valued sponsors and partners supporting our mission.",
};

export default function Sponsors() {
  const tiers = ["Platinum", "Gold", "Silver", "Bronze"];
  
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-lg text-muted-foreground">
            We are grateful to our sponsors who make our research and
            development possible. Interested in supporting us?{" "}
            <a href="/contact" className="underline hover:text-foreground">
              Get in touch
            </a>
            .
          </p>
        </div>

        {tiers.map((tier) => {
          const companies = sponsorsData.companies.filter(
            (c) => c.tier === tier
          );
          if (companies.length === 0) return null;
          
          const tierInfo = sponsorsData.tiers.find((t) => t.name === tier);
          return (
            <div key={tier} className="mb-12">
              <h2 className="text-2xl font-semibold mb-2">{tier} Tier</h2>
              {tierInfo && (
                <p className="text-sm text-muted-foreground mb-6">
                  Minimum contribution: €{tierInfo.min.toLocaleString()}
                </p>
              )}
              <LogoGrid items={companies} />
            </div>
          );
        })}
      </Section>
    </>
  );
}

