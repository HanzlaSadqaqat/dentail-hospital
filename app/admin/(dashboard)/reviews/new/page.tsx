import ReviewForm from "../ReviewForm";
import { createReview } from "../actions";

export const metadata = { title: "New Review — Admin" };

export default function NewReviewPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Review</h1>
      <div className="mt-6 max-w-2xl">
        <ReviewForm action={createReview} />
      </div>
    </div>
  );
}
