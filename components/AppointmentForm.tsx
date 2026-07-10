"use client";
import { useState } from "react";
import { Check } from "./Icons";

export default function AppointmentForm({ services }: { services: { slug: string; name: string }[] }) {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-2xl border border-petrol/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30";

  if (sent) {
    return (
      <div className="rounded-4xl bg-aqua-soft p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-petrol text-white"><Check width={26} height={26} /></span>
        <h3 className="mt-4 font-display text-2xl font-bold text-petrol">Request received</h3>
        <p className="mt-2 text-ink/70">Thank you. A member of our team will reach out shortly to confirm your appointment. For urgent needs, please call 302-409-3050.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fname" className="mb-1.5 block text-sm font-semibold text-petrol">First name</label>
          <input id="fname" name="fname" required className={field} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lname" className="mb-1.5 block text-sm font-semibold text-petrol">Last name</label>
          <input id="lname" name="lname" required className={field} placeholder="Doe" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-petrol">Phone</label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="(302) 000-0000" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-petrol">Email</label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-petrol">Reason for visit</label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>New patient exam & cleaning</option>
            {services.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>Dental emergency</option>
          </select>
        </div>
        <div>
          <label htmlFor="pref" className="mb-1.5 block text-sm font-semibold text-petrol">Preferred day/time</label>
          <input id="pref" name="pref" className={field} placeholder="e.g. Weekday mornings" />
        </div>
      </div>
      <div>
        <label htmlFor="msg" className="mb-1.5 block text-sm font-semibold text-petrol">Anything we should know?</label>
        <textarea id="msg" name="msg" rows={4} className={field} placeholder="Tell us about your dental needs or questions." />
      </div>
      <p className="text-xs text-ink/50">By submitting, you agree to be contacted about your appointment. Please don't include sensitive medical details. This demo form doesn't transmit data — connect it to your booking system or email handler to go live.</p>
      <button type="submit" className="btn-coral w-full text-base">Request Appointment</button>
    </form>
  );
}
