import { Schema, model, models } from "mongoose";

export interface ITechnology {
  name: string;
  image: string;
  desc: string;
  order: number;
}

const TechnologySchema = new Schema<ITechnology>({
  name: { type: String, required: true },
  image: { type: String, default: "" },
  desc: { type: String, required: true },
  order: { type: Number, default: 0 },
});

export default models.Technology || model<ITechnology>("Technology", TechnologySchema);
