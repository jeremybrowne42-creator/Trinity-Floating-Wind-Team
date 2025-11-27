"use client";

import { useState } from "react";
import Section from "@/components/section";
import Gallery from "@/components/gallery";
import galleryData from "@/data/gallery.json";

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique years and tags
  const years = Array.from(
    new Set(galleryData.map((item) => item.year))
  ).sort((a, b) => b - a);
  const tags = Array.from(
    new Set(galleryData.flatMap((item) => item.tags))
  ).sort();

  // Filter gallery items
  const filteredItems = galleryData.filter((item) => {
    if (selectedYear && item.year !== selectedYear) return false;
    if (selectedTag && !item.tags.includes(selectedTag)) return false;
    return true;
  });

  // Flatten to images array
  const galleryImages = filteredItems.flatMap((item) =>
    item.images.map((img) => ({
      src: img,
      alt: `${item.title} - ${item.caption}`,
    }))
  );

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Photos from our projects, prototypes, and team activities.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Year</label>
            <select
              value={selectedYear || ""}
              onChange={(e) =>
                setSelectedYear(e.target.value ? parseInt(e.target.value) : null)
              }
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Tag</label>
            <select
              value={selectedTag || ""}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          {(selectedYear || selectedTag) && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedYear(null);
                  setSelectedTag(null);
                }}
                className="text-sm underline hover:text-foreground"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {galleryImages.length > 0 ? (
          <Gallery items={galleryImages} />
        ) : (
          <p className="text-center text-muted-foreground py-12">
            No images found with the selected filters.
          </p>
        )}
      </Section>
    </>
  );
}

