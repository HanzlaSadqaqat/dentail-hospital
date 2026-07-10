import Link from "next/link";
import Image from "next/image";
import { getDoctors } from "@/lib/content/doctors";
import { PageHero, CTABand } from "@/components/UI";
import { Arrow } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Meet Our Team — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Team() {
  const doctors = await getDoctors();
  return (
    <>
      <PageHero eyebrow="Meet Our Team" title="The friendly faces behind your care"
        intro="Our experienced dentists and caring dental team are here to serve you and your family at every visit." />
      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={i * 100}>
              <Link href={`/${d.slug}`} className="card group block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-aqua-soft">
                  <Image src={d.image} alt={`Dr. ${d.name}`} width={520} height={400} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">{d.role}</span>
                  <h2 className="mt-1 font-display text-xl font-bold text-petrol">Dr. {d.name}, {d.credential}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{d.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">Read bio <Arrow width={15} height={15} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 rounded-4xl bg-cloud p-7 text-center text-ink/70">
            Behind our doctors is a warm, experienced support team — hygienists, assistants, and front-desk staff who make every visit smooth and comfortable. We can't wait to welcome you.
          </p>
        </Reveal>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
