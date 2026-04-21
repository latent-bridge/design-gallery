import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function NotebookPreviewPage() {
  const pattern = findPattern("notebook");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
