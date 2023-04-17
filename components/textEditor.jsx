import React from 'react'
import dynamic from 'next/dynamic';
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import 'react-quill/dist/quill.snow.css';

const Editor=dynamic(()=>import("react-draft-wysiwyg").then((module)=>module.Editor),{ssr:false})

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const modules = {
    toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block', 'clean'],
          ['link', 'image', 'video']
        ],
        
      },
   
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet',
    'script', 'indent',
    'direction',
    'size',
    'color', 'background',
    'font',
    'align',
    'image', 'video', 'formula'
  ];
  

const TextEditor = ({value,setValue}) => {

    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return (
    //   <ReactQuill
    //     value={value}
    //     onChange={handleChange}
    //     modules={modules}
    //     formats={formats}
    //     placeholder='Enter content...'
    //   />
    <div>
  <Editor

  toolbarClassName="flex sticky top-0"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"

/>
    </div>
  
    );
}

export default TextEditor