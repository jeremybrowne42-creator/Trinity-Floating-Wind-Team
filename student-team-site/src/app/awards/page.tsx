import Link from "next/link";
import Section from "@/components/section";
import { AwardLogo } from "@/components/award-logo";
import awardsData from "@/data/awards.json";

export const metadata = {
  title: "Awards & Media",
  description: "Recognition and achievements of the Trinity Floating Wind Team.",
};

export default function Awards() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Awards & Media</h1>
          <p className="text-lg text-muted-foreground">
            Recognition for our work and achievements in engineering and
            renewable energy.
          </p>
        </div>

        <div className="space-y-8">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 rounded-lg border p-6"
            >
              <div className="flex-shrink-0">
                <AwardLogo src={award.logo} alt={award.org} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(award.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-muted-foreground mb-2">{award.org}</p>
                {award.summary && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {award.summary}
                  </p>
                )}
                {award.link && (
                  <Link
                    href={award.link}
                    className="text-sm underline hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

