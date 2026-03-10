"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import AboutUsArea from "@/components/about/about-us-area";
import AboutUsHero from "@/components/about/about-us-hero";
import BrandFive from "@/components/brand/brand-five";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import TeamOne from "@/components/team/team-one";
import HeaderThree from "@/layouts/headers/header-three";
import Wrapper from "@/layouts/wrapper";
// animation
import AboutWork from "@/components/work/about-work";
import FooterOne from "@/layouts/footers/footer-one";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
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
            {/* about hero */}
            <AboutUsHero />
            {/* about hero */}

            {/* about area */}
            <AboutUsArea />
            {/* about area */}

            {/* team area */}
            <TeamOne spacing="" />
            {/* team area */}

            <AboutWork />

            {/* fun fact area */}
            <FunFactOne />
            {/* fun fact area */}

            {/* brand area */}
            <BrandFive />
            {/* brand area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
