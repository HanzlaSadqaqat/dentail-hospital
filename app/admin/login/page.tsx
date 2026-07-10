import { loginAction } from "./actions";

export const metadata = { title: "Admin Login" };

export default function AdminLoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sand px-4">
      <div className="w-full max-w-sm rounded-4xl bg-white p-8 shadow-card ring-1 ring-petrol/5">
        <h1 className="font-display text-2xl font-bold text-petrol">Admin Login</h1>
        <p className="mt-1 text-sm text-ink/60">Sign in to manage site content.</p>

        {searchParams.error && (
          <p className="mt-4 rounded-xl bg-coral/10 px-3 py-2 text-sm font-medium text-coral">
            Invalid email or password.
          </p>
        )}

        <form action={loginAction} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-petrol">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-petrol/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-petrol">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-petrol/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
            />
          </div>
          <button type="submit" className="btn-coral mt-2 w-full">Sign In</button>
        </form>
      </div>
    </div>
  );
}
