import Link from "next/link";
import { getPractice } from "@/lib/content/practice";
import { PageHero, CTABand } from "@/components/UI";
import { Check, Calendar, Phone } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "New Patients — Dentist in Bear, DE" };
export const revalidate = 3600;
const steps = [
  { t: "Request your visit", d: "Book online or call us. We'll find a time that fits your schedule and confirm your details." },
  { t: "Tell us about you", d: "Share your dental history and any concerns so we can prepare for a personalized first visit." },
  { t: "Meet your dentist", d: "We'll complete a thorough exam, answer your questions, and build a treatment plan around your goals." },
];
const knowList = [
  "We're accepting new patients of all ages.",
  "Se Habla Español — we welcome Spanish-speaking patients.",
  "Ask about our affordable in-house Dental Savings Plan.",
  "Bring your insurance details and we'll help you understand your coverage.",
];
export default async function NewPatients() {
  const practice = await getPractice();
  return (
    <>
      <PageHero eyebrow="New Patients" title="Welcome — we're glad you're here"
        intro="Becoming a patient at Delaware Dental Solutions is simple. Here's what to expect from your first visit." />
      <section className="container-x py-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol font-display text-lg font-bold text-aqua-soft">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-petrol">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 grid gap-8 rounded-5xl bg-cloud p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-petrol">Good to know</h2>
              <ul className="mt-5 space-y-3">
                {knowList.map((k) => (
                  <li key={k} className="flex gap-3 text-ink/75"><Check width={18} height={18} className="mt-0.5 shrink-0 text-aqua" /> {k}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3 rounded-4xl bg-white p-7 shadow-card">
              <p className="font-display text-lg font-bold text-petrol">Ready to schedule?</p>
              <Link href="/appointment" className="btn-coral"><Calendar width={16} height={16} /> Request an Appointment</Link>
              <a href={practice.phoneHref} className="btn-ghost"><Phone width={16} height={16} /> {practice.phone}</a>
            </div>
          </div>
        </Reveal>
      </section>
      <CTABand />
      <div className="pb-4" />
    </>
  );
}
