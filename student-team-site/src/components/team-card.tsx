import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export function TeamCard({
  name,
  role,
  photo,
  linkedin,
}: {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
}) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white/50 dark:bg-neutral-900">
      <Image
        src={photo}
        alt={name}
        width={400}
        height={400}
        className="w-full h-56 object-cover rounded-xl"
      />
      <div className="mt-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        {linkedin && (
          <Link
            href={linkedin}
            className="inline-flex items-center gap-1 mt-2 text-sm underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </Link>
        )}
      </div>
    </div>
  );
}

