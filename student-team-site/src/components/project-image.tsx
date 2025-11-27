"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`bg-muted rounded-lg flex items-center justify-center ${className || ""}`} style={{ minHeight: `${height}px` }}>
        <span className="text-sm text-muted-foreground">Image</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

