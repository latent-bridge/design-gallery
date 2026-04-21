import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function CafeMenuPreviewPage() {
  const pattern = findPattern("cafe-menu");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
