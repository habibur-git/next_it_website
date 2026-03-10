"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import ServiceDetailsArea from "@/components/service/service-details-area";
import FooterTwo from "@/layouts/footers/footer-one";
import HeaderThree from "@/layouts/headers/header-three";
import Wrapper from "@/layouts/wrapper";
// animation
import FaqAreaTwo from "@/components/faq/faq-area-2";
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const ServiceDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service details area */}
            <ServiceDetailsArea />
            {/* service details area */}
            <FaqAreaTwo />
          </main>

          {/* footer area */}
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsMain;
