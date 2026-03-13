"use client";
import Button from "@/components/ui/button";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { gsap } from "gsap";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import error from "@/assets/img/error/error.png";
import Header from "@/components/layout/header/Header";
import FooterTwo from "@/components/layout/footer/Footer";
import Wrapper from "@/layouts/wrapper";

const ErrorMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <Header />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* error hero */}
            <div className="tp-error-area pt-190 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center">
                      <h4 className="tp-error-title">Oops!</h4>
                      <Image
                        priority
                        src={error}
                        alt="error-img"
                        style={{ height: "auto" }}
                      />
                      <div className="tp-error-content">
                        <h4 className="tp-error-title-sm">
                          Something went Wrong...
                        </h4>
                        <p>Sorry, we {"couldn't"} find your page.</p>
                        <Button
                          label="Back to Home"
                          href="/"
                          variant="primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* error hero */}
          </main>

          {/* footer area */}
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;
