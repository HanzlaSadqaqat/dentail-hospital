import Image from "next/image";
import Link from "next/link";
import { getPractice } from "@/lib/content/practice";
import { getServices } from "@/lib/content/services";
import { PageHero, CTABand } from "@/components/UI";
import { Check, Arrow } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Our Practice — Dentist in Bear, DE" };
export const revalidate = 3600;

const mission = [
  "Staying up to date with the latest techniques and equipment.",
  "Ensuring a comfortable, relaxing environment.",
  "Exceeding your expectations with our professionalism.",
];

export default async function About() {
  const [practice, services] = await Promise.all([getPractice(), getServices()]);
  const teamImage = practice.teamImage;
  return (
    <>
      <PageHero eyebrow="Our Practice" title="A dental home built on attentive, impeccable care"
        intro="At Delaware Dental Solutions, we understand the importance of a practice that provides exceptional care. Our staff is committed to serving every patient with attentive care and impeccable dental work." />

      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-5xl shadow-soft ring-1 ring-petrol/10">
              <Image src={teamImage} alt="Delaware Dental Solutions team" width={680} height={520} className="h-full w-full object-cover" unoptimized />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-lg leading-relaxed text-ink/75">
                Our practice provides general dentistry services including the prevention, diagnosis, and treatment of a wide variety of conditions and diseases that affect your teeth, gums, and oral health. As one of our patients, you deserve nothing less.
              </p>
              <h2 className="mt-8 font-display text-2xl font-bold text-petrol">Our Practice's Mission</h2>
              <p className="mt-2 text-ink/70">To fulfill our mission of providing quality dental care to you and your family, we are committed to:</p>
              <ul className="mt-5 space-y-3">
                {mission.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-aqua-soft text-petrol"><Check width={14} height={14} /></span>
                    <span className="text-ink/75">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-5xl bg-cloud p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-petrol">We're committed to your oral health</h2>
            <p className="mt-3 max-w-3xl text-ink/70">
              At Delaware Dental Solutions, we ensure your oral health is in excellent condition by attending to all dental issues — existing and potential — during your visit. Call today {" "}
              <a href={practice.phoneHref} className="link-underline">{practice.phone}</a>.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-petrol ring-1 ring-petrol/10 transition hover:bg-petrol hover:text-white">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CTABand />
      <div className="pb-4" />
    </>
  );
}
