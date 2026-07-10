import Link from "next/link";
import { getPractice } from "@/lib/content/practice";
import { Phone, Calendar, Arrow } from "./Icons";
import Reveal from "./Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-petrol">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow text-aqua-300">{eyebrow}</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-aqua-soft/80">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export async function CTABand() {
  const practice = await getPractice();
  return (
    <section className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-5xl bg-petrol px-8 py-14 text-center shadow-soft sm:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-aqua/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Ready for a healthier, brighter smile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-aqua-soft/80">
              We're accepting new patients across Bear and the greater Newark area. Book online or call — we'd love to meet you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/appointment" className="btn-coral">
                <Calendar width={16} height={16} /> Request an Appointment
              </Link>
              <a href={practice.phoneHref} className="btn bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20">
                <Phone width={16} height={16} /> {practice.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ServiceCard({ slug, name, blurb, category }: { slug: string; name: string; blurb: string; category: string }) {
  return (
    <Link href={`/services/${slug}`} className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">{category}</span>
      <h3 className="mt-2 font-display text-xl font-bold text-petrol">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{blurb}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
        Learn more <Arrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-petrol sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink/70">{intro}</p>}
    </div>
  );
}
