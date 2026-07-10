import type { ReviewDTO } from "@/lib/content/reviews";

export default function ReviewForm({
  action,
  review,
}: {
  action: (formData: FormData) => void;
  review?: ReviewDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <div>
        <label className="admin-label" htmlFor="quote">Quote</label>
        <textarea id="quote" name="quote" required rows={4} defaultValue={review?.quote} className="admin-field" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label" htmlFor="author">Author</label>
          <input id="author" name="author" required defaultValue={review?.author} placeholder="Jane D." className="admin-field" />
        </div>
        <div>
          <label className="admin-label" htmlFor="rating">Rating (1–5)</label>
          <input id="rating" name="rating" type="number" min={1} max={5} defaultValue={review?.rating ?? 5} className="admin-field" />
        </div>
      </div>
      <div>
        <label className="admin-label" htmlFor="source">Source (optional)</label>
        <input id="source" name="source" defaultValue={review?.source} placeholder="Google" className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={review?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
