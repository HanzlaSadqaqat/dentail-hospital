import ServiceForm from "../ServiceForm";
import { createService } from "../actions";

export const metadata = { title: "New Service — Admin" };

export default function NewServicePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">New Service</h1>
      <div className="mt-6 max-w-2xl">
        <ServiceForm action={createService} />
      </div>
    </div>
  );
}
