"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import BeforeAfterCase from "@/models/BeforeAfterCase";

export async function createBeforeAfterCase(formData: FormData) {
  await dbConnect();
  await BeforeAfterCase.create({
    before: String(formData.get("before") || "").trim(),
    after: String(formData.get("after") || "").trim(),
    caption: String(formData.get("caption") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/before-after-gallery");
  redirect("/admin/before-after");
}

export async function updateBeforeAfterCase(id: string, formData: FormData) {
  await dbConnect();
  await BeforeAfterCase.findByIdAndUpdate(id, {
    before: String(formData.get("before") || "").trim(),
    after: String(formData.get("after") || "").trim(),
    caption: String(formData.get("caption") || "").trim() || undefined,
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/before-after-gallery");
  redirect("/admin/before-after");
}

export async function deleteBeforeAfterCase(id: string) {
  await dbConnect();
  await BeforeAfterCase.findByIdAndDelete(id);
  revalidatePath("/before-after-gallery");
  redirect("/admin/before-after");
}
