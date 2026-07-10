import Link from "next/link";
import { getServices } from "@/lib/content/services";
import { deleteService } from "./actions";

export const metadata = { title: "Services — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Services</h1>
        <Link href="/admin/services/new" className="btn-coral">New Service</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {services.map((s) => (
          <div key={s.id} className="card flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display font-bold text-petrol">{s.name}</p>
              <p className="text-sm text-ink/60">{s.category} · /{s.slug}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/services/${s.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteService.bind(null, s.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {services.length === 0 && <p className="text-ink/60">No services yet.</p>}
      </div>
    </div>
  );
}
