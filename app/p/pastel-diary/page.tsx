import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function PastelDiaryPreviewPage() {
  const pattern = findPattern("pastel-diary");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
