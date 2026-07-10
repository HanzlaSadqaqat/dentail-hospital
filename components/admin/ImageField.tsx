"use client";
import { useRef, useState } from "react";

export default function ImageField({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue || "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setValue(data.url);
    } catch {
      setError("Upload failed. Try again or paste a URL instead.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div>
      <label className="admin-label">{label}</label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="url"
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="https://... (paste an image URL)"
          className="admin-field flex-1"
        />
        <label className="btn-ghost cursor-pointer text-sm">
          {uploading ? "Uploading…" : "Upload file"}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" disabled={uploading} />
        </label>
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-coral">{error}</p>}
      {value && (
        <div className="mt-3 h-24 w-24 overflow-hidden rounded-xl bg-cloud ring-1 ring-petrol/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className="h-full w-full object-cover" />
        </div>
      )}
    </div>
  );
}
