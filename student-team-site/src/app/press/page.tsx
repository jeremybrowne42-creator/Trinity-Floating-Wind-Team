import Link from "next/link";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Press Kit",
  description: "Media resources and brand assets for the Trinity Floating Wind Team.",
};

export default function Press() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Press Kit</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Resources for media, partners, and collaborators.
          </p>

          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Logo Pack</h2>
              <p className="text-muted-foreground mb-4">
                Download our logo in various formats and sizes.
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline">
                  <Link href="/press/logo-pack.zip" download>
                    Download Logo Pack (ZIP)
                  </Link>
                </Button>
                {/* TODO: Add actual logo pack file */}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="h-24 rounded-lg bg-primary mb-2"></div>
                  <p className="text-sm font-medium">Primary</p>
                  <p className="text-xs text-muted-foreground">#0066CC</p>
                </div>
                <div>
                  <div className="h-24 rounded-lg bg-secondary mb-2"></div>
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-xs text-muted-foreground">#006699</p>
                </div>
                <div>
                  <div className="h-24 rounded-lg bg-muted mb-2"></div>
                  <p className="text-sm font-medium">Neutral</p>
                  <p className="text-xs text-muted-foreground">#F5F5F5</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">One-Pager</h2>
              <p className="text-muted-foreground mb-4">
                Download our team overview and key information.
              </p>
              <Button asChild variant="outline">
                <Link href="/press/one-pager.pdf" download>
                  Download One-Pager (PDF)
                </Link>
              </Button>
              {/* TODO: Add actual one-pager PDF */}
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
              <p className="text-muted-foreground mb-4">
                For media inquiries, please contact:
              </p>
              <p>
                <a
                  href="mailto:press@trinityfloatingwind.ie"
                  className="underline hover:text-foreground"
                >
                  press@trinityfloatingwind.ie
                </a>
                {/* TODO: Update with actual press email */}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

