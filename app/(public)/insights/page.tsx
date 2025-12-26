import { Metadata } from "next";

export function generateMetadata({
  searchParams,
}: {
  searchParams?: { category?: string };
}): Metadata {
  const category = searchParams?.category;

  const title = category
    ? `${category.replace("-", " ")} Insights`
    : "Insights & News";

  return {
    title,
    description:
      "Latest press releases, corporate news, and insights from Innocent Resources Corporation Limited.",
  };
}

export default function InsightsPage() {
  return null;
}
