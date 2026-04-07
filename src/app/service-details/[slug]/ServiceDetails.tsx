"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import ServiceDetailsArea from "@/components/service/service-details-area";
import FooterTwo from "@/components/layout/footer/Footer";
import HeaderThree from "@/layouts/headers/header-three";
import Wrapper from "@/layouts/wrapper";
// animation
import Faq from "@/components/faq/Faq";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import EditorPreview from "@/components/blog/editor-preview";
import useSWR from "swr";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header/Header";

interface ServiceDetailsProps {
    slug: string;
}

export default function ServiceDetails({ slug }: ServiceDetailsProps) {
    const { data: service, isLoading } = useSWR(`/api/services/${slug}`, {
        fallbackData: {},
    });

    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    }, [service]);

    if (isLoading) {
        return "loading..."
    } else if (!isLoading && Object.values(service).length === 0) {
        return notFound();
    }

    const { content = "" } = service || {}

    return (
        <Wrapper>
            {/* header area start */}
            <Header />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* service details area */}
                        {/* <ServiceDetailsArea /> */}
                        {/* service details area */}
                        <EditorPreview className="pt-10" data={content} />
                        <Faq />
                    </main>

                    {/* footer area */}
                    <FooterTwo />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
}
