import { Schema, model, models } from "mongoose";

export interface IGalleryImage {
  imageUrl: string;
  caption?: string;
  order: number;
}

const GalleryImageSchema = new Schema<IGalleryImage>({
  imageUrl: { type: String, required: true },
  caption: String,
  order: { type: Number, default: 0 },
});

export default models.GalleryImage || model<IGalleryImage>("GalleryImage", GalleryImageSchema);
