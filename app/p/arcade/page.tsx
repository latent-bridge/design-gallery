import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function ArcadePreviewPage() {
  const pattern = findPattern("arcade");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
