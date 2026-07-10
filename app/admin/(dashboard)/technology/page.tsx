import Link from "next/link";
import { getTechnology } from "@/lib/content/technology";
import { deleteTechnology } from "./actions";

export const metadata = { title: "Technology — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminTechnologyPage() {
  const items = await getTechnology();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Technology</h1>
        <Link href="/admin/technology/new" className="btn-coral">New Item</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {items.map((t) => (
          <div key={t.id} className="card flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display font-bold text-petrol">{t.name}</p>
              <p className="text-sm text-ink/60 line-clamp-1">{t.desc}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/technology/${t.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteTechnology.bind(null, t.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-ink/60">No technology items yet.</p>}
      </div>
    </div>
  );
}
