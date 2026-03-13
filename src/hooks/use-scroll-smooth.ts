"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

export default function useScrollSmooth() {
  const [isScrollSmooth] = useState<boolean>(true);

  useGSAP(() => {
    // Register plugins properly
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({
        nullTargetWarn: false,
      });

      // create the smooth scroller FIRST
      ScrollSmoother.create({
        wrapper: smoothWrapper,
        content: smoothContent,
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // example ScrollTrigger (you can remove if not needed)
      ScrollTrigger.create({
        trigger: ".shape",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: false,
      });
    }
  }, [isScrollSmooth]);
}
