import ImageField from "@/components/admin/ImageField";
import { getPractice } from "@/lib/content/practice";
import { updatePractice } from "./actions";

export const metadata = { title: "Practice Info — Admin" };
export const dynamic = "force-dynamic";

export default async function AdminPracticePage() {
  const p = await getPractice();

  const hoursText = p.hours.map((h) => `${h.day}|${h.time}`).join("\n");
  const socialsText = p.socials.map((s) => `${s.name}|${s.href}`).join("\n");
  const areasText = p.areas.join("\n");

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-petrol">Practice Info</h1>
      <form action={updatePractice} className="mt-6 max-w-2xl grid gap-5">

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="admin-label" htmlFor="name">Full practice name</label>
            <input id="name" name="name" required defaultValue={p.name} className="admin-field" />
          </div>
          <div>
            <label className="admin-label" htmlFor="shortName">Short name</label>
            <input id="shortName" name="shortName" required defaultValue={p.shortName} className="admin-field" />
          </div>
        </div>

        <div>
          <label className="admin-label" htmlFor="tagline">Tagline</label>
          <input id="tagline" name="tagline" defaultValue={p.tagline} className="admin-field" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="admin-label" htmlFor="phone">Phone (display)</label>
            <input id="phone" name="phone" required defaultValue={p.phone} placeholder="(302) 123-4567" className="admin-field" />
          </div>
          <div>
            <label className="admin-label" htmlFor="phoneHref">Phone href</label>
            <input id="phoneHref" name="phoneHref" required defaultValue={p.phoneHref} placeholder="tel:+13021234567" className="admin-field" />
          </div>
        </div>

        <fieldset className="grid gap-3 rounded-xl border border-cloud p-4">
          <legend className="admin-label px-1">Address</legend>
          <div>
            <label className="admin-label" htmlFor="addressLine1">Street</label>
            <input id="addressLine1" name="addressLine1" defaultValue={p.address.line1} className="admin-field" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="admin-label" htmlFor="addressCity">City</label>
              <input id="addressCity" name="addressCity" defaultValue={p.address.city} className="admin-field" />
            </div>
            <div>
              <label className="admin-label" htmlFor="addressState">State</label>
              <input id="addressState" name="addressState" defaultValue={p.address.state} className="admin-field" />
            </div>
            <div>
              <label className="admin-label" htmlFor="addressZip">ZIP</label>
              <input id="addressZip" name="addressZip" defaultValue={p.address.zip} className="admin-field" />
            </div>
          </div>
        </fieldset>

        <div>
          <label className="admin-label" htmlFor="mapEmbed">Google Maps embed URL</label>
          <input id="mapEmbed" name="mapEmbed" defaultValue={p.mapEmbed} className="admin-field" />
        </div>

        <div>
          <label className="admin-label" htmlFor="hours">
            Hours (one per line, format: <code className="text-xs">Day|Hours</code>)
          </label>
          <textarea id="hours" name="hours" rows={8} defaultValue={hoursText} className="admin-field font-mono text-sm" placeholder={"Monday|8:00 AM – 5:00 PM\nTuesday|8:00 AM – 5:00 PM"} />
        </div>

        <div>
          <label className="admin-label" htmlFor="socials">
            Social links (one per line, format: <code className="text-xs">Name|URL</code>)
          </label>
          <textarea id="socials" name="socials" rows={4} defaultValue={socialsText} className="admin-field font-mono text-sm" placeholder={"Facebook|https://facebook.com/...\nInstagram|https://instagram.com/..."} />
        </div>

        <div>
          <label className="admin-label" htmlFor="areas">Areas served (one per line)</label>
          <textarea id="areas" name="areas" rows={4} defaultValue={areasText} className="admin-field" />
        </div>

        <ImageField name="teamImage" label="Team photo" defaultValue={p.teamImage} />

        <button type="submit" className="btn-coral justify-self-start">Save Changes</button>
      </form>
    </div>
  );
}
