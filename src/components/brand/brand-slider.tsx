"use client";
import { brandLogos } from "@/data/brand";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandList = [...brandLogos, ...brandLogos];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee speed={100} loop={0} className="brand-wrapper">
        {brandList.map((b, i) => (
          <div key={i} style={{ height: "auto", width: "180px" }}>
            <Image
              src={b.image}
              alt={b.alt}
              width={180}
              height={80}
              className="nt-object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
