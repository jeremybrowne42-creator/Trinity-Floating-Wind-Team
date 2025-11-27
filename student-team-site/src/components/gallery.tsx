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
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <button
            key={img.src}
            className="group relative overflow-hidden rounded-lg"
            onClick={() => {
              setActive(i);
              setOpen(true);
            }}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={750}
              className="rounded-lg object-cover aspect-[4/3] w-full h-full transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0">
          {items[active] && (
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

