import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/section";
import { ProjectImage } from "@/components/project-image";
import projectsData from "@/data/projects.json";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="text-sm text-muted-foreground mb-2">{project.year}</div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {project.summary}
          </p>

          {project.hero && (
            <div className="mb-8">
              <ProjectImage
                src={project.hero}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {project.content && (
            <div
              className="prose prose-neutral dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}

          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Images</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.map((img, i) => (
                  <ProjectImage
                    key={i}
                    src={img}
                    alt={`${project.title} - Image ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

