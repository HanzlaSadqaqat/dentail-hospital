import TechnologyForm from "../TechnologyForm";
import { createTechnology } from "../actions";

export const metadata = { title: "New Technology Item — Admin" };

export default function NewTechnologyPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Technology Item</h1>
      <div className="mt-6 max-w-2xl">
        <TechnologyForm action={createTechnology} />
      </div>
    </div>
  );
}
