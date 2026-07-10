import ImageField from "@/components/admin/ImageField";
import type { BeforeAfterCaseDTO } from "@/lib/content/beforeAfter";

export default function BeforeAfterForm({
  action,
  item,
}: {
  action: (formData: FormData) => void;
  item?: BeforeAfterCaseDTO;
}) {
  return (
    <form action={action} className="grid gap-5">
      <ImageField name="before" label="Before image" defaultValue={item?.before} />
      <ImageField name="after" label="After image" defaultValue={item?.after} />
      <div>
        <label className="admin-label" htmlFor="caption">Caption (optional)</label>
        <input id="caption" name="caption" defaultValue={item?.caption} className="admin-field" />
      </div>
      <div>
        <label className="admin-label" htmlFor="order">Display order</label>
        <input id="order" name="order" type="number" defaultValue={item?.order ?? 0} className="admin-field max-w-[8rem]" />
      </div>
      <button type="submit" className="btn-coral justify-self-start">Save</button>
    </form>
  );
}
