import { dbConnect } from "@/lib/mongodb";
import BlogPost, { IBlogPost } from "@/models/BlogPost";

export type BlogPostDTO = Omit<IBlogPost, "publishedAt"> & { id: string; publishedAt: string };

function serialize(doc: any): BlogPostDTO {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest, publishedAt: rest.publishedAt?.toISOString?.() ?? rest.publishedAt };
}

export async function getBlogPosts() {
  await dbConnect();
  const docs = await BlogPost.find().sort({ publishedAt: -1 }).lean();
  return docs.map(serialize);
}

export async function getBlogPostBySlug(slug: string) {
  await dbConnect();
  const doc = await BlogPost.findOne({ slug }).lean();
  return doc ? serialize(doc) : null;
}

export async function getBlogPostById(id: string) {
  await dbConnect();
  const doc = await BlogPost.findById(id).lean();
  return doc ? serialize(doc) : null;
}
