"use client";

import { ModuleTitle } from "./ModuleTitle";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep diving into brand values and goals to uncover unique insights for powerful design.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Crafting a tailored creative roadmap and mapping every detail for smooth execution.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Bringing your vision to life through purposeful assets designed for maximum impact.",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Monitoring performance and engagement to refine visuals and ensure long-term success.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Managing official rollouts across platforms with ongoing support to keep brand fresh.",
  },
  {
    number: "06",
    title: "Report",
    description:
      "Delivering insightful reports that celebrate wins and identify growth opportunities.",
  },
];

export default function Steps() {
  return (
    <section className="nt-py-12 nt-pt-0 md:nt-py-16 lg:nt-py-24">
      <div className="nt-container">
        <ModuleTitle
          suppertitle="Our Process"
          title="How we work"
          subtitle="A streamlined workflow designed to turn ambitious goals into measurable brand growth."
          variant="v2"
          colorVariant="light"
        />

        <div className="nt-grid nt-grid-cols-1 md:nt-grid-cols-2 lg:nt-grid-cols-3 nt-gap-px nt-bg-white/10 nt-rounded-3xl nt-overflow-hidden nt-border nt-border-white/10">
          {steps.map((step) => (
            <article
              key={step.number}
              className="nt-group nt-relative nt-bg-bg nt-p-10 nt-transition-all hover:nt-bg-white/[0.02]"
            >
              <div className="nt-relative nt-z-10">
                <div className="nt-flex nt-items-center nt-justify-between nt-mb-8">
                  <span className="nt-text-4xl nt-font-bold nt-text-white/10 nt-tabular-nums group-hover:nt-text-theme/40 nt-transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="nt-text-theme nt-text-xl nt-font-semibold nt-mb-3 nt-tracking-tight">
                  {step.title}
                </h3>

                <p className="nt-text-white/60 nt-text-base">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
