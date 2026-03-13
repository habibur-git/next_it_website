import { testimonialData } from "@/data/testimonials";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS - loaded asynchronously via Next.js
import "swiper/css";

import { brandLogos } from "@/data/brand";

const brandList = [...brandLogos, brandLogos[1]];

export default function BrandFive() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  return (
    <div className="ab-brand-area pt-120 pb-120 black-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brandList.map((b, i) => (
                    <div key={i} className="ab-brand-item">
                      <Image
                        src={b.image}
                        alt={b.alt}
                        width={220}
                        height={50}
                        className="nt-object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={2}
            autoplay={true}
            speed={500}
            grabCursor
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="nt-rounded-3xl nt-p-6 md:nt-p-8 nt-h-full nt-bg-black"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="nt-flex nt-flex-col nt-justify-between nt-min-h-[280px] md:nt-min-h-[350px]">
                    <div>
                      <RiDoubleQuotesL className="nt-mb-4 md:nt-mb-6 nt-text-[36px] text-desc" />
                      <h4 className="nt-mb-6 nt-text-white md:nt-text-[24px] nt-font-normal">
                        {item.text}
                      </h4>
                    </div>

                    <div className="nt-flex nt-items-center nt-justify-between nt-gap-4 nt-mt-auto">
                      <div className="nt-flex nt-items-center nt-gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="nt-rounded-full nt-w-14 nt-h-14 md:nt-w-16 md:nt-h-16 nt-object-cover"
                        />
                        <div className="nt-w-full">
                          <h5 className="nt-text-base nt-text-white nt-font-semibold">
                            {item.name}
                          </h5>
                          <p className="nt-text-sm nt-text-white/50 nt-mt-1">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                      <div className="nt-flex nt-items-center nt-justify-center nt-min-w-12 nt-min-h-12 bg-bg nt-rounded-full">
                        <span
                          className="text-h4"
                          role="img"
                          aria-label="country flag"
                        >
                          {item.countryFlag}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
