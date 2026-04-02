import BlogDetailsMain from "@/pages/blog/blog-details";
import { PageParamsProps } from "@/types/custom-d-t";

export async function generateMetadata(props: PageParamsProps) {
  return {
    title: "Next IT | Global Branding & Digital Solutions Agency",
        description: "Next IT: Your Global Digital Partner. Branding, web design & dev, video editing, and social media design. High-quality digital solutions tailored for growth. See our portfolio and start your project now!",
export default async function BlogDetailsPage(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;

  return <BlogDetailsMain id={id as string} />;
}
