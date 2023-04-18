import AllBlogs from '@/components/allBlogs'
import Image from 'next/image'
import axios from "axios"

export async function getServerSideProps({ req, res, params, query }) {
  const response = await axios.get("http://localhost:3000/api/article/get");
  const data = response.data.articles;
  return {
    props: { data },
  };
}

export default function Home({data}) {

  return (
     <main className="mt-[150px]" >

     <p>Hello Blogify</p>
     <AllBlogs data={data}/>
     </main>
   

    
  )
}
