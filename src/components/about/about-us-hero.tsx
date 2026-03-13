import Button from "@/components/ui/button";
import { scroller } from "react-scroll";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className="nt-h-screen nt-flex nt-flex-col nt-justify-end nt-pb-40 nt-bg-cover nt-bg-center nt-bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.8)), url(/assets/img/inner-about/hero/hero-1.jpg)",
      }}
    >
      <div className="nt-container nt-h-full">
        <div className="nt-h-[95%] nt-flex nt-flex-col nt-justify-end">
          <h1 className="nt-text-h1 nt-text-white">
            Building Digital Presence
          </h1>
        </div>

        <div className="nt-flex nt-justify-end">
          <div className="nt-mt-8">
            <p className="nt-text-white/70 nt-text-base">
              Liko develops, designs & delivers websites & creative campaigns
              that drive results,
            </p>
            <Button label="Our Story" href="#" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
