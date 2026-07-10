"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Service from "@/models/Service";

function linesToArray(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function revalidateServicePaths() {
  revalidatePath("/");
  revalidatePath("/services");
  revalidatePath("/services/[slug]", "page");
}

export async function createService(formData: FormData) {
  await dbConnect();
  await Service.create({
    slug: String(formData.get("slug") || "").trim(),
    name: String(formData.get("name") || "").trim(),
    category: String(formData.get("category") || "General").trim(),
    blurb: String(formData.get("blurb") || "").trim(),
    body: linesToArray(formData.get("body")),
    highlights: linesToArray(formData.get("highlights")),
    image: String(formData.get("image") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidateServicePaths();
  redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
  await dbConnect();
  await Service.findByIdAndUpdate(id, {
    slug: String(formData.get("slug") || "").trim(),
    name: String(formData.get("name") || "").trim(),
    category: String(formData.get("category") || "General").trim(),
    blurb: String(formData.get("blurb") || "").trim(),
    body: linesToArray(formData.get("body")),
    highlights: linesToArray(formData.get("highlights")),
    image: String(formData.get("image") || "").trim(),
    order: Number(formData.get("order") || 0),
  });
  revalidateServicePaths();
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  await dbConnect();
  await Service.findByIdAndDelete(id);
  revalidateServicePaths();
  redirect("/admin/services");
}
