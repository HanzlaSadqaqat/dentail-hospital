"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import GalleryImage from "@/models/GalleryImage";

export async function createGalleryImage(formData: FormData) {
  await dbConnect();
  await GalleryImage.create({
    imageUrl: String(formData.get("imageUrl") || "").trim(),
    caption: String(formData.get("caption") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/office-gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryImage(id: string, formData: FormData) {
  await dbConnect();
  await GalleryImage.findByIdAndUpdate(id, {
    imageUrl: String(formData.get("imageUrl") || "").trim(),
    caption: String(formData.get("caption") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/office-gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryImage(id: string) {
  await dbConnect();
  await GalleryImage.findByIdAndDelete(id);
  revalidatePath("/office-gallery");
  redirect("/admin/gallery");
}
