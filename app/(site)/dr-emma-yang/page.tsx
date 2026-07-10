import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/lib/content/doctors";
import DoctorProfile from "@/components/DoctorProfile";
export const metadata = { title: "Dr. Emma Yang, DMD — Dentist in Bear, DE" };
export const revalidate = 3600;
export default async function Page() {
  const doctor = await getDoctorBySlug("dr-emma-yang");
  if (!doctor) notFound();
  return <DoctorProfile doctor={doctor} />;
}
