import { getPractice } from "@/lib/content/practice";
import { getServices } from "@/lib/content/services";
import { PageHero } from "@/components/UI";
import AppointmentForm from "@/components/AppointmentForm";
import { Phone, Clock, Pin } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Request an Appointment — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Appointment() {
  const [practice, services] = await Promise.all([getPractice(), getServices()]);
  return (
    <>
      <PageHero eyebrow="Schedule Today" title="Request an appointment"
        intro="Fill out the form and our team will reach out to confirm your visit. Prefer to talk? Call us directly — we'd love to hear from you." />
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div className="card p-7 sm:p-9"><AppointmentForm services={services} /></div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="space-y-5">
              <div className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Phone width={20} height={20} /></span>
                <p className="mt-3 font-display text-lg font-bold text-petrol">Call us</p>
                <a href={practice.phoneHref} className="text-coral font-semibold">{practice.phone}</a>
              </div>
              <div className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Pin width={20} height={20} /></span>
                <p className="mt-3 font-display text-lg font-bold text-petrol">Find us</p>
                <p className="text-sm text-ink/65">{practice.address.line1}<br />{practice.address.city}, {practice.address.state} {practice.address.zip}</p>
              </div>
              <div className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Clock width={20} height={20} /></span>
                <p className="mt-3 font-display text-lg font-bold text-petrol">Hours</p>
                <ul className="mt-1 space-y-1 text-sm">
                  {practice.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-ink/65"><span>{h.day}</span><span className="font-medium text-petrol">{h.time}</span></li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
