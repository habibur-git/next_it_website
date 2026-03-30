"use client";

// internal imports
import FooterTwo from "@/components/layout/footer/Footer";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
// animation
import Header from "@/components/layout/header/Header";

const Page = () => {
  return (
    <>
      <Header />

      <main>
        <div className="tm-hero-area  nt-pb-0 nt-pt-56">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle">Liko Studio</span>
                  <h4 className="tm-hero-title fs-220 tp-char-animation">
                    Classic Grid
                  </h4>
                </div>
                <div className="tm-hero-text tp_title_anim">
                  <p>
                    We’re a diverse team that works as fancies attention to
                    details, enjoys beers on Friday nights and aspires to design
                    the dent in the universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PortfolioGrid variant="two" />
      </main>
      <FooterTwo />
    </>
  );
};

export default Page;
