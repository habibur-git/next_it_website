"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
// import FooterTwo from "@/layouts/footers/footer";
import Wrapper from "@/layouts/wrapper";
// animation
import EditorPreview from "@/components/blog/editor-preview";
import Header from "@/components/layout/header/Header";
import { IBlog } from "@/types/custom-d-t";
import { charAnimation } from "@/utils/title-animation";
import useSWR from "swr";

interface BlogDetailsMainProps {
  id: string;
}

export default function BlogDetailsMain({ id }: BlogDetailsMainProps) {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  const { data: blog, isLoading } = useSWR(`/api/blogs/${id}`, {
    fallbackData: {},
  });

  if (isLoading) {
    return "loading...";
  } else if (!isLoading && Object.values(blog).length === 0) {
    return "Not found";
  }

  const { content = "" } = (blog as IBlog) || {};

  return (
    <Wrapper>
      {/* header area start */}
      <Header />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <EditorPreview data={content} />

          <main>
            {/* blog details hero */}
            {/* <BlogDetailsBreadcrumb id={id} /> */}
            {/* blog details hero */}

            {/* blog details area */}
            {/* <BlogDetailsArea /> */}
            {/* blog details area */}

            {/* related posts */}
            {/* <BlogDetailsRelatedPosts /> */}
            {/* related posts */}
          </main>

          {/* footer area */}
          {/* <FooterTwo /> */}
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
}
