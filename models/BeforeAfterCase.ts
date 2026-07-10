import { Schema, model, models } from "mongoose";

export interface IBeforeAfterCase {
  before: string;
  after: string;
  caption?: string;
  order: number;
}

const BeforeAfterCaseSchema = new Schema<IBeforeAfterCase>({
  before: { type: String, required: true },
  after: { type: String, required: true },
  caption: String,
  order: { type: Number, default: 0 },
});

export default models.BeforeAfterCase ||
  model<IBeforeAfterCase>("BeforeAfterCase", BeforeAfterCaseSchema);
