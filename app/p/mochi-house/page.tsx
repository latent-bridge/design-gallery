import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function MochiHousePreviewPage() {
  const pattern = findPattern("mochi-house");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
