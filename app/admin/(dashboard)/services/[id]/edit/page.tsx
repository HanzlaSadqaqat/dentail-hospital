import { notFound } from "next/navigation";
import { getServiceById } from "@/lib/content/services";
import ServiceForm from "../../ServiceForm";
import { updateService } from "../../actions";

export const metadata = { title: "Edit Service — Admin" };

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const service = await getServiceById(params.id);
  if (!service) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Service</h1>
      <div className="mt-6 max-w-2xl">
        <ServiceForm action={updateService.bind(null, params.id)} service={service} />
      </div>
    </div>
  );
}
