import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/content/services";
import { getPractice } from "@/lib/content/practice";
import { CTABand } from "@/components/UI";
import { Check, Calendar, Phone, Arrow } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = await getServiceBySlug(params.slug);
  return { title: s ? `${s.name} in Bear, DE` : "Service" };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const [service, services, practice] = await Promise.all([
    getServiceBySlug(params.slug),
    getServices(),
    getPractice(),
  ]);
  if (!service) notFound();
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-petrol">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <div>
              <Link href="/services" className="text-sm font-semibold text-aqua-300 hover:text-white">← All services</Link>
              <span className="eyebrow mt-4 block text-aqua-300">{service.category} Dentistry</span>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{service.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-aqua-soft/80">{service.blurb}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/appointment" className="btn-coral"><Calendar width={16} height={16} /> Request Appointment</Link>
                <a href={practice.phoneHref} className="btn bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"><Phone width={16} height={16} /> {practice.phone}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-5xl shadow-soft ring-1 ring-white/10">
              <Image src={service.image} alt={service.name} width={620} height={460} className="h-full w-full object-cover" unoptimized />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div>
              {service.body.map((p, i) => (
                <p key={i} className="mb-5 text-lg leading-relaxed text-ink/75">{p}</p>
              ))}
              {service.highlights && (
                <div className="mt-8 rounded-4xl bg-cloud p-7">
                  <h2 className="font-display text-xl font-bold text-petrol">What's included</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-ink/75"><Check width={18} height={18} className="shrink-0 text-aqua" /> {h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card p-6">
                <h3 className="font-display text-lg font-bold text-petrol">Have questions?</h3>
                <p className="mt-2 text-sm text-ink/65">If you have any questions about {service.name.toLowerCase()}, please call our office — we're happy to help.</p>
                <a href={practice.phoneHref} className="btn-petrol mt-4 w-full"><Phone width={16} height={16} /> {practice.phone}</a>
              </div>
              {related.length > 0 && (
                <div className="mt-5 card p-6">
                  <h3 className="font-display text-lg font-bold text-petrol">Related services</h3>
                  <ul className="mt-3 space-y-1">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/services/${r.slug}`} className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-cloud hover:text-petrol">
                          {r.name} <Arrow width={15} height={15} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Reveal>
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
