import BeforeAfterForm from "../BeforeAfterForm";
import { createBeforeAfterCase } from "../actions";

export const metadata = { title: "Add Before & After Case — Admin" };

export default function NewBeforeAfterPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Add Before &amp; After Case</h1>
      <div className="mt-6 max-w-2xl">
        <BeforeAfterForm action={createBeforeAfterCase} />
      </div>
    </div>
  );
}
