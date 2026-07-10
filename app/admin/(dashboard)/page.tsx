import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import Service from "@/models/Service";
import Technology from "@/models/Technology";
import GalleryImage from "@/models/GalleryImage";
import BeforeAfterCase from "@/models/BeforeAfterCase";
import Differentiator from "@/models/Differentiator";
import Review from "@/models/Review";
import BlogPost from "@/models/BlogPost";
import AdminUser from "@/models/AdminUser";

export const metadata = { title: "Admin Dashboard" };
export const dynamic = "force-dynamic";

const SECTIONS = [
  { href: "/admin/doctors", label: "Doctors", model: Doctor },
  { href: "/admin/services", label: "Services", model: Service },
  { href: "/admin/technology", label: "Technology", model: Technology },
  { href: "/admin/gallery", label: "Gallery", model: GalleryImage },
  { href: "/admin/before-after", label: "Before / After", model: BeforeAfterCase },
  { href: "/admin/differentiators", label: "Differentiators", model: Differentiator },
  { href: "/admin/reviews", label: "Reviews", model: Review },
  { href: "/admin/blog", label: "Blog Posts", model: BlogPost },
  { href: "/admin/users", label: "Admin Users", model: AdminUser },
];

export default async function AdminDashboardPage() {
  await dbConnect();
  const counts = await Promise.all(SECTIONS.map((s) => s.model.countDocuments()));

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Dashboard</h1>
      <p className="mt-1 text-ink/60">Manage every piece of content on the public site.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s, i) => (
          <Link
            key={s.href}
            href={s.href}
            className="card flex items-center justify-between p-6 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <span className="font-display text-lg font-bold text-petrol">{s.label}</span>
            <span className="rounded-full bg-aqua-soft px-3 py-1 text-sm font-semibold text-petrol">{counts[i]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
