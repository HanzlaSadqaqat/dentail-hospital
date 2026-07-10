import { notFound } from "next/navigation";
import { getDoctorById } from "@/lib/content/doctors";
import DoctorForm from "../../DoctorForm";
import { updateDoctor } from "../../actions";

export const metadata = { title: "Edit Doctor — Admin" };

export default async function EditDoctorPage({ params }: { params: { id: string } }) {
  const doctor = await getDoctorById(params.id);
  if (!doctor) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Doctor</h1>
      <div className="mt-6 max-w-2xl">
        <DoctorForm action={updateDoctor.bind(null, params.id)} doctor={doctor} />
      </div>
    </div>
  );
}
