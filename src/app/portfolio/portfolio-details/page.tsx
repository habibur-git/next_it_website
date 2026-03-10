"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
import FooterTwo from "@/layouts/footers/footer-one";
import HeaderThree from "@/layouts/headers/header-three";
import Wrapper from "@/layouts/wrapper";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PortfolioDetailsThreeMain = () => {
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
            {/* portfolio details area */}
            <PortfolioDetailsThreeArea />
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsThreeMain;
