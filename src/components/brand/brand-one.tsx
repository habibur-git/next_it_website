import BrandSlider from "./brand-slider";

const BrandOne = () => {
  return (
    <section className="nt-pt-0 nt-pb-24">
      <div className="nt-container nt-max-w-[1630px] nt-mx-auto nt-px-4">
        <div className="nt-border-t nt-border-white/10 nt-py-10">
          <div className="nt-grid nt-grid-cols-1 lg:nt-grid-cols-12 nt-gap-8 lg:nt-gap-10 nt-items-center">
            <div className="lg:nt-col-span-3">
              <h4 className="nt-text-white nt-font-title nt-text-h5">
                Clients We Worked With{" "}
              </h4>
            </div>
            <div className="lg:nt-col-span-9">
              <BrandSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOne;
