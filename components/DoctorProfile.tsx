import Image from "next/image";
import Link from "next/link";
import { getPractice } from "@/lib/content/practice";
import { PageHero, CTABand } from "./UI";
import { Check, Calendar, Phone } from "./Icons";
import Reveal from "./Reveal";

type Doctor = {
  name: string;
  credential: string;
  role: string;
  image: string;
  bio: string[];
  memberships?: string[];
  interests?: string;
};

export default async function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const practice = await getPractice();
  return (
    <>
      <PageHero eyebrow={doctor.role} title={`Meet Dr. ${doctor.name}, ${doctor.credential}`} />
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-5xl bg-aqua-soft shadow-soft ring-1 ring-petrol/10">
                <Image src={doctor.image} alt={`Dr. ${doctor.name}, ${doctor.credential}`} width={520} height={620} className="h-full w-full object-cover" unoptimized />
              </div>
              <div className="mt-5 card p-6">
                <p className="font-display text-lg font-bold text-petrol">Schedule with Dr. {doctor.name.split(" ")[0]}</p>
                <p className="mt-1 text-sm text-ink/60">Now accepting new patients.</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <Link href="/appointment" className="btn-coral"><Calendar width={16} height={16} /> Request Appointment</Link>
                  <a href={practice.phoneHref} className="btn-ghost"><Phone width={16} height={16} /> {practice.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              {doctor.bio.map((p, i) => (
                <p key={i} className="mb-5 text-lg leading-relaxed text-ink/75">{p}</p>
              ))}
              {doctor.memberships && (
                <div className="mt-8 rounded-4xl bg-cloud p-7">
                  <h2 className="font-display text-xl font-bold text-petrol">Professional Memberships</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {doctor.memberships.map((m) => (
                      <li key={m} className="flex gap-2.5 text-sm text-ink/75">
                        <Check width={18} height={18} className="shrink-0 text-aqua" /> {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doctor.interests && <p className="mt-6 italic text-ink/60">{doctor.interests}</p>}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
