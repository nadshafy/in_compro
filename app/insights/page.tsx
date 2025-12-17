"use client";

import Image from "next/image";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type Insight = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
  image?: string;
};

const insights: Insight[] = [
  {
    id: 1,
    title: "Innocent Resources Advances Exploration Activities in Namibia",
    excerpt:
      "The company has expanded its exploration footprint in Namibia, advancing geological surveys and early-stage development activities.",
    date: "2025-01-10",
    category: "Press Release",
    slug: "exploration-activities-namibia",
    featured: true,
    image: "/sample.jpg",
  },
  {
    id: 2,
    title: "Operational Update: Q4 Project Milestones Achieved",
    excerpt:
      "Key operational milestones were achieved across multiple jurisdictions during the fourth quarter.",
    date: "2024-12-18",
    category: "Operations",
    slug: "q4-project-milestones",
    image: "/sample.jpg",
  },
  {
    id: 3,
    title: "Strengthening ESG Practices Across Southern Africa",
    excerpt:
      "The company continues to embed ESG considerations into planning and execution across all active projects.",
    date: "2024-11-30",
    category: "Sustainability",
    slug: "strengthening-esg-practices",
    image: "/sample.jpg",
  },
  {
    id: 4,
    title: "Community Engagement Frameworks in Host Regions",
    excerpt:
      "Community engagement remains central to long-term project success and responsible development.",
    date: "2024-11-05",
    category: "Community",
    slug: "community-engagement-frameworks",
    image: "/sample.jpg",
  },
];

export default function InsightsPage() {
  useRevealOnScroll(".reveal");

  const featuredInsight = insights.find((item) => item.featured);
  const latestInsights = insights.filter((item) => !item.featured);

  return (
    <>
      {/* Page Header */}
      <section className="section gray">
        <div className="container">
          <span className="section-kicker">Insights</span>
          <h1 className="section-title">
            News, Updates & Corporate Insights
          </h1>
          <p className="section-subtitle">
            Official announcements, operational updates, and perspectives from
            Innocent Resources Corporation Limited.
          </p>
        </div>
      </section>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className="section">
          <div className="container">
            <h2 className="section-title reveal">Featured Insight</h2>

            <div className="card reveal delay-1">
              {featuredInsight.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 320,
                    borderRadius: 12,
                    overflow: "hidden",
                    marginBottom: 16,
                  }}
                >
                  <Image
                    src={featuredInsight.image}
                    alt={featuredInsight.title}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              <span className="section-kicker">
                {featuredInsight.category}
              </span>

              <h3 style={{ marginTop: 12 }}>
                {featuredInsight.title}
              </h3>

              <p style={{ marginTop: 12, color: "var(--text-muted)" }}>
                {featuredInsight.excerpt}
              </p>

              <p style={{ marginTop: 8, fontSize: 14 }}>
                {new Date(featuredInsight.date).toLocaleDateString()}
              </p>

              <a
                href={`/insights/${featuredInsight.slug}`}
                className="btn"
                style={{ marginTop: 16 }}
              >
                Read More
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Latest Insights */}
      <section className="section gray">
        <div className="container">
          <h2 className="section-title reveal">Latest Insights</h2>

          <div className="card-grid">
            {latestInsights.map((item) => (
              <div className="card reveal" key={item.id}>
                {item.image && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 180,
                      borderRadius: 10,
                      overflow: "hidden",
                      marginBottom: 12,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}

                <span className="section-kicker">
                  {item.category}
                </span>

                <h4 style={{ marginTop: 8 }}>
                  {item.title}
                </h4>

                <p style={{ marginTop: 8, color: "var(--text-muted)" }}>
                  {item.excerpt}
                </p>

                <p style={{ marginTop: 8, fontSize: 14 }}>
                  {new Date(item.date).toLocaleDateString()}
                </p>

                <a
                  href={`/insights/${item.slug}`}
                  className="btn-outline"
                  style={{ marginTop: 12 }}
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
