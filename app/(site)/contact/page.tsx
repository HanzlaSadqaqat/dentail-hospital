import { getPractice } from "@/lib/content/practice";
import { getServices } from "@/lib/content/services";
import { PageHero } from "@/components/UI";
import AppointmentForm from "@/components/AppointmentForm";
import { Phone, Pin, Clock } from "@/components/Icons";
import Reveal from "@/components/Reveal";
export const metadata = { title: "Contact — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Contact() {
  const [practice, services] = await Promise.all([getPractice(), getServices()]);
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get in touch"
        intro={`We're here to help. Reach out with any questions, or send a message and we'll get right back to you. Proudly serving ${practice.areas.slice(0,3).join(", ")} and beyond.`} />
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Phone width={20} height={20} /></span>
                  <p className="mt-3 font-display font-bold text-petrol">Phone</p>
                  <a href={practice.phoneHref} className="text-sm font-semibold text-coral">{practice.phone}</a>
                </div>
                <div className="card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petrol text-aqua-soft"><Pin width={20} height={20} /></span>
                  <p className="mt-3 font-display font-bold text-petrol">Address</p>
                  <p className="text-sm text-ink/65">{practice.address.line1}, {practice.address.city}, {practice.address.state} {practice.address.zip}</p>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-4xl shadow-card ring-1 ring-petrol/10">
                <iframe src={practice.mapEmbed} title="Map to Delaware Dental Solutions" className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="mt-4 card p-6">
                <p className="flex items-center gap-2 font-display font-bold text-petrol"><Clock width={18} height={18} className="text-aqua" /> Office Hours</p>
                <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
                  {practice.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-ink/65"><span>{h.day}</span><span className="font-medium text-petrol">{h.time}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold text-petrol">Send us a message</h2>
              <p className="mt-1 mb-5 text-sm text-ink/60">We'll respond as soon as we can.</p>
              <AppointmentForm services={services} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
