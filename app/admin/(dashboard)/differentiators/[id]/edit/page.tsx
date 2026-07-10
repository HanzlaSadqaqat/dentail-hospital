import { notFound } from "next/navigation";
import { getDifferentiatorById } from "@/lib/content/differentiators";
import DifferentiatorForm from "../../DifferentiatorForm";
import { updateDifferentiator } from "../../actions";

export const metadata = { title: "Edit Differentiator — Admin" };

export default async function EditDifferentiatorPage({ params }: { params: { id: string } }) {
  const item = await getDifferentiatorById(params.id);
  if (!item) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Why Choose Us Item</h1>
      <div className="mt-6 max-w-2xl">
        <DifferentiatorForm action={updateDifferentiator.bind(null, params.id)} item={item} />
      </div>
    </div>
  );
}
