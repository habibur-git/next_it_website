"use client";

import {
  faqData,
  type FaqItem as FaqItemType,
  type FaqSectionKey,
} from "@/data/faq";
import { useState } from "react";
import FaqItem from "./faq-item";

type FaqProps = {
  /** Which FAQ dataset to use (home, aboutus, services). Defaults to "home". */
  data?: FaqSectionKey;
};

export default function Faq({ data = "home" }: FaqProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const items: FaqItemType[] = faqData[data];

  return (
    <div className="nt-space">
      <div className="nt-container">
        <div className="nt-grid nt-grid-cols-1 lg:nt-grid-cols-12 nt-gap-10 nt-w-full nt-mb-16">
          <div className="nt-col-span-5">
            <h2 className="nt-text-h2 nt-text-white">
              Frequently Asked Question
            </h2>
            <p className="nt-text-grey-muted nt-text-small nt-mt-2 nt-mb-0">
              We believe in making life-long connections through great
              communication.
            </p>
          </div>
          <div className="nt-col-span-7 nt-flex nt-justify-end">
            <div className="nt-border nt-border-white/10">
              {items.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === item.id ? null : item.id))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
