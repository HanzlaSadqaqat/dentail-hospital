import { Schema, model, models } from "mongoose";

export interface IDifferentiator {
  title: string;
  desc: string;
  order: number;
}

const DifferentiatorSchema = new Schema<IDifferentiator>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  order: { type: Number, default: 0 },
});

export default models.Differentiator ||
  model<IDifferentiator>("Differentiator", DifferentiatorSchema);
