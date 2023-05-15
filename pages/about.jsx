import React from "react";
import Head from "next/head";

import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Blogify.today</title>
      </Head>
      <h1 className="text-xl text-center md:text-2xl mt-[70px] pt-[25px] pb-[15px] lg:text-3xl font-bold bg-[rgb(243,233,233)]">
        About Blogify.today
      </h1>

      <div className="bg-[rgb(243,233,233)] flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="w-[100%] px-[15px] pb-[25px] md:px-[20px] lg:w-[40%] lg:px-[30px]">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Blogify.today is a website where you can read different blogs
            related to Next.js, React.js, HTML, CSS, and other web development
            topics.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Our mission is to provide high-quality content that helps developers
            improve their skills and stay up-to-date with the latest web
            development trends.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Blogify.today was founded in 2023 by a team of experienced web
            developers who wanted to create a platform for sharing their
            knowledge and expertise with the wider community. We&apos;re
            passionate about web development and we&apos;re committed to helping
            others learn and grow in their careers.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            If you have any questions, comments, or feedback, please don&apos;st
            hesitate to us. We&apos;sd love to hear from you!
          </p>
        </div>
        <div className="flex-1">
          <Image
            className="w-[100%]"
            src="/assets/about_illus.svg"
            width={400}
            height={400}
            alt="illustration"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default About;
