"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
import FooterTwo from "@/components/layout/footer/Footer";
import Wrapper from "@/layouts/wrapper";
// animation
import Header from "@/components/layout/header/Header";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import useSWR from "swr";
import EditorPreview from "@/components/blog/editor-preview";

interface PortfolioDetailsProps {
    id: string;
}

export default function PortfolioDetails({ id }: PortfolioDetailsProps) {
    const { data: portfolio, isLoading } = useSWR(`/api/portfolio/${id}`, {
        fallbackData: {},
    });

    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    }, [portfolio]);

    console.log(portfolio);

    if(isLoading) {
        return "loading..."
    }

    const {bannerImage, content} = portfolio ||{}

    return (
        <Wrapper>
            {/* header area start */}
            <Header />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <EditorPreview className="pt-12" data={content} />
                        {/* portfolio details area */}
                        {/* <PortfolioDetailsThreeArea /> */}
                        {/* portfolio details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
}
