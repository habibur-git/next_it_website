import ErrorMain from "@/pages/error/error-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next IT | Global Branding & Digital Solutions Agency",
  description:
    "Next IT: Your Global Digital Partner. Branding, web design & dev, video editing, and social media design. High-quality digital solutions tailored for growth. See our portfolio and start your project now!",
};

export default function NotFound() {
  return <ErrorMain />;
}
