import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import LogoGrid from "@/components/logo-grid";
import Gallery from "@/components/gallery";
import sponsorsData from "@/data/sponsors.json";
import galleryData from "@/data/gallery.json";

export default function Home() {
  // Get top 8 sponsors for homepage
  const topSponsors = sponsorsData?.companies?.slice(0, 8) || [];
  
  // Flatten gallery images for homepage teaser (latest 6)
  const galleryImages = galleryData
    ?.flatMap((item) =>
      item.images?.map((img) => ({
        src: img,
        alt: `${item.title} - ${item.caption || ""}`,
      })) || []
    )
    .slice(-6) || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Trinity Floating Wind Team
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Student-led engineering team developing innovative floating offshore
            wind solutions. Advancing renewable energy through research,
            prototyping, and collaboration.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Join the Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sponsors">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Strip */}
      {topSponsors.length > 0 && (
        <Section title="Our Sponsors" description="Supporting our mission">
          <LogoGrid items={topSponsors} />
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/sponsors">View All Sponsors</Link>
            </Button>
          </div>
        </Section>
      )}

      {/* Gallery Teaser */}
      {galleryImages.length > 0 && (
        <Section title="Latest Work" description="Recent projects and prototypes">
          <Gallery items={galleryImages} />
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </Section>
      )}

      {/* Quick Links */}
      <Section title="Explore" description="Learn more about our work">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/awards"
            className="rounded-lg border p-6 transition hover:bg-accent"
          >
            <h3 className="font-semibold mb-2">Awards & Media</h3>
            <p className="text-sm text-muted-foreground">
              Recognition and achievements
            </p>
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border p-6 transition hover:bg-accent"
          >
            <h3 className="font-semibold mb-2">Projects</h3>
            <p className="text-sm text-muted-foreground">
              Research and development initiatives
            </p>
          </Link>
          <Link
            href="/team"
            className="rounded-lg border p-6 transition hover:bg-accent"
          >
            <h3 className="font-semibold mb-2">Team</h3>
            <p className="text-sm text-muted-foreground">
              Meet our members and advisors
            </p>
          </Link>
        </div>
      </Section>
    </>
  );
}

