import Link from "next/link";
import { getReviews } from "@/lib/content/reviews";
import { deleteReview } from "./actions";

export const metadata = { title: "Reviews — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const reviews = await getReviews();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-petrol">Reviews</h1>
        <Link href="/admin/reviews/new" className="btn-coral">New Review</Link>
      </div>
      <div className="mt-6 grid gap-3">
        {reviews.map((r) => (
          <div key={r.id} className="card flex items-center justify-between gap-4 p-5">
            <div className="min-w-0">
              <p className="text-sm text-ink/80 italic line-clamp-2">"{r.quote}"</p>
              <p className="mt-1 text-sm font-medium text-petrol">— {r.author} · {"★".repeat(r.rating)}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link href={`/admin/reviews/${r.id}/edit`} className="btn-ghost text-sm">Edit</Link>
              <form action={deleteReview.bind(null, r.id)}>
                <button type="submit" className="btn bg-coral/10 text-coral hover:bg-coral/20 text-sm">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {reviews.length === 0 && <p className="text-ink/60">No reviews yet.</p>}
      </div>
    </div>
  );
}
