import React from 'react'
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About | Blogify.today</title>
      </Head>
      
      <div className="w-95%  mx-auto mt-[130px] mb-[50px] px-4 md:w-[85%] md:mb-[50px]  md:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl mb-[30px] lg:text-3xl font-bold mt-8 ">About Blogify.today</h1>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1  md:mr-8">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Blogify.today is a website where you can read different blogs related to Next.js, React.js, HTML, CSS, and other web development topics.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Our mission is to provide high-quality content that helps developers improve their skills and stay up-to-date with the latest web development trends.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              We believe that the best way to learn is by doing, so we encourage our readers to try out the examples and tutorials on their own and experiment with new technologies and techniques.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              In addition to blog posts, we also offer a variety of resources for web developers, including video tutorials, podcasts, and community forums where you can connect with other developers and share your knowledge and experiences.
            </p>
          </div>
        
        </div>
        <div className="mt-8">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Blogify.today was founded in 2023 by a team of experienced web developers who wanted to create a platform for sharing their knowledge and expertise with the wider community. We're passionate about web development and we're committed to helping others learn and grow in their careers.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            If you have any questions, comments, or feedback, please don't hesitate to us. We'd love to hear from you!
          </p>
        </div>
      </div>
    </>
  
  )
}

export default About