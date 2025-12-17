"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Image from "next/image";

export default function OpportunitiesPage() {
  useRevealOnScroll(".reveal");

  return (
    <>
    <section>
          <div className="full-bleed-image reveal">
            <Image
              src="/career.jpg"
              alt="Mining operations integrated with surrounding environment"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </section>

      {/* Page Header */}
      <section className="section gray">
        <div className="container">
          <span className="section-kicker">Opportunities</span>
          <h1 className="section-title">
            Investment & Career Opportunities
          </h1>
          <p className="section-subtitle">
            Discover opportunities to engage with Innocent Resources Corporation
            Limited through strategic investment, partnership, and professional
            career development.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Overview</h2>
          <p className="section-subtitle reveal delay-1">
            Our opportunities span both capital participation and human
            development. We engage with investors seeking long-term value and
            professionals committed to responsible mineral development.
          </p>
        </div>
      </section>

      {/* Investor Opportunities */}
      <section className="section gray">
        <div className="container">
          <h2 className="section-title reveal">Investor Opportunities</h2>

          <div className="focus-grid">
            <div className="focus-item reveal delay-1">
              <h3 className="focus-title">Project Investment</h3>
              <p className="focus-text">
                Participation in exploration and development projects across
                resource-rich jurisdictions in Southern Africa.
              </p>
            </div>

            <div className="focus-item reveal delay-2">
              <h3 className="focus-title">Strategic Partnerships</h3>
              <p className="focus-text">
                Collaboration with industry partners across mining,
                beneficiation, logistics, and technology integration.
              </p>
            </div>

            <div className="focus-item reveal delay-3">
              <h3 className="focus-title">Joint Ventures</h3>
              <p className="focus-text">
                Long-term joint venture structures aligned with disciplined
                governance and sustainable development objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Career Opportunities</h2>

          <p className="section-subtitle reveal delay-1">
            We seek individuals who value safety, integrity, and operational
            excellence across our mining and development activities.
          </p>

          <div className="focus-grid">
            <div className="focus-item reveal delay-1">
              <h3 className="focus-title">Mining & Operations</h3>
              <p className="focus-text">
                Roles across open-cast mining, processing, site management, and
                operational support.
              </p>
            </div>

            <div className="focus-item reveal delay-2">
              <h3 className="focus-title">Engineering & Technical</h3>
              <p className="focus-text">
                Opportunities in geology, mining engineering, processing,
                environmental management, and technical services.
              </p>
            </div>

            <div className="focus-item reveal delay-3">
              <h3 className="focus-title">Corporate & Administration</h3>
              <p className="focus-text">
                Positions in finance, compliance, procurement, human resources,
                and corporate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Internships */}
      <section className="section gray">
        <div className="container">
          <h2 className="section-title reveal">Training & Internships</h2>

          <p className="section-subtitle reveal delay-1">
            We support skill development and early-career exposure through
            structured training programs and internship opportunities.
          </p>

          <div className="focus-grid">
            <div className="focus-item reveal delay-1">
              <h3 className="focus-title">Graduate Programs</h3>
              <p className="focus-text">
                Entry-level opportunities for graduates seeking hands-on
                experience in the mining industry.
              </p>
            </div>

            <div className="focus-item reveal delay-2">
              <h3 className="focus-title">Student Internships</h3>
              <p className="focus-text">
                Practical exposure for students in geology, engineering, and
                related disciplines.
              </p>
            </div>

            <div className="focus-item reveal delay-3">
              <h3 className="focus-title">Ongoing Development</h3>
              <p className="focus-text">
                Continuous training initiatives focused on safety,
                certification, and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Engage With Us</h2>

          <p className="section-subtitle reveal delay-1">
            To explore investment opportunities or career pathways, please
            contact our team through the appropriate channels.
          </p>

          <a href="/contact" className="btn reveal delay-2">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
