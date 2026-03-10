"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import BrandOne from "@/components/brand/brand-one";
import FooterOne from "@/layouts/footers/footer-one";
import Wrapper from "@/layouts/wrapper";

// images

// animation
import AboutUs from "@/components/about/AboutUs";
import Steps from "@/components/common/Steps";
import Faq from "@/components/faq/Faq";
import Hero from "@/components/hero-banner/hero";
import Header from "@/components/layout/header/Header";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Pricing from "@/components/pricing/Pricing";
import Services from "@/components/service/Services";
import Testimonials from "@/components/testimonial/Testimonials";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
} from "@/utils/title-animation";
import { videoAnimOne } from "@/utils/video-anim";

const HomeMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper showBackToTop={false}>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <Header />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <Hero />
            {/* hero area end */}
            <AboutUs />
            {/* video area */}
            {/* <VideOne /> */}
            {/* video area */}

            {/* brand area */}
            <BrandOne />
            {/* brand area */}

            {/* service area */}
            {/* <ServiceOne /> */}
            <Services />
            {/* service area */}

            {/* project area */}
            <PortfolioGrid />

            <Steps />
            {/* project area */}
            <Pricing />
            {/* award area */}
            {/* <AwardOne /> */}
            {/* award area */}

            {/* team area */}
            {/* <TeamOne /> */}
            {/* team area */}

            {/* testimonial area */}
            <Testimonials />
            {/* testimonial area */}
            <Faq />
            {/* testimonial area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
