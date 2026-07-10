import Link from "next/link";
import Image from "next/image";
import { getPractice } from "@/lib/content/practice";
import { getServices } from "@/lib/content/services";
import { getDoctors } from "@/lib/content/doctors";
import { getDifferentiators } from "@/lib/content/differentiators";
import { getTechnology } from "@/lib/content/technology";
import { Phone, Calendar, Arrow, Star, Check, Pin, Clock } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { ServiceCard, SectionHeading, CTABand } from "@/components/UI";

export const revalidate = 3600;

const FEATURED_SLUGS = ["general-dentistry", "family-dentistry", "cosmetic-dentistry", "teeth-whitening", "dental-exam", "dental-implants", "dental-fillings", "dental-crowns", "orthodontics"];

export default async function Home() {
  const [practice, services, doctors, differentiators, technology] = await Promise.all([
    getPractice(),
    getServices(),
    getDoctors(),
    getDifferentiators(),
    getTechnology(),
  ]);
  const featured = services.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const teamImage = practice.teamImage;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-aqua-soft blur-[80px]" />
        <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <Reveal>
              <span className="eyebrow">Welcome to Delaware Dental Solutions</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-petrol sm:text-6xl">
                Your family's{" "}
                <span className="relative whitespace-nowrap text-coral">
                  healthiest smile
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C75 3 225 3 298 9" stroke="#19B5A0" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                starts in Bear, DE.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Gentle, modern, family & cosmetic dentistry from Dr. Weidong Yang and Dr. Emma Yang. Attentive care, state-of-the-art technology, and a team that treats you like a neighbor.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/appointment" className="btn-coral text-base">
                  <Calendar width={18} height={18} /> Request an Appointment
                </Link>
                <a href={practice.phoneHref} className="btn-ghost text-base">
                  <Phone width={18} height={18} /> {practice.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/70">
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex text-coral">{[0, 1, 2, 3, 4].map((i) => <Star key={i} width={16} height={16} />)}</span>
                  <span className="font-semibold text-petrol">5-Star Rated</span> on Google
                </span>
                <span className="inline-flex items-center gap-1.5"><Check width={16} height={16} className="text-aqua" /> Se Habla Español</span>
                <span className="inline-flex items-center gap-1.5"><Check width={16} height={16} className="text-aqua" /> Accepting New Patients</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-5xl shadow-soft ring-1 ring-petrol/10">
                <Image src={teamImage} alt="The Delaware Dental Solutions team in Bear, DE" width={760} height={620} className="h-full w-full object-cover" unoptimized priority />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-4xl bg-white p-5 shadow-card ring-1 ring-petrol/5 sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-soft text-petrol"><Pin width={22} height={22} /></span>
                  <div>
                    <p className="font-display text-sm font-bold text-petrol">131 Becks Woods Drive</p>
                    <p className="text-xs text-ink/60">Bear, DE 19701</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-petrol/10 bg-white">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="flex gap-3">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-aqua-soft text-petrol"><Check width={16} height={16} /></span>
                <div>
                  <h3 className="font-display text-sm font-bold text-petrol">{d.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Treatments & Services" title="Complete care for every smile in the family" intro="From routine cleanings to implants and cosmetic makeovers — comprehensive dentistry under one roof." />
          <Link href="/services" className="btn-ghost">View all services <Arrow width={16} height={16} /></Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard slug={s.slug} name={s.name} blurb={s.blurb} category={s.category} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section className="bg-cloud py-20">
        <div className="container-x">
          <SectionHeading center eyebrow="Meet the Doctors" title="Two generations of dental expertise" intro="A father-and-daughter team bringing specialist training and hometown care to Bear, Delaware." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 120}>
                <div className="card flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
                  <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-4xl bg-aqua-soft ring-4 ring-white sm:mx-0">
                    <Image src={d.image} alt={`Dr. ${d.name}, ${d.credential}`} width={200} height={200} className="h-full w-full object-cover" unoptimized />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">{d.role}</span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-petrol">Dr. {d.name}, {d.credential}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.short}</p>
                    <Link href={`/${d.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                      Read full bio <Arrow width={16} height={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="State-of-the-Art Technology" title="Modern tools for precise, comfortable care" intro="Our office uses advanced dental technology to deliver the best possible care, with clearer diagnostics and quicker healing." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technology.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 70}>
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-cloud">
                  <Image src={t.image} alt={t.name} width={400} height={300} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" unoptimized />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-petrol">{t.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8"><Link href="/technology" className="btn-petrol">Explore our technology <Arrow width={16} height={16} /></Link></div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="container-x pb-20">
        <Reveal>
          <div className="grid items-center gap-10 rounded-5xl bg-white p-8 shadow-card ring-1 ring-petrol/5 sm:p-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="eyebrow">Amazing Reviews</span>
              <div className="mt-3 flex text-coral">{[0, 1, 2, 3, 4].map((i) => <Star key={i} width={26} height={26} />)}</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-petrol">Patients love their visits</h2>
              <p className="mt-3 text-ink/70">Our patients consistently rate us 5 stars for comfort, care, and results. See what your neighbors in Bear are saying.</p>
              <Link href="/reviews" className="mt-6 inline-flex"><span className="btn-coral">Read our reviews <Arrow width={16} height={16} /></span></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { q: "The whole team is gentle, friendly, and thorough. Best dental experience I've had.", a: "Verified Patient" },
                { q: "Dr. Yang explained everything clearly and made me feel completely at ease.", a: "Verified Patient" },
                { q: "Clean, modern office and a staff that truly cares. Highly recommend.", a: "Verified Patient" },
                { q: "They got me in quickly and took great care of my whole family.", a: "Verified Patient" },
              ].map((r, i) => (
                <Reveal key={i} delay={i * 80}>
                  <figure className="h-full rounded-4xl bg-sand p-5 ring-1 ring-petrol/5">
                    <div className="flex text-coral">{[0, 1, 2, 3, 4].map((s) => <Star key={s} width={13} height={13} />)}</div>
                    <blockquote className="mt-2 text-sm leading-relaxed text-ink/75">“{r.q}”</blockquote>
                    <figcaption className="mt-3 text-xs font-semibold text-petrol">— {r.a}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* LOCATION */}
      <section className="bg-cloud py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Visit Our Office" title="Conveniently located in Bear, DE" />
              <p className="mt-4 text-ink/70">
                Our office proudly serves patients from {practice.areas.join(", ")}, and surrounding Delaware communities.
              </p>
              <div className="mt-7 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Pin width={20} height={20} /></span>
                  <div><p className="font-display font-bold text-petrol">{practice.address.line1}</p><p className="text-sm text-ink/60">{practice.address.city}, {practice.address.state} {practice.address.zip}</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Phone width={20} height={20} /></span>
                  <div><p className="font-display font-bold text-petrol">{practice.phone}</p><p className="text-sm text-ink/60">Call today to schedule</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Clock width={20} height={20} /></span>
                  <div className="text-sm">
                    {practice.hours.map((h) => (
                      <p key={h.day} className="flex justify-between gap-6 text-ink/70"><span>{h.day}</span><span className="font-medium text-petrol">{h.time}</span></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-5xl shadow-card ring-1 ring-petrol/10">
              <iframe src={practice.mapEmbed} title="Map to Delaware Dental Solutions" className="h-full min-h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-20"><CTABand /></div>
      <div className="pb-4" />
    </>
  );
}
