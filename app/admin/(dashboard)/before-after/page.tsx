import Link from "next/link";
import Image from "next/image";
import { getBeforeAfterCases } from "@/lib/content/beforeAfter";
import { deleteBeforeAfterCase } from "./actions";

export const metadata = { title: "Before & After — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminBeforeAfterPage() {
  const cases = await getBeforeAfterCases();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Before &amp; After</h1>
        <Link href="/admin/before-after/new" className="btn-coral">Add Case</Link>
      </div>
      <div className="mt-6 grid gap-4">
        {cases.map((c) => (
          <div key={c.id} className="card p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="relative aspect-video bg-sand rounded">
                {c.before && <Image src={c.before} alt="Before" fill className="object-cover rounded" />}
                <span className="absolute bottom-1 left-1 text-xs bg-black/50 text-white px-1 rounded">Before</span>
              </div>
              <div className="relative aspect-video bg-sand rounded">
                {c.after && <Image src={c.after} alt="After" fill className="object-cover rounded" />}
                <span className="absolute bottom-1 left-1 text-xs bg-black/50 text-white px-1 rounded">After</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-ink/60">{c.caption || <span className="italic">No caption</span>}</p>
              <div className="flex shrink-0 gap-2">
                <Link href={`/admin/before-after/${c.id}/edit`} className="btn-ghost text-xs">Edit</Link>
                <form action={deleteBeforeAfterCase.bind(null, c.id)}>
                  <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-xs">Delete</button>
                </form>
              </div>
            </div>
          </div>
        ))}
        {cases.length === 0 && <p className="text-ink/60">No before/after cases yet.</p>}
      </div>
    </div>
  );
}
