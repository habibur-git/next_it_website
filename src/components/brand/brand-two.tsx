import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
import { brandLogos } from "@/data/brand";

const defaultTexts = [
  "TopoChico.com",
  "TopoChico.com",
  "TopoChico.com",
  "TopoChico.com",
  "TopoChico.com",
  "TopoChico.com",
];

const brand_data = brandLogos.map((item, index) => ({
  id: index + 1,
  brand: item.image,
  alt: item.alt,
  texts: defaultTexts,
}));

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative">
            <Image src={item.brand} alt={item.alt} width={200} height={80} style={{ height: "auto" }} />
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
