import React,{useState,useRef} from "react";
import axios from "axios"
import TextEditor from "@/components/textEditor";



const CreateArticle = () => {

 
   const [image, setImage] = useState("")
   const [title, setTitle] = useState("")
   const [shortDes, setShortDes] = useState("")
   const [longDes, setLongDes] = useState("")
   const [category, setCategory] = useState("")

   console.log(longDes)

  const handleCreateArticle=(e)=>{
    e.preventDefault()
    if(title && image && shortDes && longDes && category){
     axios.post("http://localhost:3000/api/article/create",{title:title,image:image,shortDes:shortDes,longDes:longDes,category:category}).then((res)=>{
      alert(res.data.mesg)
     }).catch((err)=>{
       
     })
    }
    
  }

  


  return (
    <>
    <h2 className="text-center mb-[30px]  mt-[130px]">Create New Article</h2>
    <div className="m-auto shadow-xl rounded-[10px] p-[15px] w-[55%] mb-[50px]">
      
      <form className="w-[90%] m-auto">
        <label className="text-sm text-slate-500">Title</label>
        <br />
        <input
          type="text"
          placeholder="Enter title"
          className=" outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
         value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br />
        <label className="text-sm text-slate-500">Image</label>
        <br />
        <input
          type="text"
          placeholder="Image link"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
          value={image} onChange={(e)=>setImage(e.target.value)}
        />
        <br />
        <label className="text-sm text-slate-500">Short Description</label>
        <br />
        <input
          type="text"
          placeholder="Short description"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
          value={shortDes} onChange={(e)=>setShortDes(e.target.value)}
        />
        <br />
        <label className="text-sm text-slate-500">Content</label>
        <br />
           <TextEditor value={longDes} setValue={setLongDes}/>
      
        <br />
        <label className="text-sm text-slate-500">Category</label>
        <br />
        <input
          type="text"
          placeholder="Category"
          className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
          value={category} onChange={(e)=>setCategory(e.target.value)}
        />
        <br />
        <button className="rounded-[5px] bg-[rgb(137,55,95)] text-white py-[8px] px-[15px] mb-[25px] mt-[45px] " onClick={handleCreateArticle}>
          Create
        </button>
      </form>
    </div>
    </>
    
  );
};

export default CreateArticle;
