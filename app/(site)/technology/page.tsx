import Image from "next/image";
import { getTechnology } from "@/lib/content/technology";
import { PageHero, CTABand } from "@/components/UI";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Dental Technology in Bear, DE" };
export const revalidate = 3600;
export default async function Tech() {
  const technology = await getTechnology();
  return (
    <>
      <PageHero eyebrow="State-of-the-Art Technology" title="Advanced tools for better dentistry"
        intro="Our office uses state-of-the-art dental technology to provide you with the best possible care — clearer diagnostics, gentler treatment, and quicker healing." />
      <section className="container-x py-20">
        <div className="grid gap-8">
          {technology.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 90}>
              <div className={`grid items-center gap-8 rounded-5xl bg-white p-6 shadow-card ring-1 ring-petrol/5 sm:p-8 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-4xl bg-cloud">
                  <Image src={t.image} alt={t.name} width={560} height={400} className="h-full w-full object-cover" unoptimized />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">Technology</span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-petrol">{t.name}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink/70">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
