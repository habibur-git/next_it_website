"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import FaqAreaTwo from "@/components/faq/faq-area-2";
import PricingArea from "@/components/pricing/pricing-area";
import FooterTwo from "@/layouts/footers/footer-one";
import HeaderThree from "@/layouts/headers/header-three";
import Wrapper from "@/layouts/wrapper";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const PricingMain = () => {
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
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* pricing hero */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Pricing Plans
                        </h4>
                      </div>
                      <div className="tm-hero-text">
                        <p className="tp_title_anim">
                          Choose the right pricing for you and get started{" "}
                          <br />
                          with your project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing hero */}

              {/* pricing area */}
              <PricingArea />
              {/* pricing area */}

              {/* faq area */}
              <FaqAreaTwo />
              {/* faq area */}
            </main>

            {/* footer area */}
            <FooterTwo />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingMain;
