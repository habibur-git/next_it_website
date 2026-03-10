import { Blog, IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";
import moment from "moment";

export default function BlogItem({ item }: { item: Blog }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        {item.coverImage && <img src={item.coverImage} alt="blog-img" style={{ height: "auto" }} />}
        <div className="tp-blog-meta">
          <span>{moment(item.createdAt).format('ll')}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        {/* <span>{item.category || ""}</span> */}
        <span>Branding / Creative</span>
        <h4 className="tp-blog-title-sm">
          <Link href={`/blog-details/${item._id}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
