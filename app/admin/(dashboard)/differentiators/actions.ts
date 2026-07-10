"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Differentiator from "@/models/Differentiator";

export async function createDifferentiator(formData: FormData) {
  await dbConnect();
  await Differentiator.create({
    title: String(formData.get("title") || "").trim(),
    desc: String(formData.get("desc") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/");
  redirect("/admin/differentiators");
}

export async function updateDifferentiator(id: string, formData: FormData) {
  await dbConnect();
  await Differentiator.findByIdAndUpdate(id, {
    title: String(formData.get("title") || "").trim(),
    desc: String(formData.get("desc") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/");
  redirect("/admin/differentiators");
}

export async function deleteDifferentiator(id: string) {
  await dbConnect();
  await Differentiator.findByIdAndDelete(id);
  revalidatePath("/");
  redirect("/admin/differentiators");
}
