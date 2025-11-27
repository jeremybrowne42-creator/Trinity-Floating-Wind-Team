import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"; // TODO: Update with actual domain

  const routes = [
    "",
    "/mission",
    "/gallery",
    "/awards",
    "/sponsors",
    "/supporters",
    "/team",
    "/projects",
    "/contact",
    "/press",
  ];

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projectRoutes,
  ];
}

