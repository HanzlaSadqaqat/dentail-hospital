import { notFound } from "next/navigation";
import { getReviewById } from "@/lib/content/reviews";
import ReviewForm from "../../ReviewForm";
import { updateReview } from "../../actions";

export const metadata = { title: "Edit Review — Admin" };

export default async function EditReviewPage({ params }: { params: { id: string } }) {
  const review = await getReviewById(params.id);
  if (!review) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Review</h1>
      <div className="mt-6 max-w-2xl">
        <ReviewForm action={updateReview.bind(null, params.id)} review={review} />
      </div>
    </div>
  );
}
