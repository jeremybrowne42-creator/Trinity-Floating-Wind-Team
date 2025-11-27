import Link from "next/link";
import Section from "@/components/section";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: "Projects",
  description: "Our research and development projects.",
};

export default function Projects() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Our ongoing and completed research and development initiatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-lg border p-6 transition hover:bg-accent"
            >
              <div className="text-sm text-muted-foreground mb-2">
                {project.year}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.summary}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

