import { dbConnect } from "@/lib/mongodb";
import Review, { IReview } from "@/models/Review";

export type ReviewDTO = IReview & { id: string };

function serialize(doc: any): ReviewDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export async function getReviews() {
  await dbConnect();
  const docs = await Review.find().sort({ order: 1 }).lean();
  return docs.map(serialize);
}

export async function getReviewById(id: string) {
  await dbConnect();
  const doc = await Review.findById(id).lean();
  return doc ? serialize(doc) : null;
}
