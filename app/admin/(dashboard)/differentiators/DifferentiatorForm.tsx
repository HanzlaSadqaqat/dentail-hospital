import type { DifferentiatorDTO } from "@/lib/content/differentiators";

export default function DifferentiatorForm({
  action,
  item,
}: {
  action: (formData: FormData) => void;
  item?: DifferentiatorDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <div>
        <label className="admin-label" htmlFor="title">Title</label>
        <input id="title" name="title" required defaultValue={item?.title} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="desc">Description</label>
        <textarea id="desc" name="desc" required rows={3} defaultValue={item?.desc} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={item?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
