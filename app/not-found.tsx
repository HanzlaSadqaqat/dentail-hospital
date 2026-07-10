import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="eyebrow">Page not found</span>
      <h1 className="mt-3 font-display text-5xl font-bold text-petrol">404</h1>
      <p className="mt-3 max-w-md text-ink/70">Sorry, we couldn't find that page. Let's get you back to your healthiest smile.</p>
      <Link href="/" className="btn-coral mt-7">Back to home</Link>
    </section>
  );
}
