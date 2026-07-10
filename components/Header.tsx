"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Calendar, Tooth } from "./Icons";

const patientLinks = [
  { href: "/new-patients", label: "New Patients" },
  { href: "/technology", label: "Technology" },
  { href: "/before-after-gallery", label: "Before / After" },
  { href: "/reviews", label: "Reviews" },
];

type Practice = { phone: string; phoneHref: string };
type Doctor = { slug: string; name: string; credential: string };
type Service = { slug: string; name: string };

export default function Header({
  practice,
  doctors,
  services,
}: {
  practice: Practice;
  doctors: Doctor[];
  services: Service[];
}) {
  const [open, setOpen] = useState(false);

  const aboutLinks = [
    { href: "/about", label: "Our Practice" },
    ...doctors.map((d) => ({ href: `/${d.slug}`, label: `${d.name}, ${d.credential}` })),
    { href: "/meet-our-team", label: "Meet Our Team" },
    { href: "/office-gallery", label: "Office Tour" },
    { href: "/dental-savings-plan", label: "Dental Savings Plan" },
    { href: "/blog", label: "Our Blog" },
  ];

  const primaryServices = services.filter((s) =>
    ["general-dentistry", "cosmetic-dentistry", "periodontal-treatment", "root-canal", "invisalign", "dental-implants", "oral-surgery"].includes(s.slug)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-petrol/10 bg-sand/85 backdrop-blur-md">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-petrol text-aqua-soft">
            <Tooth width={22} height={22} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-bold tracking-tight text-petrol">
              Delaware Dental
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua">
              Solutions · Bear, DE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavItem href="/" label="Home" />
          <Dropdown label="About" items={aboutLinks} />
          <Dropdown
            label="Services"
            items={[{ href: "/services", label: "View All Services" }, ...primaryServices.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))]}
          />
          <Dropdown label="For Patients" items={patientLinks} />
          <NavItem href="/contact" label="Contact" />
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a href={practice.phoneHref} className="btn-ghost whitespace-nowrap">
            <Phone width={16} height={16} /> {practice.phone}
          </a>
          <Link href="/appointment" className="btn-coral whitespace-nowrap">
            <Calendar width={16} height={16} /> Book
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-petrol/15 text-petrol lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-petrol/10 bg-sand lg:hidden">
          <div className="container-x grid gap-1 py-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              ...patientLinks,
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 font-semibold text-petrol hover:bg-cloud">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <a href={practice.phoneHref} className="btn-ghost flex-1">Call</a>
              <Link href="/appointment" onClick={() => setOpen(false)} className="btn-coral flex-1">Book</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-ink/70 transition hover:bg-cloud hover:text-petrol">
      {label}
    </Link>
  );
}

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative shrink-0">
      <button className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-ink/70 transition group-hover:bg-cloud group-hover:text-petrol">
        {label}
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="card overflow-hidden p-2">
          {items.map((it) => (
            <Link key={it.href + it.label} href={it.href} className="block rounded-xl px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-cloud hover:text-petrol">
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
