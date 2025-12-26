"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Category = "PRESS_RELEASE" | "BLOG" | "NEWS" | "UPDATE";

type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: Category;
  createdAt: string;
  coverImage: string | null;
};

export default function InsightsClient({
  page,
  pageSize,
  category,
}: {
  page: number;
  pageSize: number;
  category: string | null;
}) {
  const [items, setItems] = useState<Insight[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", String(pageSize));
    if (category) params.set("category", category);

    fetch(`/api/insights?${params.toString()}`, {
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setTotalPages(data.totalPages || 1);
      })
      .finally(() => setLoading(false));
  }, [page, pageSize, category]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-500">Loading insights…</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">Insights</h1>
        <p className="text-gray-600 mt-2">
          Press releases, blogs, and company updates
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border bg-white overflow-hidden hover:shadow transition"
          >
            <Link href={`/insights/${item.slug}`}>
              <div className="h-48 bg-gray-100">
                {item.coverImage ? (
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-red-700">
                  {item.category.replace("_", " ")}
                </span>

                <h2 className="mt-2 text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  {item.excerpt}
                </p>

                <time className="block mt-4 text-xs text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/insights?page=${i + 1}${
              category ? `&category=${category}` : ""
            }`}
            className={`px-3 py-1 rounded border text-sm ${
              page === i + 1
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </main>
  );
}
