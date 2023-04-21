import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import Head from "next/head";


const BlogList = ({ blog }) => {
  return (
    <>
    <Head/>
    <main>
    <div className="border-[3px]">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flexWrap md:flex-nowrap">
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

                <p className="text-indigo-500 pointer inline-flex items-center mt-4">
                  {" "}
                  <Link href={`/article/${blog.slug}`}>Load More </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    </>
   
  );
};

export default BlogList;
