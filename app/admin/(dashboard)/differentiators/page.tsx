import Link from "next/link";
import { getDifferentiators } from "@/lib/content/differentiators";
import { deleteDifferentiator } from "./actions";

export const metadata = { title: "Differentiators — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminDifferentiatorsPage() {
  const items = await getDifferentiators();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Why Choose Us</h1>
        <Link href="/admin/differentiators/new" className="btn-coral">New Item</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {items.map((d) => (
          <div key={d.id} className="card flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display font-bold text-petrol">{d.title}</p>
              <p className="text-sm text-ink/60 line-clamp-2">{d.desc}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/differentiators/${d.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteDifferentiator.bind(null, d.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-ink/60">No items yet.</p>}
      </div>
    </div>
  );
}
