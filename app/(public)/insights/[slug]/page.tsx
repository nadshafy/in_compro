import { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const insight = await prisma.insight.findFirst({
    where: {
      slug: params.slug,
      status: "PUBLISHED",
    },
    select: {
      title: true,
      excerpt: true,
      coverImage: true,
    },
  });

  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      images: insight.coverImage
        ? [
            {
              url: insight.coverImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const insight = await prisma.insight.findFirst({
    where: {
      slug: params.slug,
      status: "PUBLISHED",
    },
  });

  if (!insight) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">{insight.title}</h1>
      <p className="mt-4 text-gray-600">{insight.excerpt}</p>
    </article>
  );
}
