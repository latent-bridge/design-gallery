import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function ShoujoComicPreviewPage() {
  const pattern = findPattern("shoujo-comic");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
