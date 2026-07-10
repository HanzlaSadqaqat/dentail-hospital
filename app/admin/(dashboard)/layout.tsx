import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { logoutAction } from "@/app/admin/actions";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/practice", label: "Practice Info" },
  { href: "/admin/doctors", label: "Doctors" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/technology", label: "Technology" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/before-after", label: "Before / After" },
  { href: "/admin/differentiators", label: "Differentiators" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/users", label: "Users" },
];

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-cloud">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-petrol/10 bg-white sm:flex">
        <div className="px-6 py-6">
          <p className="font-display text-lg font-bold text-petrol">Admin Panel</p>
          <p className="mt-0.5 text-xs text-ink/50">Delaware Dental Solutions</p>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/70 transition hover:bg-cloud hover:text-petrol"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-petrol/10 px-6 py-4">
          <p className="text-xs text-ink/50">Signed in as</p>
          <p className="truncate text-sm font-semibold text-petrol">{session.name || session.email}</p>
          <form action={logoutAction} className="mt-3">
            <button type="submit" className="btn-ghost w-full text-sm">Log out</button>
          </form>
        </div>
      </aside>
      <main className="flex-1 px-6 py-8 sm:px-10">{children}</main>
    </div>
  );
}
