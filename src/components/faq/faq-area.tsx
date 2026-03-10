"use client";

import faq_banner from "@/assets/img/inner-faq/faq/banner-faq.jpg";
import Image from "next/image";
import { useState } from "react";
import { Search } from "../svg";
import FaqItem from "./faq-item";

// type
type IFaq = {
  id: number;
  question: string;
  answer: string;
};
// faq data
export const faq_data: IFaq[] = [
  {
    id: 1,
    question: "What we do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 2,
    question: "How we do it?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 3,
    question: "How  can i download the products?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 4,
    question: "Free Shipping  & Return Order",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 5,
    question: "Payment options",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 6,
    question: "Best Quality Products",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
];

export default function FaqArea() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="nt-bg-bg nt-rounded-lg nt-overflow-hidden nt-border-b nt-border-solid nt-border-grey-muted">
                <div className="nt-divide-y-0">
                  {faq_data.map((item) => (
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
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
