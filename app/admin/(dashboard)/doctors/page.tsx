import Link from "next/link";
import { getDoctors } from "@/lib/content/doctors";
import { deleteDoctor } from "./actions";

export const metadata = { title: "Doctors — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminDoctorsPage() {
  const doctors = await getDoctors();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Doctors</h1>
        <Link href="/admin/doctors/new" className="btn-coral">New Doctor</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {doctors.map((d) => (
          <div key={d.id} className="card flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display font-bold text-petrol">{d.name}, {d.credential}</p>
              <p className="text-sm text-ink/60">{d.role} · /{d.slug}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/doctors/${d.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteDoctor.bind(null, d.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {doctors.length === 0 && <p className="text-ink/60">No doctors yet.</p>}
      </div>
    </div>
  );
}
