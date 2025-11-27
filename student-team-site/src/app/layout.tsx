import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trinity Floating Wind Team",
    template: "%s | Trinity Floating Wind Team",
  },
  description:
    "Student-led Trinity College Dublin team developing floating offshore wind innovations.",
  openGraph: {
    title: "Trinity Floating Wind Team",
    description:
      "Advancing floating offshore wind through student-led research, prototyping, and outreach.",
    url: siteUrl,
    siteName: "Trinity Floating Wind Team",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trinity Floating Wind Team",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinity Floating Wind Team",
    description:
      "Student engineers building the future of floating offshore wind.",
    images: ["/opengraph-image.png"],
  },
};

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/projects", label: "Projects" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/press", label: "Press Kit" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-white/80 backdrop-blur dark:bg-neutral-950/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <Link href="/" className="font-semibold tracking-tight">
                Trinity Floating Wind
              </Link>
              <nav aria-label="Primary">
                <ul className="flex items-center gap-4 text-sm font-medium">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="rounded-md px-2 py-1 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contact"
                      className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-muted/30">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
              <div>
                &copy; {new Date().getFullYear()} Trinity Floating Wind Team. All
                rights reserved.
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/sponsors" className="hover:text-foreground">
                  Sponsors
                </Link>
                <Link href="/team" className="hover:text-foreground">
                  Team
                </Link>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
                <Link href="/press" className="hover:text-foreground">
                  Press Kit
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

