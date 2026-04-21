import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function TeaHousePreviewPage() {
  const pattern = findPattern("tea-house");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
