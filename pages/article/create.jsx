import React, { useState, useEffect } from "react";
import axios from "axios";
import TextEditor from "@/components/textEditor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/components/loading";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"


const CreateArticle = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [longDes, setLongDes] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const router=useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })



  const handleCreateArticle = (e) => {
    e.preventDefault();
    if (title && image && shortDes && longDes && category) {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_CLIENT_ADDRESS}/api/article/create`, {
          title: title,
          image: image,
          shortDes: shortDes,
          longDes: longDes,
          category: category,
        })
        .then((res) => {
          toast.success(res.data.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setLoading(false);
        });
    }
  };

  return (
    <>
      {status === "loading" || loading ? (
        <Loading />
      ) : (
        <div className="bg-[#EEEEEE]  pt-[80px]  sm:pt-[90px] pb-[50px]  sm:min-h-[92vh]">
          <h2 className="text-center mb-[20px] text-2xl ">Create New Article</h2>
          <div className="bg-white m-auto shadow-xl rounded-[10px]  pt-[35px] w-[98%] md:w-[80%] lg:w-[55%] ">
            <form className="w-[87%] m-auto">
              <label className="text-sm text-slate-500">Title</label>
              <br />
              <input
                type="text"
                placeholder="Enter title"
                className=" outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <label className="text-sm text-slate-500">Image</label>
              <br />
              <input
                type="text"
                placeholder="Image link"
                className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <br />
              <label className="text-sm text-slate-500">
                Short Description
              </label>
              <br />
              <input
                type="text"
                placeholder="Short description"
                className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
                value={shortDes}
                onChange={(e) => setShortDes(e.target.value)}
              />
              <br />
              <label className="text-sm text-slate-500">Content</label>
              <br />
              <TextEditor value={longDes} setValue={setLongDes} />

              <br />
              <label className="text-sm text-slate-500">Category</label>
              <br />
              <input
                type="text"
                placeholder="Category"
                className="outline-none focus: border-[2px] focus:border-blue-600 h-[45px] rounded-[5px] mt-[8px] mb-[15px] pl-[10px] w-[100%]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br />
              <button
                className="rounded-[5px] bg-[rgb(137,55,95)] text-white py-[8px] px-[15px] mb-[25px] mt-[45px] "
                onClick={handleCreateArticle}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default CreateArticle;
