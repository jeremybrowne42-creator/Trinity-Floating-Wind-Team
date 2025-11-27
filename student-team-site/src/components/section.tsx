import { ReactNode } from "react";

export default function Section({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-muted-foreground mb-8">{description}</p>
      )}
      {children}
    </section>
  );
}

