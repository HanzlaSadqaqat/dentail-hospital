import Link from "next/link";
import Image from "next/image";
import { getBeforeAfterCases } from "@/lib/content/beforeAfter";
import { PageHero, CTABand } from "@/components/UI";
import { Calendar } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Before & After Gallery — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function BeforeAfter() {
  const cases = await getBeforeAfterCases();
  return (
    <>
      <PageHero eyebrow="Before / After" title="Real smiles, transformed"
        intro="From cosmetic makeovers to full-mouth restoration, see the difference quality dentistry makes." />
      <section className="container-x py-20">
        {cases.length > 0 && (
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 80}>
                <div className="card overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square overflow-hidden bg-cloud">
                      <Image src={c.before} alt="Before" fill className="object-cover" unoptimized />
                      <span className="absolute left-2 top-2 rounded-full bg-petrol px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">Before</span>
                    </div>
                    <div className="relative aspect-square overflow-hidden bg-cloud">
                      <Image src={c.after} alt="After" fill className="object-cover" unoptimized />
                      <span className="absolute left-2 top-2 rounded-full bg-coral px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">After</span>
                    </div>
                  </div>
                  {c.caption && <p className="p-4 text-sm font-medium text-ink/70">{c.caption}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        )}
        <Reveal>
          <div className="rounded-5xl bg-cloud p-10 text-center sm:p-16">
            <h2 className="font-display text-2xl font-bold text-petrol">Your transformation could be next</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/70">
              We're proud of the results we create for our patients. Schedule a consultation and we'll show you examples relevant to your goals, then build a personalized treatment plan.
            </p>
            <Link href="/appointment" className="btn-coral mt-7"><Calendar width={16} height={16} /> Start your consultation</Link>
          </div>
        </Reveal>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
