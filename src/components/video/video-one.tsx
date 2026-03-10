"use client";
const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        <video
          src="/assets/video/hero.mp4"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          {/* <source src={Hero} type="video/mp4" /> */}
        </video>
      </div>
    </div>
  );
};

export default VideOne;
