import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  {
    id: 1,
    title: "VIDEO CREATION",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_1,
  },
  {
    id: 2,
    title: "ART DIRECTION",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_2,
  },
  {
    id: 3,
    title: "MOTION DESIGN",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_3,
  },
  {
    id: 4,
    title: "BRAND STRATEGY",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp-char-animation">I Think a lot</span>
              <h4 className="tp-section-title tp-char-animation">
                Thoughtful<br />
                <span>Process</span>
              </h4>
            </div>

            <div className="tp-service-left-btn tp-btn-bounce">
              <Button
                label="See All Services"
                href="/service"
                variant="secondary"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="/service-details">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
