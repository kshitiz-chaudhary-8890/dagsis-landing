import Image from "next/image";
import { trustedByContent } from "@/content";
import { Container } from "@/components/ui";
import { Marquee } from "@/components/shared/Marquee";

/**
 * Social proof strip. Hidden by `featureFlags.showTrustedBy` (see config/site.ts)
 * until logos and numbers are verified.
 */
export function TrustedBy() {
  const { title, logos, stats } = trustedByContent;

  return (
    <section className="border-y border-ink-100 bg-surface-raised py-12">
      <Container>
        <p className="text-center text-sm font-medium text-ink-500">{title}</p>
        <Marquee className="mt-8" gap="3.5rem" speed={40} fadeEdges>
          {logos.map((logo) =>
            logo.src ? (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={32}
                className="h-8 w-auto opacity-60 grayscale"
              />
            ) : (
              <span key={logo.name} className="text-lg font-semibold whitespace-nowrap text-ink-400">
                {logo.name}
              </span>
            ),
          )}
        </Marquee>
        <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-sm text-ink-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink-900">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
