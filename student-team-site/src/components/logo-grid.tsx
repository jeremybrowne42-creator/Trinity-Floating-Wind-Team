import Image from "next/image";
import Link from "next/link";

export default function LogoGrid({
  items,
}: {
  items: { name: string; logo: string; url?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
      {items.map((s) =>
        s.url ? (
          <Link
            key={s.name}
            href={s.url}
            className="flex justify-center grayscale hover:grayscale-0 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={s.logo}
              alt={s.name}
              width={180}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </Link>
        ) : (
          <div key={s.name} className="flex justify-center grayscale">
            <Image
              src={s.logo}
              alt={s.name}
              width={180}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </div>
        )
      )}
    </div>
  );
}

