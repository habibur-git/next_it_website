"use client";

import { RiAddLine } from "react-icons/ri";

type IProps = {
  item: { id: number; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ item, isOpen, onToggle }: IProps) {
  return (
    <div className="nt-faq-item">
      <h2>
        <button
          type="button"
          onClick={onToggle}
          className="nt-w-full nt-flex nt-items-center nt-justify-between nt-gap-4 nt-text-left nt-py-8 nt-text-white nt-font-normal "
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          id={`faq-question-${item.id}`}
        >
          <span className="nt-flex-1 nt-min-w-0 nt-text-h5 nt-text-white">
            {item.question}
          </span>
          <RiAddLine
            className={`nt-shrink-0 nt-w-6 nt-h-6 nt-transition-transform nt-duration-200 ${
              isOpen ? "nt-rotate-45" : ""
            }`}
            aria-hidden
          />
        </button>
      </h2>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className="nt-grid nt-transition-all nt-duration-200 nt-ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="nt-min-h-0 nt-overflow-hidden">
          <p className="nt-text-white/60 nt-pb-8 nt-pt-0">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
