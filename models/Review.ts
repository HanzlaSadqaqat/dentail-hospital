import { Schema, model, models } from "mongoose";

export interface IReview {
  quote: string;
  author: string;
  rating: number;
  source?: string;
  order: number;
}

const ReviewSchema = new Schema<IReview>({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, default: 5 },
  source: String,
  order: { type: Number, default: 0 },
});

export default models.Review || model<IReview>("Review", ReviewSchema);
