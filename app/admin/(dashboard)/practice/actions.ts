"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import Practice, { PRACTICE_SINGLETON_ID } from "@/models/Practice";

function linesToArray(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function linesToPairs(value: FormDataEntryValue | null, sep = "|") {
  return linesToArray(value).map((line) => {
    const [key, ...rest] = line.split(sep);
    return { day: key.trim(), time: rest.join(sep).trim() };
  });
}

function linesToNameHref(value: FormDataEntryValue | null) {
  return linesToArray(value).map((line) => {
    const [name, ...rest] = line.split("|");
    return { name: name.trim(), href: rest.join("|").trim() };
  });
}

export async function updatePractice(formData: FormData) {
  await dbConnect();
  await Practice.findByIdAndUpdate(
    PRACTICE_SINGLETON_ID,
    {
      name: String(formData.get("name") || "").trim(),
      shortName: String(formData.get("shortName") || "").trim(),
      tagline: String(formData.get("tagline") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      phoneHref: String(formData.get("phoneHref") || "").trim(),
      address: {
        line1: String(formData.get("addressLine1") || "").trim(),
        city: String(formData.get("addressCity") || "").trim(),
        state: String(formData.get("addressState") || "").trim(),
        zip: String(formData.get("addressZip") || "").trim(),
      },
      mapEmbed: String(formData.get("mapEmbed") || "").trim(),
      hours: linesToPairs(formData.get("hours")),
      socials: linesToNameHref(formData.get("socials")),
      areas: linesToArray(formData.get("areas")),
      teamImage: String(formData.get("teamImage") || "").trim(),
    },
    { upsert: true }
  );

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/contact");
  revalidatePath("/meet-our-team");
  revalidatePath("/dr-weidong-yang");
  revalidatePath("/dr-emma-yang");
  revalidatePath("/dental-savings-plan");
  revalidatePath("/new-patients");
  redirect("/admin/practice");
}
