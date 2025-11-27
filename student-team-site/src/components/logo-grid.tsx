"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LogoGrid({
  items,
}: {
  items: { name: string; logo: string; url?: string }[];
}) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (src: string) => {
    setImageErrors((prev) => new Set(prev).add(src));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
      {items.map((s) => {
        const hasError = imageErrors.has(s.logo);
        const content = hasError ? (
          <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
            {s.name}
          </div>
        ) : (
          <Image
            src={s.logo}
            alt={s.name}
            width={180}
            height={80}
            className="h-12 w-auto object-contain"
            onError={() => handleImageError(s.logo)}
          />
        );

        return s.url ? (
          <Link
            key={s.name}
            href={s.url}
            className="flex justify-center grayscale hover:grayscale-0 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </Link>
        ) : (
          <div key={s.name} className="flex justify-center grayscale">
            {content}
          </div>
        );
      })}
    </div>
  );
}

