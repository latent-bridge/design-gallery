import { notFound } from "next/navigation";
import { findPattern } from "@/lib/patterns";
import { ViewportPreview } from "@/components/ViewportPreview";

export default function TradingCardPreviewPage() {
  const pattern = findPattern("trading-card");
  if (!pattern) notFound();
  return <ViewportPreview pattern={pattern} />;
}
