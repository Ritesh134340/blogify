import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const ArticleDetails = ({ data }) => {
  const [col, setCol] = useState({});
  const length = Object.keys(col).length;
  const router = useRouter();
  const { slug } = router.query;
  const canonicalUrl = `https://blogify.today/${slug}`;

  const handleColorChange = (bgColor) => {
    if (bgColor === "#F1F6F9") {
      setCol({ bgColor: bgColor, text: "#555" });
    } else if (bgColor === "#f2f2f2") {
      setCol({ bgColor: bgColor, text: "#333" });
    } else if (bgColor === "#d5e5f2") {
      setCol({ bgColor: bgColor, text: "#233142" });
    } else if (bgColor === "#ecf0f1") {
      setCol({ bgColor: bgColor, text: " #2c3e50" });
    } else if (bgColor === "#f5f5dc") {
      setCol({ bgColor: bgColor, text: "#000" });
    }
  };

  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta name="description" content={slug} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="mt-[90px] w-[100%] m-auto sm:w-[97%] lg:w-[78%]">
        <div className="flex items-center mb-[10px] md:mb-[20px] justify-between px-[15px] sm:px-[20px] lg:px-[0px]">
          <h1 className="font-bold text-sm text-center sm:text-2xl">
            {data.title.toUpperCase()}
          </h1>

          <select
            name="color"
            className="border-[1px] outline-none py-[9px] px-[8px] lg:py-[8px] lg:px-[15px] rounded-sm"
            onChange={(e) => handleColorChange(e.target.value)}
          >
            <option value="">Select</option>
            <option value="#F1F6F9">Gray</option>
            <option value="#f2f2f2">Beige</option>
            <option value="#d5e5f2">Turquoise</option>
            <option value="#ecf0f1">Antique</option>
            <option value="#f5f5dc">Lavender</option>
          </select>
        </div>
        <Image
          width={550}
          height={550}
          src={data.image}
          alt="hero-image"
          className="w-full lg:rounded-[10px] md:h-[400px] lg:h-[500px]"
        ></Image>
        <div
          dangerouslySetInnerHTML={{ __html: data.longDes }}
          className={`px-[12px] py-[25px] pb-[50px] lg:mt-[5px]  md:px-[30px]  rounded-b-md `}
          style={{
            backgroundColor: length > 0 ? col.bgColor : "#F0F0F0",
            color: length > 0 ? col.text : "black",pb:"30px"
          }}
        ></div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}/api/article/${slug}`
  );
  const data = res.data.document;
  return {
    props: { data },
  };
}

export default ArticleDetails;
