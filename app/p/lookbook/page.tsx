import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function LookbookPreviewPage() {
  const pattern = findPattern("lookbook");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
