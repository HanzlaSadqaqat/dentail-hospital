import { createAdminUser } from "../actions";

export const metadata = { title: "Add Admin User — Admin" };

export default function NewUserPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Add Admin User</h1>
      <div className="mt-6 max-w-md">
        <form action={createAdminUser} className="grid gap-5">
          <div>
            <label className="admin-label" htmlFor="name">Name</label>
            <input id="name" name="name" required className="admin-field" />
          </div>
          <div>
            <label className="admin-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="admin-field" />
          </div>
          <div>
            <label className="admin-label" htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required minLength={8} className="admin-field" />
          </div>
          <button type="submit" className="btn-coral justify-self-start">Create Account</button>
        </form>
      </div>
    </div>
  );
}
