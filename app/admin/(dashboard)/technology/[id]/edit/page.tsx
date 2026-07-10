import { notFound } from "next/navigation";
import { getTechnologyById } from "@/lib/content/technology";
import TechnologyForm from "../../TechnologyForm";
import { updateTechnology } from "../../actions";

export const metadata = { title: "Edit Technology Item — Admin" };

export default async function EditTechnologyPage({ params }: { params: { id: string } }) {
  const item = await getTechnologyById(params.id);
  if (!item) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Technology Item</h1>
      <div className="mt-6 max-w-2xl">
        <TechnologyForm action={updateTechnology.bind(null, params.id)} item={item} />
      </div>
    </div>
  );
}
