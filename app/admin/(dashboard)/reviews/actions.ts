"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Review from "@/models/Review";

function revalidateReviewPaths() {
  revalidatePath("/");
  revalidatePath("/reviews");
}

export async function createReview(formData: FormData) {
  await dbConnect();
  await Review.create({
    quote: String(formData.get("quote") || "").trim(),
    author: String(formData.get("author") || "").trim(),
    rating: Number(formData.get("rating") || 5),
    source: String(formData.get("source") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidateReviewPaths();
  redirect("/admin/reviews");
}

export async function updateReview(id: string, formData: FormData) {
  await dbConnect();
  await Review.findByIdAndUpdate(id, {
    quote: String(formData.get("quote") || "").trim(),
    author: String(formData.get("author") || "").trim(),
    rating: Number(formData.get("rating") || 5),
    source: String(formData.get("source") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidateReviewPaths();
  redirect("/admin/reviews");
}

export async function deleteReview(id: string) {
  await dbConnect();
  await Review.findByIdAndDelete(id);
  revalidateReviewPaths();
  redirect("/admin/reviews");
}
