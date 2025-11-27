"use client";

import Image from "next/image";
import { useState } from "react";

export function AwardLogo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="h-20 w-20 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
        Logo
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      className="h-20 w-auto object-contain"
      onError={() => setImageError(true)}
    />
  );
}

