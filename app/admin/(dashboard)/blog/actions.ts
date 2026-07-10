"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

function revalidateBlogPaths() {
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
}

export async function createBlogPost(formData: FormData) {
  await dbConnect();
  await BlogPost.create({
    slug: String(formData.get("slug") || "").trim(),
    title: String(formData.get("title") || "").trim(),
    excerpt: String(formData.get("excerpt") || "").trim(),
    body: String(formData.get("body") || "").trim(),
    tag: String(formData.get("tag") || "").trim(),
    publishedAt: new Date(String(formData.get("publishedAt") || Date.now())),
    image: String(formData.get("image") || "").trim() || undefined,
  });
  revalidateBlogPaths();
  redirect("/admin/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  await dbConnect();
  await BlogPost.findByIdAndUpdate(id, {
    slug: String(formData.get("slug") || "").trim(),
    title: String(formData.get("title") || "").trim(),
    excerpt: String(formData.get("excerpt") || "").trim(),
    body: String(formData.get("body") || "").trim(),
    tag: String(formData.get("tag") || "").trim(),
    publishedAt: new Date(String(formData.get("publishedAt") || Date.now())),
    image: String(formData.get("image") || "").trim() || undefined,
  });
  revalidateBlogPaths();
  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  await dbConnect();
  await BlogPost.findByIdAndDelete(id);
  revalidateBlogPaths();
  redirect("/admin/blog");
}
