"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (src: string) => {
    setImageErrors((prev) => new Set(prev).add(src));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img, i) => {
          const hasError = imageErrors.has(img.src);
          return (
            <button
              key={img.src}
              className="group relative overflow-hidden rounded-lg"
              onClick={() => {
                setActive(i);
                setOpen(true);
              }}
              aria-label={`View ${img.alt}`}
            >
              {hasError ? (
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center aspect-[4/3] text-muted-foreground">
                  <span className="text-sm">Image</span>
                </div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={750}
                  className="rounded-lg object-cover aspect-[4/3] w-full h-full transition-transform group-hover:scale-105"
                  onError={() => handleImageError(img.src)}
                />
              )}
            </button>
          );
        })}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0">
          {items[active] && !imageErrors.has(items[active].src) && (
            <Image
              src={items[active].src}
              alt={items[active].alt}
              width={1600}
              height={1200}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

