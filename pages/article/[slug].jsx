import React,{useState} from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

const ArticleDetails = ({ data }) => {
  const [col,setCol]=useState({})
  const length=Object.keys(col).length;


const handleColorChange=(bgColor)=>{

  if(bgColor==="#F1F6F9"){
    setCol({bgColor:bgColor,text:"#555"})
   
  }
  else if(bgColor==="#f2f2f2"){
    setCol({bgColor:bgColor,text:"#333"})
  }
  else if(bgColor==="#d5e5f2"){
    setCol({bgColor:bgColor,text:"#233142"})
  }
  else if(bgColor==="#ecf0f1"){
    setCol({bgColor:bgColor,text:" #2c3e50"})
  }
  else if(bgColor==="#f5f5dc"){
    setCol({bgColor:bgColor,text:"#000"})
  }
}


  return (
    <div className="mt-[100px] w-[100%] m-auto mb-[50px] lg:w-[85%]  ">
     <div className='flex items-center mb-[10px] md:mb-[30px] justify-between px-[15px] sm:px-[20px] lg:px-[0px]'>

      <h1 className="font-bold text-sm text-center sm:text-2xl">
        {data.title.toUpperCase()}
      </h1>

      <select name="color" className="border-[1px] outline-none p-1 rounded-sm" onChange={(e)=>handleColorChange(e.target.value)}>
        <option value="">Select</option>
        <option value="#F1F6F9">Gray</option>
        <option value="#f2f2f2">Beige</option>
        <option value="#d5e5f2">Turquoise</option>
        <option value="#ecf0f1">Antique</option>
        <option value="#f5f5dc">Lavender</option>
      </select>
     </div>
      <Image
        width={500}
        height={500}
        src={data.image}
        alt="hero-image"
        className="w-full rounded-[10px] md:h-[400px] lg:h-[450px]"
      ></Image>
      <div
        dangerouslySetInnerHTML={{ __html: data.longDes }}
        className={`px-[12px] py-[20px]  md:px-[30px]  rounded-md `}
        style={{backgroundColor:length>0 ? col.bgColor : "#F0F0F0",color:(length>0) ? col.text : "black"}}
      ></div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}/api/article/${slug}`);
  const data = res.data.document;
  return {
    props: { data },
  };
}

export default ArticleDetails;
