import AllBlogs from '@/components/allBlogs'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';




export default function Home() {

  return (
     <main className="mt-[150px]" >

     <p>Hello Blogify</p>
   
     <AllBlogs/>
     </main>
   

    
  )
}
