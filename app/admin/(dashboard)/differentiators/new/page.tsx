import DifferentiatorForm from "../DifferentiatorForm";
import { createDifferentiator } from "../actions";

export const metadata = { title: "New Differentiator — Admin" };

export default function NewDifferentiatorPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Why Choose Us Item</h1>
      <div className="mt-6 max-w-2xl">
        <DifferentiatorForm action={createDifferentiator} />
      </div>
    </div>
  );
}
