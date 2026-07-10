import Link from "next/link";
import { Phone, Pin, Clock, Tooth } from "./Icons";

type Practice = {
  areas: string[];
  socials: { name: string; href: string }[];
  address: { line1: string; city: string; state: string; zip: string };
  phone: string;
  phoneHref: string;
  hours: { day: string; time: string }[];
};

export default function Footer({ practice }: { practice: Practice }) {
  return (
    <footer className="mt-24 bg-petrol-900 text-aqua-soft/90">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-aqua text-petrol-900">
              <Tooth width={22} height={22} />
            </span>
            <span className="font-display text-lg font-bold text-white">Delaware Dental Solutions</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-aqua-soft/70">
            Family & cosmetic dentistry in Bear, DE — proudly serving {practice.areas.slice(0, 4).join(", ")}, and surrounding communities.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {practice.socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-aqua hover:text-aqua">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-aqua">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/about", label: "Our Practice" },
              { href: "/services", label: "Services" },
              { href: "/technology", label: "Technology" },
              { href: "/reviews", label: "Reviews" },
              { href: "/new-patients", label: "New Patients" },
              { href: "/blog", label: "Blog" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-aqua-soft/70 transition hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-aqua">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-aqua-soft/70">
            <li className="flex gap-3"><Pin width={18} height={18} className="mt-0.5 shrink-0 text-aqua" />
              <span>{practice.address.line1}<br />{practice.address.city}, {practice.address.state} {practice.address.zip}</span></li>
            <li className="flex gap-3"><Phone width={18} height={18} className="mt-0.5 shrink-0 text-aqua" />
              <a href={practice.phoneHref} className="transition hover:text-white">{practice.phone}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-aqua">Office Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-aqua-soft/70">
            {practice.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4">
                <span>{h.day}</span><span className="font-medium text-white/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-aqua-soft/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Delaware Dental Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/disclaimers/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/disclaimers/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/disclaimers/web-accessibility" className="transition hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
