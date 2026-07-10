import Link from "next/link";
import { getPractice } from "@/lib/content/practice";
import { PageHero, CTABand } from "@/components/UI";
import { Check, Phone } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Dental Savings Plan — Dentist in Bear, DE" };
export const revalidate = 3600;
const perks = [
  "An affordable alternative for patients without insurance.",
  "Discounts on the treatments you need most.",
  "Covers routine cleanings and exams to keep you healthy.",
  "Simple, transparent membership — no claim forms.",
];
export default async function Savings() {
  const practice = await getPractice();
  return (
    <>
      <PageHero eyebrow="Our Affordable Dental Plan" title="Quality care without dental insurance"
        intro="No insurance? No problem. Our in-house Dental Savings Plan makes great dental care affordable and straightforward." />
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-petrol">Why patients love it</h2>
              <ul className="mt-6 space-y-4">
                {perks.map((p) => (
                  <li key={p} className="flex gap-3 text-lg text-ink/75"><Check width={20} height={20} className="mt-1 shrink-0 text-aqua" /> {p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-8">
              <p className="font-display text-xl font-bold text-petrol">Ask us about membership</p>
              <p className="mt-2 text-ink/65">Call our office and we'll walk you through plan details and pricing, and help you choose what's right for your family.</p>
              <a href={practice.phoneHref} className="btn-coral mt-6 w-full"><Phone width={16} height={16} /> {practice.phone}</a>
              <Link href="/contact" className="btn-ghost mt-3 w-full">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
