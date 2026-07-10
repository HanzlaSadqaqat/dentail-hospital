import DoctorForm from "../DoctorForm";
import { createDoctor } from "../actions";

export const metadata = { title: "New Doctor — Admin" };

export default function NewDoctorPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Doctor</h1>
      <div className="mt-6 max-w-2xl">
        <DoctorForm action={createDoctor} />
      </div>
    </div>
  );
}
