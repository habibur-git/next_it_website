"use client";

import Image from "next/image";
import { blog_modern } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import { Blog, IBlogDT } from "@/types/blog-d-t";
import BlogItem from "./blog-item/blog-item";
import useSWR from "swr";
import moment from "moment";

export default function BlogModern() {
  const { data: blogs, isLoading } = useSWR("/api/blogs", {
    fallbackData: [],
  });

  // const blog_items = [...blog_modern];
  // const first_blog = blog_items[0];
  // const other_blogs = blog_items.filter((b) => b !== first_blog);
  // const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(other_blogs, 6);

  const first_blog: Blog | null = blogs.length > 0 ? blogs[0] : null;
  const other_blogs: Blog[] = blogs.length > 1 ? blogs.slice(1) : [];
  const { currentItems, handlePageClick, pageCount } = usePagination<Blog>(other_blogs, 6);

  return (
    <>
      <div className="tp-blog-standard-area pt-170">
        <div className="container container-1500">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-standard-thumb-box p-relative">
                {first_blog?.coverImage && <img data-speed=".8" className="w-100" src={first_blog?.coverImage} alt="blog-img" />}
                <div className="tp-blog-standard-title-box d-none d-sm-block">
                  <h4
                    className="tp-blog-standard-title tp-char-animation"
                    dangerouslySetInnerHTML={{ __html: first_blog?.title || "" }}
                  ></h4>
                </div>
                <div className="tp-blog-standard-meta d-none d-sm-block">
                  {/* <span>
                    {first_blog?.createdAt.split(".")[1]} <br />{" "}
                    {first_blog?.createdAt.split(".")[0]}
                  </span> */}
                   <span>
                    {moment(first_blog?.createdAt).format('ll').split(" ")[0]} <br />{" "}
                    {moment(first_blog?.createdAt).format('l').split("/")[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-realated-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            {currentItems.map((item: Blog) => (
              <div key={item._id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <BlogItem item={item} />
              </div>
            ))}

            <div className="col-12">
              <div className="basic-pagination mt-40 d-flex align-items-center justify-content-center">
                <nav>
                  <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
