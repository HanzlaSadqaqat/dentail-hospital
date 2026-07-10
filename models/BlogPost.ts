import { Schema, model, models } from "mongoose";

export interface IBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  tag: string;
  publishedAt: Date;
  image?: string;
}

const BlogPostSchema = new Schema<IBlogPost>({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  body: { type: String, required: true },
  tag: { type: String, default: "" },
  publishedAt: { type: Date, default: Date.now },
  image: String,
});

export default models.BlogPost || model<IBlogPost>("BlogPost", BlogPostSchema);
