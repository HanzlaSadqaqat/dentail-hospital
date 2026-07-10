import { notFound } from "next/navigation";
import { getBeforeAfterCaseById } from "@/lib/content/beforeAfter";
import BeforeAfterForm from "../../BeforeAfterForm";
import { updateBeforeAfterCase } from "../../actions";

export const metadata = { title: "Edit Before & After Case — Admin" };

export default async function EditBeforeAfterPage({ params }: { params: { id: string } }) {
  const item = await getBeforeAfterCaseById(params.id);
  if (!item) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Edit Before &amp; After Case</h1>
      <div className="mt-6 max-w-2xl">
        <BeforeAfterForm action={updateBeforeAfterCase.bind(null, params.id)} item={item} />
      </div>
    </div>
  );
}
