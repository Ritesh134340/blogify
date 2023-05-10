import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import { useSession } from "next-auth/react";


const BlogList = ({ blog,handleDeleteBlog}) => {
  const { status } = useSession();


  return (
    <>
      <Head />
      <main>
        <div className="my-[10px] border-b-[1px] px-[15px] sm:px-[30px] lg:px-[50px]">
          <div className="py-8 gap-[55px] w-100% flex flexWrap md:flex-nowrap md:gap-[0px] lg:gap-[0px]">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {blog.category.toUpperCase()}
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                {formatDate(blog.createdAt)}
              </span>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {blog.title}
              </h2>
              <p className="leading-relaxed">{blog.shortDes}</p>
              {status === "authenticated" && (
                <button
                  className="mr-[18px]border-[1px] py-[3px] text-white rounded-[5px] bg-red-400 px-[12px]"
                  onClick={() => handleDeleteBlog(blog._id)}
                >
                  Delete
                </button>
              )}
              <p className="text-slate-400 font-bold pointer inline-flex items-center mt-4 ml-[15px]">
                {" "}
                <Link href={`/article/${blog.slug}`}>
                  <span className="flex text-[15px] items-center gap-[8px]">
                    Load More
                    <span>
                      <BsArrowRight />
                    </span>{" "}
                  </span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogList;
