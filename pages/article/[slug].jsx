import React from 'react'
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';







const ArticleDetails = ({data}) => {

    
  return (
    
    <div className="mt-[130px] w-[80%] m-auto mb=[50px]">
      <h1>{data.title}</h1>
      <Image width={500} height={500} src={data.image} alt="hero-image" className='w-full h-[400px]'></Image>
     <div dangerouslySetInnerHTML={{ __html: data.longDes }} />
    </div>
  )
}



export async function getServerSideProps(context) {
  const {slug}=context.query;
  const res=await axios.get(`http://localhost:3000/api/article/${slug}`)
  const data=res.data.document
  return {
    props: {data},
  }
}



export default ArticleDetails