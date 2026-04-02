import BlogDetailsMain from "@/pages/blog/blog-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next IT | Global Branding & Digital Solutions Agency",
  description:
    "Next IT: Your Global Digital Partner. Branding, web design & dev, video editing, and social media design. High-quality digital solutions tailored for growth. See our portfolio and start your project now!",
};

const BlogDetailsPage = () => {
  return <BlogDetailsMain id={"1"} />;
};

export default BlogDetailsPage;
