import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { deleteAdminUser } from "./actions";

export const metadata = { title: "Users — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  await dbConnect();
  const users = await AdminUser.find().sort({ createdAt: 1 }).lean();
  const total = users.length;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Admin Users</h1>
        <Link href="/admin/users/new" className="btn-coral">Add User</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {users.map((u) => (
          <div key={String(u._id)} className="card flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display font-bold text-petrol">{u.name}</p>
              <p className="text-sm text-ink/60">{u.email} · joined {new Date(u.createdAt).toLocaleDateString()}</p>
            </div>
            {total > 1 && (
              <form action={deleteAdminUser.bind(null, String(u._id))}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm shrink-0">Remove</button>
              </form>
            )}
          </div>
        ))}
        {users.length === 0 && <p className="text-ink/60">No admin users found.</p>}
      </div>
    </div>
  );
}
